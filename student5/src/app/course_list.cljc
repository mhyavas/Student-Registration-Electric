(ns app.course-list
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]
            #?(:clj [datomic.client.api :as dt])))

(e/def conn)
(e/def db)

(e/defn CourseList []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
             (e/client
               (dom/h1 (dom/text "Course List"))
               (dom/div
                 (dom/table
                   (dom/th (dom/text "Name"))
                   (dom/th (dom/text "Code"))
                   (dom/th (dom/text "Department"))
                   (dom/th (dom/text "Class"))
                   (dom/th (dom/text "Instructor"))
                   (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                   :where [?e :course/id _]] db))]
                          (dom/tr
                            (dom/td (dom/text (:course/name (first value))))
                            (dom/td (dom/text (:course/code (first value))))
                            (dom/td (dom/text (e/server (map (fn [m] (ffirst (dt/q '[:find ?name
                                                                                     :in $ ?dept-id
                                                                                     :where [?dept-id :department/name ?name]] db (:db/id m)))) (:course/department (first value))))))
                            (dom/td (dom/text (:course/class (first value))))
                            (dom/td (dom/text (e/server (dt/q '[:find ?name
                                                                :in $ ?instructor-id
                                                                :where [?insturctor-id :instructor/name ?name]] db (:db/id (first (:course/instructor (first value)))))))))))))))))


