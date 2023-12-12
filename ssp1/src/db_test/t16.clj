(ns db-test.t16
  (:require [datomic.client.api :as dt]))

(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ci"}))



(def conn (dt/connect client {:db-name "SSP"}))
(def db (dt/db conn))

(def review-schema [{:db/ident :review/id
                     :db/valueType :db.type/long
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :review/review
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :review/to
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :review/from
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :review/timestamp
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :review/like
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :review/dislike
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one}])

#_(dt/transact conn {:tx-data review-schema})
(dt/q '[:find ?e :where [?e :supplier/name "Sabanci Holding"]] db)

(def sample-review [{:review/id 1
                     :review/to 74766790688880
                     :review/from 79164837199981
                     :review/timestamp (System/currentTimeMillis)
                     :review/review "Review test 1"
                     :review/like 3
                     :review/dislike 1}])

(dt/transact conn {:tx-data sample-review})

