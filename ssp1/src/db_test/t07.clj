(ns db-test.t07
  (:require [datomic.client.api :as d]))


;Message datomic schema


(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))



(def conn (d/connect client {:db-name "SSP"}))
(def db (d/db conn))


(def message-schema [{:db/ident :msg/title
                      :db/valueType :db.type/string
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :msg/reply_to
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :msg/author
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/one}])

(d/transact conn {:tx-data message-schema})


(d/q '[:find ?attr ?type ?card
       :where
       [_ :db.install/attribute ?a]
       [?a :db/valueType ?t]
       [?a :db/cardinality ?c]
       [?a :db/ident ?attr]
       [?t :db/ident ?type]
       [?c :db/ident ?card]] db)


(d/q '[:find ?e ?ident
       :where [?e :db/ident ?ident]] db)

(d/q '[:find ?e
       :in $ ?name
       :where [?e :author/name ?name]] db "Mehmet Karaca")
(d/transact conn {:tx-data [{:msg/id        61
                             :msg/title     "Test"
                             :msg/message   "Test message"
                             :msg/timestamp (System/currentTimeMillis)
                             :msg/author    101155069755507}]})

(d/q '[:find (pull ?e [*])
       :where [?e :msg/id 61]] db)

(d/q  (ffirst (d/q '[:find (max ?id)
                     :in $ ?title
                     :where [?e :msg/title ?title]
                     [?e :msg/id ?id]] db "Trade Automation")))


(d/q '[:find ?e :where [?e :author/name "Seha Gurbuz"]] db)


(d/q '[:find ?name
       :in $ ?title
       :where [?p :project/title ?title]
       [?ppl :proposal/project ?p]
       [?ppl :proposal/supplier ?s]
       [?s :supplier/name ?name]] db "test3")