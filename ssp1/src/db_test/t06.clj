(ns db-test.t06
  (:require [datomic.client.api :as d]))




(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))



(def conn (d/connect client {:db-name "SSP"}))
(def db (d/db conn))

(flatten (d/q '[:find ?msgs
                :in $ ?chat-subject
                :where [?e :chat/subject ?chat-subject]
                [?e :chat/messages ?msgs]] (d/db conn) "Trade Automation"))


(ffirst (d/q '[:find ?e
               :in $ ?msg
               :where [?e :msg/message ?msg]] (d/db conn) "test1"))

(d/q '[:find ?msg ?from
       :in $ ?title
       :where [?m :chat/subject ?title]
       [?m :chat/messages ?msg]
       [?m :chat/from ?from]] (d/db conn) "Trade Automation")


(into [] (:chat/to (first (flatten (d/q '[:find (pull ?e [*])
                                          :in $ ?chat-subject
                                          :where [?e :chat/subject ?chat-subject]
                                          [?e :chat/project _]] (d/db conn) "Trade Automation")))))

(map (fn [v] (second v)) (into [] (:chat/to (first (flatten (d/q '[:find (pull ?e [*])
                                                                   :in $ ?chat-subject
                                                                   :where [?e :chat/subject ?chat-subject]
                                                                   [?e :chat/project _]] (d/db conn) "Trade Automation"))))))


(if (nil? (:chat/messages (first (flatten (d/q '[:find (pull ?e [*])
                                                 :in $ ?chat-subject
                                                 :where [?e :chat/subject ?chat-subject]
                                                 [?e :chat/project _]] (d/db conn) "Trade Automation")))))

  []
  (into [] (map (fn [v] (second v)) (into [] (:chat/messages (first (flatten (d/q '[:find (pull ?e [*])
                                                                                    :in $ ?chat-subject
                                                                                    :where [?e :chat/subject ?chat-subject]
                                                                                    [?e :chat/project _]] (d/db conn) "Trade Automation"))))))))

(into [] (map (fn [v] (:db/id  v)) (into [] (:chat/messages (first (flatten (d/q '[:find (pull ?e [*])
                                                                                   :in $ ?chat-subject
                                                                                   :where [?e :chat/subject ?chat-subject]
                                                                                   [?e :chat/id _]] (d/db conn) "Trade Automation")))))))


(map (fn [v] (identity (:db/id v))) (into [] (:chat/messages (first (flatten (d/q '[:find (pull ?e [*])
                                                                                    :in $ ?chat-subject
                                                                                    :where [?e :chat/subject ?chat-subject]
                                                                                    [?e :chat/id _]] (d/db conn) "Trade Automation"))))))