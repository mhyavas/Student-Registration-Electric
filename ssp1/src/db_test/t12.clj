(ns db-test.t12
  (:require [datomic.client.api :as dt]))

;Messaging query version 2


(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ci"}))



(def conn (dt/connect client {:db-name "SSP"}))
(def db (dt/db conn))

(for [msg (dt/q '[:find (pull ?e [*])
                  :in $ ?title
                  :where [?e :msg/title ?title]
                  [?e :msg/timestamp ?timestamp]] db "test3")]
  (if (nil? (:msg/reply_to (first msg)))
    nil #_(identity (:msg/id (first msg)))
    (for [msg2 (dt/q '[:find (pull ?e [*])
                       :in $ ?ref
                       :where [?e :msg/title ?title]
                       [?e :msg/reply_to ?ref]] db (:db/id (first msg)))]
      #_(identity (:db/id (first (flatten msg2))))
      (dt/q '[:find (pull ?e [*])
              :in $ ?ref
              :where [?e :msg/reply_to ?ref]] db (:db/id (first (flatten msg2)))))))

(defn replier [m]
  (if (nil? (:msg/reply_to (first m)))
    (first m)
    (dt/q '[:find (pull ?e [*])
            :in $ ?ref
            :where [?e :msg/reply_to ?ref]] db (:db/id (first m)))))

(map replier (dt/q '[:find (pull ?e [*])
                     :in $ ?title
                     :where [?e :msg/title ?title]
                     [?e :msg/timestamp ?timestamp]] db "test3"))

(dt/transact conn {:tx-data [{:db/id 87960930222226
                              :msg/reply_to 87960930222219}]})