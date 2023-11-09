(ns db-test.t10
  (:require [datomic.client.api :as dt]))
;Messaging Queries

(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ci"}))



(def conn (dt/connect client {:db-name "SSP"}))
(def db (dt/db conn))

(dt/q '[:find (pull ?e [*])
        :in $ ?title
        :where [?e :msg/title ?title]
        (not [?e :msg/reply_to _])] db "test3")


(dt/q '[:find (pull ?e [*])
        :in $ ?ref
        :where [?e :msg/reply_to ?ref]] db 87960930222216)



(dt/q '[:find (pull ?e [*])
        :in $ ?title
        :where [?e :msg/title ?title]
        [?e :msg/timestamp ?timestamp]
        (not [?e :msg/reply_to _])
        :order (asc ?timestamp)] db title)

(dt/q)