(ns app.course-search
  (:require clojure.edn
            contrib.ednish
            [contrib.datomic-m #?(:clj :as :cljs :as-alias) d]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])))


(e/def conn)
(e/def db)

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



