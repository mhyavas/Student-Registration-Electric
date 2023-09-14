(ns app.datomic-browser
  "must have datomic on classpath, and must load 'test ns"
  #?(:cljs (:import [goog.math Long])) ; only this require syntax passes shadow in this file, why?
  (:require clojure.edn
            contrib.ednish
            app.create-data
            app.create-course
            app.admin
            [contrib.str :refer [any-matches?]]
            [contrib.data :refer [unqualify treelister]]
            [hyperfiddle.electric-ui4 :as ui4]
            #?(:clj [contrib.datomic-contrib :as dx])
            #?(:cljs contrib.datomic-cloud-contrib)
            [contrib.datomic-m #?(:clj :as :cljs :as-alias) d]
            [contrib.gridsheet :as gridsheet :refer [Explorer]]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            [missionary.core :as m]
            #?(:clj [datomic.client.api :as dt])))

(e/def conn)
(e/def db)
(e/def schema)

(def !state-student (atom {:keyword ""}))

#?(:clj (defn query-name [db dept]
          (dt/q '[:find (pull ?e [*])
                  :in $ ?dept
                  :where [?e :student/name ?dept]]

                db dept)))
#?(:clj (defn query-dept [db dept]
          (dt/q '[:find (pull ?e [*])
                  :in $ ?id
                  :where [?e :student/department ?id]] db dept)))

(defn set-search! [name]
  (swap! !state-student assoc-in [:keyword] name))
(e/defn CourseSearch []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (dom/div
                  (let [!filter-course (atom ""), filter-course (e/watch !filter-course)]
                     (dom/span  (dom/text "Course Search by Name:"))
                     (ui4/input filter-course (e/fn [v] (reset! !filter-course v)))
                     (dom/table
                       (dom/th (dom/text "Name"))
                       (dom/th (dom/text "Code"))
                       (dom/th (dom/text "Department"))
                       (dom/th (dom/text "Class"))
                       (dom/th (dom/text "Instructor"))
                       (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                       :in $ ?name
                                                       :where [?e :course/name ?name]] db filter-course))]
                              (dom/tr
                                (dom/td (dom/text (:course/name (first value))))
                                (dom/td (dom/text (:course/code (first value))))
                                (dom/td (dom/text (e/server (map (fn [m] (ffirst (dt/q '[:find ?name
                                                                                         :in $ ?dept-id
                                                                                         :where [?dept-id :department/name ?name]] db (:db/id m)))) (:course/department (first value))))))
                                (dom/td (dom/text (:course/class (first value))))
                                (dom/td (dom/text (e/server (dt/q '[:find ?name
                                                                    :in $ ?instructor-id
                                                                    :where [?insturctor-id :instructor/name ?name]] db (:db/id (first (:course/instructor (first value))))))))))))))))))

(e/defn StudentSearch []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (dom/div
                  (let [state (e/watch !state-student)]
                    #_(dom/div
                        (let [stage (:keyword state)]
                          (dom/h1 (dom/text "Student Search"))
                          (dom/span (dom/props {:style {:grid-area "i"}}) (dom/text "Student Name"))
                          (ui4/input stage (e/fn [v] (set-search! v)))))
                    (dom/div
                      (let [!filter-dept (atom ""), filter-dept (e/watch !filter-dept)]
                        (dom/span (dom/text "Student Search by Name:"))
                        (ui4/input filter-dept (e/fn [v] (reset! !filter-dept v)))


                        (dom/ul
                          (dom/table
                            (dom/th (dom/text "Id"))
                            (dom/th (dom/text "Name"))
                            (dom/th (dom/text "Department"))
                            (e/for [entry (e/server (query-name db filter-dept))]
                                   (let [value entry]

                                     #_(dom/li (dom/text (:student/id value) ", " (:student/name value) "," (:student/department value)))
                                     (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                             (dom/td (dom/text (:student/id (first value))))
                                             (dom/td (dom/text (:student/name (first value))))
                                             (dom/td (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                                         :in $ ?dept-id
                                                                                         :where [?dept-id :department/name ?name]] db (:db/id (:student/department (first value)))))))))))))))
                    (dom/div
                      (let [!filter-dept (atom ""), filter-dept (e/watch !filter-dept)]
                        (dom/span (dom/text "Student Search by Department:"))
                        (ui4/input filter-dept (e/fn [v] (reset! !filter-dept v)))

                        #_(dom/text (e/server (dt/q '[:find (pull ?e [*])
                                                      :in $ ?id
                                                      :where [?e :student/department ?id]] db (ffirst (dt/q '[:find ?dept-id
                                                                                                              :in $ ?name
                                                                                                              :where [?dept-id :department/name ?name]] db "Fizik")))))


                        (dom/ul
                          (dom/table
                            (dom/th (dom/text "Id"))
                            (dom/th (dom/text "Name"))
                            (dom/th (dom/text "Department"))
                            (e/for [entry (e/server (query-dept db (ffirst (dt/q '[:find ?dept-id
                                                                                   :in $ ?name
                                                                                   :where [?dept-id :department/name ?name]] db (clojure.string/capitalize filter-dept)))))]
                                   (let [value entry]

                                     #_(dom/li (dom/text (:student/id value) ", " (:student/name value) "," (:student/department value)))
                                     (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                             (dom/td (dom/text (:student/id (first value))))
                                             (dom/td (dom/text (:student/name (first value))))
                                             (dom/td (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                                         :in $ ?dept-id
                                                                                         :where [?dept-id :department/name ?name]] db (:db/id (:student/department (first value))))))))))))))))))))))
(e/defn Attributes []
  (e/client (dom/h1 (dom/text "Attributes")))
  (let [cols [:db/ident :db/valueType :db/cardinality :db/unique :db/isComponent
              #_#_#_#_:db/fulltext :db/tupleType :db/tupleTypes :db/tupleAttrs]]
    (Explorer.
      (treelister (->> (dx/attributes> db cols)
                    (m/reductions conj [])
                    (m/relieve {})
                    new
                    (sort-by :db/ident)) ; sort by db/ident which isn't available
        (fn [_]) any-matches?)
      {::gridsheet/page-size 15
       ::gridsheet/row-height 24
       ::gridsheet/columns cols
       ::gridsheet/grid-template-columns "auto 6em 4em 4em 4em"
       ::gridsheet/Format
       (e/fn [row col]
         (e/client
           (let [v (col row)]
             (case col
               :db/ident (history/link [::attribute v] (dom/text v))
               :db/valueType (some-> v :db/ident name dom/text)
               :db/cardinality (some-> v :db/ident name dom/text)
               :db/unique (some-> v :db/ident name dom/text)
               (dom/text (str v))))))})))

(e/defn Format-entity [[k v :as row] col]
  (assert (some? schema))
  (case col
    ::k (cond
          (= :db/id k) (e/client (dom/text k)) ; :db/id is our schema extension, can't nav to it
          (contains? schema k) (e/client (history/link [::attribute k] (dom/text k)))
          () (e/client (dom/text (str k)))) ; str is needed for Long db/id, why?
    ::v (if-not (coll? v) ; don't render card :many intermediate row
          (let [[valueType cardinality]
                ((juxt (comp unqualify dx/identify :db/valueType)
                   (comp unqualify dx/identify :db/cardinality)) (k schema))]
            (cond
              (= :db/id k) (e/client (history/link [::entity v] (dom/text v)))
              (= :ref valueType) (e/client (history/link [::entity v] (dom/text v)))
              () (e/client (dom/text (pr-str v))))))))

(e/defn EntityDetail [e]
  (assert e)
  (e/client (dom/h1 (dom/text "Entity detail: " e))) ; treeview on the entity
  (Explorer.
    ;; TODO inject sort
    (treelister (new (e/task->cp (d/pull db {:eid e :selector ['*] :compare compare})))
      (partial dx/entity-tree-entry-children schema)
      any-matches?)
    {::gridsheet/page-size 15
     ::gridsheet/row-height 24
     ::gridsheet/columns [::k ::v]
     ::gridsheet/grid-template-columns "15em auto"
     ::gridsheet/Format Format-entity}))

(e/defn EntityHistory [e]
  (assert e)
  (e/client (dom/h1 (dom/text "Entity history: " (pr-str e))))
  (Explorer.
    ; accumulate what we've seen so far, for pagination. Gets a running count. Bad?
    (treelister (new (->> (dx/entity-history-datoms> db e)
                       (m/reductions conj []) ; track a running count as well?
                       (m/relieve {})))
      (fn [_]) any-matches?)
    {::gridsheet/page-size 20
     ::gridsheet/row-height 24
     ::gridsheet/columns [::e ::a ::op ::v ::tx-instant ::tx]
     ::gridsheet/grid-template-columns "10em 10em 3em auto auto 9em"
     ::gridsheet/Format
     (e/fn [[e aa v tx op :as row] a]
       (when row ; when this view unmounts, somehow this fires as nil
         (case a
           ::op (e/client (dom/text (name (case op true :db/add false :db/retract))))
           ::e (e/client (history/link [::entity e] (dom/text e)))
           ::a (if (some? aa)
                 (let [ident (:db/ident (new (e/task->cp (d/pull db {:eid aa :selector [:db/ident]}))))]
                   (e/client (dom/text (pr-str ident)))))
           ::v (e/client (some-> v pr-str dom/text))
           ::tx (e/client (history/link [::tx tx] (dom/text tx)))
           ::tx-instant (let [x (:db/txInstant (new (e/task->cp (d/pull db {:eid tx :selector [:db/txInstant]}))))]
                          (e/client (pr-str (dom/text x))))
           (str v))))}))

(e/defn AttributeDetail [a]
  (e/client (dom/h1 (dom/text "Attribute detail: " a)))
  (Explorer.
    (treelister (new (->> (d/datoms> db {:index :aevt, :components [a]})
                       (m/reductions conj [])
                       (m/relieve {})))
      (fn [_]) any-matches?)
    {::gridsheet/page-size 20
     ::gridsheet/row-height 24
     ::gridsheet/columns [:e :a :v :tx]
     ::gridsheet/grid-template-columns "15em 15em calc(100% - 15em - 15em - 9em) 9em"
     ::gridsheet/Format
     (e/fn [[e _ v tx op :as x] k]
       (e/client
         (case k
           :e (history/link [::entity e] (dom/text e))
           :a (dom/text (pr-str a)) #_(let [aa (new (e/task->cp (dx/ident! db aa)))] aa)
           :v (some-> v str dom/text) ; todo when a is ref, render link
           :tx (history/link [::tx tx] (dom/text tx)))))}))

(e/defn TxDetail [e]
  (e/client (dom/h1 (dom/text "Tx detail: " e)))
  (Explorer.
    (treelister (new (->> (d/tx-range> conn {:start e, :end (inc e)}) ; global
                       (m/eduction (map :data) cat)
                       (m/reductions conj [])
                       (m/relieve {})))
      (fn [_]) any-matches?)
    {::gridsheet/page-size 20
     ::gridsheet/row-height 24
     ::gridsheet/columns [:e :a :v :tx]
     ::gridsheet/grid-template-columns "15em 15em calc(100% - 15em - 15em - 9em) 9em"
     ::gridsheet/Format
     (e/fn [[e aa v tx op :as x] a]
       (case a
         :e (let [e (new (e/task->cp (dx/ident! db e)))] (e/client (history/link [::entity e] (dom/text e))))
         :a (let [aa (new (e/task->cp (dx/ident! db aa)))] (e/client (history/link [::attribute aa] (dom/text aa))))
         :v (pr-str v) ; when a is ref, render link
         (str tx)))}))

(e/defn StudentList []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (dom/text "Student List")

                (dom/div
                  (dom/table
                    (dom/th (dom/text "Name"))
                    (dom/th (dom/text "Department"))
                    (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                    :where [?e :student/id _]] db))]
                           (dom/tr
                             #_(history/link [::attribute v] (dom/text v))
                             (dom/td (history/link [::student (:student/name (first value))] (dom/text (:student/name (first value)))))
                             (dom/td (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                         :in $ ?dept-id
                                                                         :where [?dept-id :department/name ?name]] db (:db/id (:student/department (first value)))))))))))))))))
(e/defn StudentInfo [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (dom/h2 (dom/text "Student Info - " name))
                (dom/div
                  (dom/table
                    (dom/th (dom/text "Name"))
                    (dom/th (dom/text "Department"))
                    (dom/th (dom/text "Courses"))
                    (let [value (e/server (ffirst (dt/q '[:find (pull ?e [*])
                                                          :in $ ?student-name
                                                          :where [?e :student/name ?student-name]] db name)))]
                      (dom/tr
                        (dom/td (dom/text name))
                        (dom/td (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                    :in $ ?dept-id
                                                                    :where [?dept-id :department/name ?name]] db (:db/id (:student/department value)))))))
                        (dom/td (dom/text (e/server (map (fn [m] (flatten (dt/q '[:find ?name
                                                                                  :in $ ?course-id
                                                                                  :where [?course-id :course/name ?name]] db (:db/id m)))) (:student/course value))))))))))))))

(e/defn CourseList []
        (e/client
          (dom/text "Course List")))

(e/defn InstructorList []
        (e/client
          (dom/text "Insturctor List")))

(e/defn Test []
        (e/client (dom/h1 (dom/text "TEST"))))




(e/defn Page [[page x]]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (dom/h1 (dom/text "Student Registration App"))
                (dom/div
                  (dom/h2 (dom/text "Statistics"))
                  (dom/span (dom/text "Number of Students:"))
                  (history/link [::student-list] (dom/text (ffirst (e/server (dt/q '[:find (count ?e)
                                                                                     :where [?e :student/id _]] db))))))
                (dom/div
                  (dom/span (dom/text "Number of Courses:"))
                  (history/link [::course-list] (dom/text (ffirst (e/server (dt/q '[:find (count ?e)
                                                                                    :where [?e :course/id _]] db))))))
                (dom/div
                  (dom/span (dom/text "Number of Instructors:"))
                  (history/link [::instructor-list] (dom/text (ffirst (e/server (dt/q '[:find (count ?e)
                                                                                        :where [?e :instructor/id _]] db))))))
                (dom/div
                  (history/link [::course-search] (dom/text "Course Search")) (dom/text " ")
                  (history/link [::student-search] (dom/text "Student Search")) (dom/text " ")
                  (history/link [::student-list] (dom/text "Student List")) (dom/text " ")
                  (history/link [::create-page] (dom/text "Create Student")) (dom/text " ")
                  (history/link [::create-course] (dom/text "Create Course") (dom/text " "))
                  (history/link [::admin] (dom/text "Admin") (dom/text " ")))))))

  (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
  (dom/div (dom/props {:class "user-gridsheet-demo"})
    #_(dom/div (dom/text "Nav: ")
               (history/link [::summary] (dom/text "home")) (dom/text " ")
               (history/link [::test] (dom/text "test")) (dom/text " ")
               (history/link [::course-search] (dom/text "Course Search")) (dom/text " ")
               (history/link [::student-search] (dom/text "Student Search")) (dom/text " ")
               (history/link [::student-list] (dom/text "Student List")) (dom/text " "))


    (case page
      ::summary (history/router 1 (e/server (Attributes.)))
      ::attribute (history/router 2 (e/server (AttributeDetail. x)))
      ::student (history/router 2 (e/server (StudentInfo. x)))
      ::tx (history/router 2 (e/server (TxDetail. x)))
      ::entity (do (history/router 2
                     (history/router ::entity-detail (e/server (EntityDetail. x)))
                     (history/router ::entity-history (e/server (EntityHistory. x)))))
      ::test (history/router 1 (e/server (Test.)))
      ::course-search (history/router 1 (e/server (CourseSearch.)))
      ::student-search (history/router 1 (e/server (StudentSearch.)))
      ::student-list (history/router 1 (e/server (StudentList.)))
      ::course-list (history/router 1 (e/server (CourseList.)))
      ::instructor-list (history/router 1 (e/server (InstructorList.)))
      ::create-page (history/router 1 (e/server (app.create-data/CreateData.)))
      ::create-course (history/router 1 (e/server (app.create-course/CreateData.)))
      ::admin (history/router 1 (e/server (app.admin/DomItem.)))
      (e/client (dom/text "no matching route: " (pr-str page))))))

(def read-edn-str (partial clojure.edn/read-string
                    {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                 :clj {})}))



(e/defn DatomicBrowser []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % read-edn-str) [::summary])]

            (history/router (history/HTML5-History.)
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                            (e/server
                              (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                (binding [db (dt/db conn)]
                                  (e/client (Page. history/route)))))))))





(comment


  ;end
  ,)