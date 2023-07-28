(ns notebooks.e01
  (:require [nextjournal.clerk :as clerk]
            [datomic.client.api :as d]
            [datascript.core :as ds]))


;Bu clerk dosyasında datascript ve datomic arasındaki query farklıkları var.

;Datomic DB creation and connection functions
(def client (d/client {:server-type :dev-local
                       :storage-dir :mem
                       :system      "ci"}))

(d/create-database client {:db-name "db5"})

(def conn (d/connect client {:db-name "db5"}))

(def datomic-db (d/db conn))


(def schema-course
  [{:db/ident       :course/id
    :db/valueType   :db.type/long
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :course/code
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :course/name
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :course/department
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}])

(d/transact
  conn
  {:tx-data [{:db/ident :department/matematik}
             {:db/ident :department/fizik}
             {:db/ident :department/sosyoloji}]})
(d/transact conn {:tx-data schema-course})
^{::clerk/visibility {:code :hide}}
;=>
;{:db-before #datomic.core.db.Db{:id "d18399ec-1c3b-48a0-afa4-7341a1facde4",
;                                :basisT 5,
;                                :indexBasisT 0,
;                                :index-root-id nil,
;                                :asOfT nil,
;                                :sinceT nil,
;                                :raw nil},
; :db-after #datomic.core.db.Db{:id "d18399ec-1c3b-48a0-afa4-7341a1facde4",
;                               :basisT 6,
;                               :indexBasisT 0,
;                               :index-root-id nil,
;                               :asOfT nil,
;                               :sinceT nil,
;                               :raw nil},
; :tx-data [#datom[13194139533318 50 #inst"2023-07-26T23:52:58.986-00:00" 13194139533318 true]
;           #datom[73 10 :course/id 13194139533318 true]
;           #datom[73 40 22 13194139533318 true]
;           #datom[73 42 38 13194139533318 true]
;           #datom[73 41 35 13194139533318 true]
;           #datom[74 10 :course/code 13194139533318 true]
;           #datom[74 40 23 13194139533318 true]
;           #datom[74 42 38 13194139533318 true]
;           #datom[74 41 35 13194139533318 true]
;           #datom[75 10 :course/name 13194139533318 true]
;           #datom[75 40 23 13194139533318 true]
;           #datom[75 42 38 13194139533318 true]
;           #datom[75 41 35 13194139533318 true]
;           #datom[76 10 :course/department 13194139533318 true]
;           #datom[76 40 20 13194139533318 true]
;           #datom[76 41 36 13194139533318 true]
;           #datom[0 13 73 13194139533318 true]
;           #datom[0 13 74 13194139533318 true]
;           #datom[0 13 75 13194139533318 true]
;           #datom[0 13 76 13194139533318 true]],
; :tempids {}}

(defn CreateCourse [id code name department db]
  (d/transact db {:tx-data [{:course/id         id
                             :course/code       code
                             :course/name       name
                             :course/department department}]}))

(CreateCourse 1 "FIZ101" "Fizik Giris" [:department/fizik :department/matematik] conn)
^{::clerk/visibility {:code :hide}}
;=>
;{:db-before #datomic.core.db.Db{:id "08063c5a-34f9-43a7-b9da-c723ddf315f2",
;                                :basisT 11,
;                                :indexBasisT 0,
;                                :index-root-id nil,
;                                :asOfT nil,
;                                :sinceT nil,
;                                :raw nil},
; :db-after #datomic.core.db.Db{:id "08063c5a-34f9-43a7-b9da-c723ddf315f2",
;                               :basisT 12,
;                               :indexBasisT 0,
;                               :index-root-id nil,
;                               :asOfT nil,
;                               :sinceT nil,
;                               :raw nil},
; :tx-data [#datom[13194139533324 50 #inst"2023-07-27T00:01:14.823-00:00" 13194139533324 true]
;           #datom[87960930222160 73 1 13194139533324 true]
;           #datom[87960930222160 74 "FIZ101" 13194139533324 true]
;           #datom[87960930222160 75 "Fizik Giris" 13194139533324 true]
;           #datom[87960930222160 76 92358976733262 13194139533324 true]
;           #datom[87960930222160 76 92358976733261 13194139533324 true]],
; :tempids {}}


#_(d/q '[:find [(pull ?e [:course/id :course/code :course/name :course/department]...)]
         :in $ ?dept
         :where [?e :course/department ?dept]]

       datomic-db [:department/fizik])
;Execution error (ExceptionInfo) at datomic.query.support/incorrect! (support.clj:21).
;Only find-rel elements are allowed in client :find

(d/q '[:find (pull ?e [:course/id :course/code :course/name :course/department])
       :in $ [?dept ...]
       :where [?e :course/department ?dept]]

     datomic-db [:department/fizik])
;=>
;[[#:course{:id 1,
;           :code "FIZ101",
;           :name "Fizik Giris",
;           :department [#:db{:id 92358976733261, :ident :department/matematik}
;                        #:db{:id 92358976733262, :ident :department/fizik}]}]]

(CreateCourse 2 "MAT101" "Calculus 1" [:department/fizik :department/matematik] conn)

(d/q '[:find (pull ?e [:course/id :course/code :course/name :course/department])
       :in $ [?dept ...]
       :where [?e :course/department ?dept]]

     datomic-db [:department/fizik])
;=>
;[[#:course{:id 1,
;           :code "FIZ101",
;           :name "Fizik Giris",
;           :department [#:db{:id 92358976733261, :ident :department/matematik}
;                        #:db{:id 92358976733262, :ident :department/fizik}]}]
; [#:course{:id 2,
;           :code "MAT101",
;           :name "Calculus 1",
;           :department [#:db{:id 92358976733261, :ident :department/matematik}
;                        #:db{:id 92358976733262, :ident :department/fizik}]}]]


;  ### Datascript ile DB oluşturma ve query çalıştırma

(defonce ds-conn (ds/create-conn {}))

(defn create-schema [schema1 db]
  (ds/transact! db schema1))

(create-schema schema-course ds-conn)
^{::clerk/visibility {:code :hide}}
;=>
;#datascript.db.TxReport{:db-before #datascript/DB{:schema {}, :datoms []},
;                        :db-after #datascript/DB{:schema {},
;                                                 :datoms [[1 :db/cardinality :db.cardinality/one 536870913]
;                                                          [1 :db/ident :course/id 536870913]
;                                                          [1 :db/unique :db.unique/identity 536870913]
;                                                          [1 :db/valueType :db.type/long 536870913]
;                                                          [2 :db/cardinality :db.cardinality/one 536870913]
;                                                          [2 :db/ident :course/code 536870913]
;                                                          [2 :db/unique :db.unique/identity 536870913]
;                                                          [2 :db/valueType :db.type/string 536870913]
;                                                          [3 :db/cardinality :db.cardinality/one 536870913]
;                                                          [3 :db/ident :course/name 536870913]
;                                                          [3 :db/unique :db.unique/identity 536870913]
;                                                          [3 :db/valueType :db.type/string 536870913]
;                                                          [4 :db/cardinality :db.cardinality/many 536870913]
;                                                          [4 :db/ident :course/department 536870913]
;                                                          [4 :db/valueType :db.type/ref 536870913]]},
;                        :tx-data [#datascript/Datom[1 :db/ident :course/id 536870913 true]
;                                  #datascript/Datom[1 :db/valueType :db.type/long 536870913 true]
;                                  #datascript/Datom[1 :db/unique :db.unique/identity 536870913 true]
;                                  #datascript/Datom[1 :db/cardinality :db.cardinality/one 536870913 true]
;                                  #datascript/Datom[2 :db/ident :course/code 536870913 true]
;                                  #datascript/Datom[2 :db/valueType :db.type/string 536870913 true]
;                                  #datascript/Datom[2 :db/unique :db.unique/identity 536870913 true]
;                                  #datascript/Datom[2 :db/cardinality :db.cardinality/one 536870913 true]
;                                  #datascript/Datom[3 :db/ident :course/name 536870913 true]
;                                  #datascript/Datom[3 :db/valueType :db.type/string 536870913 true]
;                                  #datascript/Datom[3 :db/unique :db.unique/identity 536870913 true]
;                                  #datascript/Datom[3 :db/cardinality :db.cardinality/one 536870913 true]
;                                  #datascript/Datom[4 :db/ident :course/department 536870913 true]
;                                  #datascript/Datom[4 :db/valueType :db.type/ref 536870913 true]
;                                  #datascript/Datom[4 :db/cardinality :db.cardinality/many 536870913 true]],
;                        :tempids {1 1, 2 2, 3 3, 4 4, :db/current-tx 536870913},
;                        :tx-meta nil}



(comment
  (ds/q '[:find [(pull ?e [:course/id :course/code :course/name :course/department] ...)]
          :in $ [?dept ...]
          :where [?e :course/department ?dept]]

        ds-conn [:department/fizik])
  ;Execution error (ExceptionInfo) at datascript.parser/parse-pull-expr (parser.cljc:316).
  ;Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]

  (ds/q '[:find [(pull ?e [:course/id :course/code :course/name :course/department])]
          :in $ [?dept ...]
          :where [?e :course/department ?dept]]

        ds-conn :department/fizik)
  ;Execution error (ExceptionInfo) at datascript.query/eval26794$fn (query.cljc:189).
  ;Cannot bind value :department/fizik to collection [?dept ...]

  (ds/q '[:find [(pull ?e [:course/id :course/code :course/name :course/department])]
          :in $ ?dept
          :where [?e :course/department ?dept]]

        ds-conn [:department/fizik])
  ;Execution error (IllegalArgumentException) at datascript.query/lookup-pattern-coll (query.cljc:342).
  ;Don't know how to create ISeq from: clojure.lang.Atom


  ,)



