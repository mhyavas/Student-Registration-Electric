(ns function-testing.t03
  (:require [datomic.client.api :as d]))


(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\datodb"
                       :system      "ci"}))

(def conn (d/connect client {:db-name "studentReg"}))

(def db (d/db conn))

(def dom-schema [{:db/ident :field/description
                  :db/valueType :db.type/string
                  :db/unique :db.unique/identity
                  :db/cardinality :db.cardinality/one}
                 {:db/ident :field/status
                  :db/valueType :db.type/keyword
                  :db/cardinality :db.cardinality/one}])
(d/transact conn {:tx-data dom-schema})


(d/transact conn {:tx-data [{:field/description   "student_name"
                             :field/status :inactive}
                            {:field/description   "student_department"
                             :field/status :inactive}
                            {:field/description   "student_surname"
                             :field/status :inactive}
                            {:field/description   "student_course"
                             :field/status :inactive}]})


(d/q '[:find ?name
       :where [?e :field/status :active]
              [?e :field/description ?name]] db)

(d/transact conn {:tx-data [{:field/description "student_name"
                             :field/status :active}]})





