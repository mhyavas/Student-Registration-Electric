(ns db-test.t14
  (:require [datomic.client.api :as dt]))

;For super admin, creating datomic schema and admin

(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ci"}))



(def conn (dt/connect client {:db-name "SSP"}))
(def db (dt/db conn))

(def admin-schema [{:db/ident :admin/id
                    :db/valueType :db.type/long
                    :db/unique :db.unique/identity
                    :db/cardinality :db.cardinality/one}
                   {:db/ident :admin/name
                    :db/valueType :db.type/string
                    :db/cardinality :db.cardinality/one}
                   {:db/ident :admin/password
                    :db/valueType :db.type/string
                    :db/cardinality :db.cardinality/one}])

(dt/transact conn {:tx-data admin-schema})


(def sample-admin [{:admin/id 1
                    :admin/name "admin"
                    :admin/password "admin"}])

(dt/transact conn {:tx-data sample-admin})
