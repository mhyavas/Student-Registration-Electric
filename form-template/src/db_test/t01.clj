(ns db-test.t01
  (:require [datomic.client.api :as d]))


(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\form-template\\form-db"
                       :system      "ci"}))

#_(d/create-database client {:db-name "form"})

(def conn (d/connect client {:db-name "form"}))

(def db (d/db conn))


(def form-schema [{:db/ident :form/id
                   :db/valueType :db.type/long
                   :db/unique :db.unique/identity
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :form/username
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :form/password
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}])

(d/transact conn {:tx-data form-schema})
;:tx-data [#datom[13194139533318 50 #inst"2023-12-28T08:25:21.118-00:00" 13194139533318 true]
;           #datom[73 10 :form/id 13194139533318 true]
;           #datom[73 40 22 13194139533318 true]
;           #datom[73 42 38 13194139533318 true]
;           #datom[73 41 35 13194139533318 true]
;           #datom[74 10 :form/username 13194139533318 true]
;           #datom[74 40 23 13194139533318 true]
;           #datom[74 41 35 13194139533318 true]
;           #datom[75 10 :form/password 13194139533318 true]
;           #datom[75 40 23 13194139533318 true]
;           #datom[75 41 35 13194139533318 true]
;           #datom[0 13 73 13194139533318 true]
;           #datom[0 13 74 13194139533318 true]
;           #datom[0 13 75 13194139533318 true]]



(d/transact conn {:tx-data [{:form/id 1
                             :form/username "ahmetvaldez"
                             :form/password "123456"}]})




