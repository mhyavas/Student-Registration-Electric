(ns app.db-test.t01
  (:require [datomic.client.api :as dt]))

(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\auth-test\\auth-db"
                        :system      "ci"}))

#_(dt/create-database client {:db-name "auth-test"})

(def conn (dt/connect client {:db-name "auth-test"}))
(def db (dt/db conn))


(def auth-schema [{:db/ident :user/id
                   :db/valueType :db.type/long
                   :db/unique :db.unique/identity
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :user/username
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :user/password
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :user/admin
                   :db/valueType :db.type/boolean
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :user/security-word
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}])

(dt/transact conn {:tx-data auth-schema})

(def sample-user [{:user/id 1
                   :user/username "luffy"
                   :user/password "123456"
                   :user/admin true
                   :user/security-word "sunnygo"}])

(dt/transact conn {:tx-data sample-user})

;:tx-data [#datom[13194139533319 50 #inst"2024-01-07T14:26:45.739-00:00" 13194139533319 true]
;           #datom[83562883711054 73 1 13194139533319 true]
;           #datom[83562883711054 74 "luffy" 13194139533319 true]
;           #datom[83562883711054 75 "123456" 13194139533319 true]
;           #datom[83562883711054 76 true 13194139533319 true]
;           #datom[83562883711054 77 "sunnygo" 13194139533319 true]],


(dt/transact conn {:tx-data [{:db/ident :user/token
                              :db/valueType :db.type/string
                              :db/cardinality :db.cardinality/one}]})

