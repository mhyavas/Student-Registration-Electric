(ns app.create-course
  (:require clojure.edn
            contrib.ednish
            clojure.string
            #?(:cljc [reagent.core :as reagent])
            [contrib.datomic-m #?(:clj :as :cljs :as-alias) d]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])
            [contrib.datomic-m #?(:clj :as :cljs :as-alias) d]
            #?(:cljc [thereisnodot.reagent-autocomplete.core :as autocomplete])))


(e/def conn)
(e/def db)

(def !state (atom {:selected nil
                   :stage-student    {:name       ""
                                      :surname    ""
                                      :department ""
                                      :course     ""
                                      :id         0}
                   :stage-course {:name ""
                                  :code ""
                                  :department ""
                                  :instructor ""
                                  :class ""
                                  :id 0}
                   :stage-instructor {:name ""
                                      :department ""
                                      :id 0}
                   :names    (sorted-map 0 {:name "Emil", :surname "Hans", :department [:department/matematik], :course ["MAT101"] :id 0})
                   :courses  (sorted-map 0 {:name "Calculus 1" :code "MAT101" :department [:department/matematik :department/fizik] :id 0})
                   :instructor (sorted-map 0 {:name "Ali Deniz" :id 1 :department [:department/fizik] :course ["MAT101"]})}))

#?(:clj (defn CreateStudent [id name surname department course db]
          (dt/transact db {:tx-data [{:student/id         id
                                      :student/name       (str name " " surname)
                                      :student/department department
                                      :student/course     course}]})))
#?(:clj (defn student-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :student/id ?id]] db))
            101
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :student/id ?id]] db))))))

#?(:clj (defn course-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :course/id ?id]] db))
            201
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :course/id ?id]] db))))))
#?(:clj (defn instructor-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :instructor/id ?id]] db))
            301
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :instructor/id ?id]] db))))))

#?(:clj (defn department-id-finder [dept-string db]

          ;Cikti olarak:
          ;=> [[:department/id 401] [:department/id 402]]
          (vector (keyword "department" "id") (ffirst (dt/q '[:find ?id
                                                              :in $ ?dept
                                                              :where [?e :department/name ?dept]
                                                              [?e :department/id ?id]] db (clojure.string/capitalize dept-string))))
          #_(map (fn [dept] (vector (keyword "department" "id") (ffirst (dt/q '[:find ?id
                                                                                :in $ ?dept
                                                                                :where [?e :department/name ?dept]
                                                                                [?e :department/id ?id]] db (clojure.string/capitalize dept))))) (clojure.string/split dept-string #","))))


#?(:clj (defn course-id-finder [string-code db]
          ;Cikti
          ;=> [[:course/id 201]]
          (into [] (map (fn [code] (vector (keyword "course" "id") (ffirst (dt/q '[:find ?id
                                                                                   :in $ ?code
                                                                                   :where [?e :course/code ?code]
                                                                                   [?e :course/id ?id]] db code)))) (clojure.string/split string-code #",")))))
#?(:clj (defn course-department-id-finder [string-dept db]
          (into [] (map (fn [code] (vector (keyword "department" "id") (ffirst (dt/q '[:find ?id
                                                                                       :in $ ?code
                                                                                       :where [?e :department/name ?code]
                                                                                       [?e :department/id ?id]] db (clojure.string/capitalize code))))) (clojure.string/split string-dept #",")))))
#?(:clj (defn course-instructor-id-finder [instructor-string db]
          (into [] (map (fn [instructor] (vector (keyword "instructor" "id") (ffirst (dt/q '[:find ?id
                                                                                             :in $ ?instructor
                                                                                             :where [?e :instructor/name ?instructor]
                                                                                             [?e :instructor/id ?id]] db instructor)))) (clojure.string/split instructor-string #",")))))
(defn set-name! [name]
  (swap! !state assoc-in [:stage-student :name] name))

(defn set-surname! [surname]
  (swap! !state assoc-in [:stage-student :surname] surname))
(defn set-department! [department]
  (swap! !state assoc-in [:stage-student :department] department))

(defn set-course! [course]
  (swap! !state assoc-in [:stage-student :course] course))

(defn set-course-name! [name]
  (swap! !state assoc-in [:stage-course :name] name))

(defn set-course-code! [code]
  (swap! !state assoc-in [:stage-course :code] code))
(defn set-course-department! [department]
  (swap! !state assoc-in [:stage-course :department] department))

(defn set-course-instructor! [instructor]
  (swap! !state assoc-in [:stage-course :instructor] instructor))

(defn set-course-class! [class]
  (swap! !state assoc-in [:stage-course :class] class))

(defn set-instructor-name! [name]
  (swap! !state assoc-in [:stage-instructor :name] name))

(defn set-instructor-department! [department]
  (swap! !state assoc-in [:stage-instructor :department] department))
#?(:clj (defn CreateCourse [id name code department instructor class db]
          (dt/transact db {:tx-data [{:course/id id
                                      :course/name name
                                      :course/code code
                                      :course/department department
                                      :course/instructor instructor
                                      :course/class class}]})
          db))

#?(:clj (defn CreateInstructor [id name department db]
          (dt/transact db {:tx-data [{:instructor/id id
                                      :instructor/name name
                                      :instructor/department department}]})))

(e/defn CreateData []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]

              (e/client
                (dom/div
                  (dom/h2 (dom/text "Creating Course Side"))
                  (let [state (e/watch !state)]
                    (let [stage (:stage-course state)]
                      (dom/span  (dom/text "Name:"))
                      (ui4/input (:name stage) (e/fn [v] (set-course-name! v)))
                      (dom/span  (dom/text "Code:"))
                      (ui4/input (:code stage) (e/fn [v] (set-course-code! v)))
                      (dom/div
                        (dom/span (dom/text "Department:"))
                        #_(e/server (ui4/select (:department stage)
                                                (e/fn V! [v] (e/client (set-course-department! v)))
                                                (e/fn Options [] (for [k (e/server (flatten (dt/q '[:find ?name :where [_ :department/name ?name]] db)))]
                                                                   k))
                                                (e/fn OptionsLabel [x] x))))
                      ;Datomic sorgusunu disarida yapip objeyi dropdown'a aktarmak stack sorununu cozebilir.
                      (dom/span  (dom/text "Instructor:"))
                      #_(e/server (ui4/select (:instructor stage)
                                              (e/fn V! [v] (e/client (set-course-instructor! v)))
                                              (e/fn Options [] (for [k (e/server (flatten (dt/q '[:find ?name
                                                                                                  :where [_ :instructor/name ?name]] db)))]
                                                                 k))
                                              (e/fn OptionsLabel [x] x)))
                      (dom/span  (dom/text "Class:"))
                      (ui4/input (:class stage) (e/fn [v] (set-course-class! v)))
                      (dom/text stage)
                      (dom/div
                        (dom/div (ui4/button (e/fn []

                                                   (e/server (CreateCourse (course-next-id db) (:name stage) (:code stage) (course-department-id-finder (:department stage) db) (course-instructor-id-finder (:instructor stage) db)  (:class stage) conn)))

                                             (dom/text "Create Course"))))))))))))









