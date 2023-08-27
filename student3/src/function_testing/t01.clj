(ns function-testing.t01
  (:require [datomic.client.api :as d]))

(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\datodb"
                       :system      "ci"}))

(d/create-database client {:db-name "studentReg"})

(def conn (d/connect client {:db-name "studentReg"}))

(def datodb (d/db conn))
(def schema-student [{:db/ident       :student/id
                      :db/valueType   :db.type/long
                      :db/unique      :db.unique/identity
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :student/name
                      :db/valueType   :db.type/string
                      :db/unique      :db.unique/identity
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :student/department
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :student/course
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/many}])
(d/transact conn {:tx-data schema-student})

(def schema-course [{:db/ident :course/id
                     :db/valueType :db.type/long
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :course/code
                     :db/valueType :db.type/string
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :course/name
                     :db/valueType :db.type/string
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :course/department
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/many}
                    {:db/ident :course/instructor
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/many}
                    {:db/ident :course/class
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one}])

(d/transact conn {:tx-data schema-course})

(d/transact conn {:tx-data [{:course/id 201
                             :course/name "Calculus 1"
                             :course/code "MAT101"
                             :course/department [[:department/id 401] [:department/id 402]]
                             :course/instructor [[:instructor/id 301]]
                             :course/class "A101"}]})

(d/q '[:find ?e
       :where [?e :course/code "MAT101"]] datodb)




(def schema-dept  [{:db/ident :department/name
                    :db/valueType :db.type/string
                    :db/cardinality :db.cardinality/one}
                   {:db/ident :department/id
                    :db/unique :db.unique/identity
                    :db/valueType :db.type/long
                    :db/cardinality :db.cardinality/one}])


(def schema-instructor [{:db/ident :instructor/id
                         :db/unique :db.unique/identity
                         :db/valueType :db.type/long
                         :db/cardinality :db.cardinality/one}
                        {:db/ident :instructor/name
                         :db/valueType :db.type/string
                         :db/cardinality :db.cardinality/one}
                        {:db/ident :instructor/department
                         :db/valueType :db.type/ref
                         :db/cardinality :db.cardinality/many}])


(d/transact conn {:tx-data schema-instructor})

(d/transact conn {:tx-data [{:instructor/name       "Mehmet Karaca"
                             :instructor/id         301
                             :instructor/department [[:department/id 401]]}]})


(d/transact conn [{:instructor/name "Gamze Aydogan"
                   :instructor/id 302
                   :instructor/department [[:department/id 401]]}])

(d/transact conn {:tx-data schema-dept})

(def sample-dept [{:department/name "Matematik"
                   :department/id 401}])
(def sample-dept2 [{:department/name "Fizik"
                    :department/id 402}])

(d/transact conn {:tx-data sample-dept2})
(def sample-student [{:student/name       "Ali Deniz"
                      :student/department [:department/id 401]
                      :student/course     [[:course/id 201]]
                      :student/id         101}])

(d/transact conn {:tx-data sample-student})
(d/transact conn {:tx-data sample-dept})

(ffirst (d/q '[:find (max ?id)
               :where [_ :department/id ?id]] datodb))
(defn student-next-id [db]
  (if (empty? (d/q '[:find (max ?id)
                     :where [_ :student/id ?id]] db))
    101
    (inc (ffirst (d/q '[:find (max ?id)
                        :where [_ :student/id ?id]] db)))))

(comment

  ;String olan department name kismini datomic yapisan uydurmak icin,
  (:department sample-student)
  ;=> "Matematik"
  (ffirst (d/q `[:find ?id
                 :where [?e :department/name "Matematik"]
                 [?e :department/id ?id]] datodb))
  ;=> 401
  (vector (vector (keyword "department" "id") (ffirst (d/q `[:find ?id
                                                             :where [?e :department/name "Matematik"]
                                                             [?e :department/id ?id]] datodb))))
  ;=> [[:department/id 401]]

  ;If there ara more than one department
  (def sample-dept-multi "Matematik,Fizik")

  (clojure.string/split sample-dept-multi #",")
  => ["Matematik" "Fizik"]

  (map (fn [dept] (d/q '[:find ?id
                         :in $ ?dept
                         :where [?e :department/name ?dept]
                         [?e :department/id ?id]] datodb dept)) (clojure.string/split sample-dept-multi #","))
  ;=> ([[401]] [[402]])

  (into [] (map (fn [dept] (vector (keyword "department" "id") (ffirst (d/q '[:find ?id

                                                                              :in $ ?dept
                                                                              :where [?e :department/name ?dept]
                                                                              [?e :department/id ?id]] datodb dept)))) (clojure.string/split sample-dept-multi #",")))
  ;=> [[:department/id 401] [:department/id 402]]
  (def sample-dept-1 "Matematik")
  (into [] (map (fn [dept] (vector (keyword "department" "id") (ffirst (d/q '[:find ?id

                                                                              :in $ ?dept
                                                                              :where [?e :department/name ?dept]
                                                                              [?e :department/id ?id]] datodb dept)))) (clojure.string/split sample-dept-1 #",")))
  ;=> [[:department/id 401]]

    ;
  ,)


(comment
  ;String Course code ile course id bulmak icin
  (def sample-dept-multi "MAT101")

  (clojure.string/split sample-dept-multi #",")

  (d/q '[:find ?id
         :in $ ?code
         :where [?e :course/code ?code]
                [?e :course/id ?id]] datodb "MAT101")
  ;=> [[201]]
  (into [] (map (fn [code] (vector (keyword "course" "id") (ffirst (d/q '[:find ?id
                                                                          :in $ ?code
                                                                          :where [?e :course/code ?code]
                                                                          [?e :course/id ?id]] datodb code)))) (clojure.string/split sample-dept-multi #",")))
  ;=> [[:course/id 201]]

  ;end
  ,)



(defn student-next-id [db]
  (if (empty? (d/q '[:find (max ?id)
                     :where [_ :student/id ?id]] db))
    101
    (inc (ffirst (d/q '[:find (max ?id)
                        :where [_ :student/id ?id]] db)))))

(student-next-id datodb)

(flatten (d/q '[:find ?name
                :where [_ :department/name ?name]] datodb))

(defn course-instructor-id-finder [instructor-string db]
  (into [] (map (fn [instructor] (vector (keyword "instructor" "id") (ffirst (d/q '[:find ?id
                                                                                    :in $ ?instructor
                                                                                    :where [?e :instructor/name ?instructor]
                                                                                    [?e :instructor/id ?id]] db instructor)))) (clojure.string/split instructor-string #","))))
(course-instructor-id-finder "Mehmet Karaca" datodb)

(flatten (d/q '[:find ?name
                :where [_ :instructor/name ?name]] datodb))