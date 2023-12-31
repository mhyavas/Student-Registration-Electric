(ns db-test.t01
  (:require [datomic.client.api :as d]
            [java-time.api :as jt]))


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
                      {:db/ident       :supplier/type
                       :db/valueType   :db.type/ref
                       :db/cardinality :db.cardinality/many}
                      {:db/ident       :supplier/projects
                       :db/valueType   :db.type/ref
                       :db/cardinality :db.cardinality/many}])

(def customer-schema [{:db/ident       :customer/id
                       :db/valueType   :db.type/long
                       :db/unique      :db.unique/identity
                       :db/cardinality :db.cardinality/one}
                      {:db/ident       :customer/name
                       :db/valueType   :db.type/string
                       :db/unique      :db.unique/identity
                       :db/cardinality :db.cardinality/one}])

(def proposer-schema [{:db/ident :proposer/id
                       :db/valueType :db.type/long
                       :db/unique :db.unique/identity
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :proposer/supplier
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :proposer/price
                       :db/valueType :db.type/float
                       :db/cardinality :db.cardinality/one}])

;Proposer ya da contact gibi teklif veren firmayi supplierdan ayirmak gerekiyor.

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
                     {:db/ident       :project/date
                      :db/valueType   :db.type/instant
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/supplier
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/many}
                     {:db/ident       :project/author
                      :db/valueType   :db.type/string
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/description
                      :db/valueType   :db.type/string
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/deadline
                      :db/valueType   :db.type/instant
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :project/types
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/many}
                     {:db/ident       :project/customer
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/many}
                     {:db/ident :project/proposer
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/many}])

;Teklifler referans eklenip supplier tarafina FK kurulumu
(def type-schema [{:db/ident :type/id
                   :db/valueType :db.type/long
                   :db/unique :db.unique/identity
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :type/name
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}])

(d/transact conn {:tx-data type-schema})
(d/transact conn {:tx-data supplier-schema})

(d/transact conn {:tx-data customer-schema})

(d/transact conn {:tx-data project-schema})
(d/transact conn {:tx-data proposer-schema})


(def sample-types [{:type/id 1
                    :type/name "SAP"}])
(d/transact conn {:tx-data sample-types})

(def sample-proposer [{:proposer/id 1
                       :proposer/supplier 74766790688861
                       :proposer/price 1000.0}])
(d/transact conn {:tx-data sample-proposer})
(def sample-project [{:project/id 1
                      :project/title "SSP"
                      :project/status :active
                      :project/customer "MSFT"
                      :project/author "Huseyin Yavas"
                      :project/description "Software Sourcing Platform"
                      :project/proposer [79164837199967]
                      :project/types [101155069755484]
                      :project/deadline (t/now)
                      :project/supplier 13194139533326}])
(def sample-supplier [{:supplier/id 1
                       :supplier/name "Test Company"
                       :supplier/type [101155069755484]
                       :supplier/projects []}])

(d/transact conn {:tx-data sample-supplier})
