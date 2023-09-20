(ns db-test.t02
  (:require [datomic.client.api :as d]))

;;Schemalar bu scriptte tanimlandi.
(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))


#_(d/create-database client {:db-name "SSP"})

(def conn (d/connect client {:db-name "SSP"}))
(def db (d/db conn))

(def supplier-schema [{:db/ident       :supplier/id
                       :db/valueType   :db.type/long
                       :db/unique      :db.unique/identity
                       :db/cardinality :db.cardinality/one}
                      {:db/ident       :supplier/name
                       :db/valueType   :db.type/string
                       :db/unique      :db.unique/identity
                       :db/cardinality :db.cardinality/one}
                      {:db/ident       :supplier/types
                       :db/valueType   :db.type/ref
                       :db/cardinality :db.cardinality/many}])


(d/transact conn {:tx-data supplier-schema})


(def customer-schema [{:db/ident       :customer/id
                       :db/valueType   :db.type/long
                       :db/unique      :db.unique/identity
                       :db/cardinality :db.cardinality/one}
                      {:db/ident       :customer/name
                       :db/valueType   :db.type/string
                       :db/unique      :db.unique/identity
                       :db/cardinality :db.cardinality/one}])
(d/transact conn {:tx-data customer-schema})

(def proposal-schema [{:db/ident :proposal/id
                       :db/valueType :db.type/long
                       :db/unique :db.unique/identity
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :proposal/supplier
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :proposal/price
                       :db/valueType :db.type/float
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :proposal/project
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :proposal/timestamp
                       :db/valueType :db.type/instant
                       :db/cardinality :db.cardinality/one}])

(d/transact conn {:tx-data proposal-schema})

(def project-schema [{:db/ident       :project/id
                      :db/valueType   :db.type/long
                      :db/unique      :db.unique/identity
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/title
                      :db/valueType   :db.type/string
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/status
                      :db/valueType   :db.type/keyword
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/create_date
                      :db/valueType   :db.type/instant
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/tender_winner
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/many}
                     {:db/ident       :project/bidder
                      :db/valueType   :db.type/string
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/description
                      :db/valueType   :db.type/string
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/deadline
                      :db/valueType   :db.type/instant
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/start_date
                      :db/valueType   :db.type/instant
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/types
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/many}
                     {:db/ident       :project/customer
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/many}
                     {:db/ident :project/proposal
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/many}])

(d/transact conn {:tx-data project-schema})


(def type-schema [{:db/ident :type/id
                   :db/valueType :db.type/long
                   :db/unique :db.unique/identity
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :type/name
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}])

(d/transact conn {:tx-data type-schema})

(def author-schema [{:db/ident :author/id
                     :db/valueType :db.type/long
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :author/name
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :author/customer
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/one}])
(d/transact conn {:tx-data author-schema})
(def message-schema [{:db/ident :message/id
                      :db/valueType :db.type/long
                      :db/unique :db.unique/identity
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :message/project
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :message/from
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :message/to
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :message/timestamp
                      :db/valueType :db.type/instant
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :message/message
                      :db/valueType :db.type/string
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :message/subject
                      :db/valueType :db.type/string
                      :db/cardinality :db.cardinality/one}])


(d/transact conn {:tx-data message-schema})
(new java.util.Date)