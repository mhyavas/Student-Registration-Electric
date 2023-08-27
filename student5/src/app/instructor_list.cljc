(ns app.instructor-list
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]
            #?(:clj [datomic.client.api :as dt])))


(e/def conn)
(e/def db)

(e/defn InstructorList []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
             (e/client
               (dom/h1 (dom/text "Instructor List"))
               (dom/div
                 (dom/table
                   (dom/th  (dom/text "Name"))
                   (dom/th  (dom/text "Department"))
                   (dom/th  (dom/text "Courses"))
                   (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                   :where [?e :instructor/id _]] db))]
                          (dom/tr
                            (dom/td (dom/props {:word-wrap :break-word}) (dom/text (:instructor/name (first value))))
                            (dom/td (dom/props {:word-wrap :break-word}) (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                                                             :in $ ?dept-id
                                                                                                             :where [?dept-id :department/name ?name]] db (:db/id (first (:instructor/department (first value)))))))))
                            (dom/td (dom/props {:word-wrap :break-word}) (dom/text  (e/server (dt/q '[:find ?name
                                                                                                        :in $ ?instructor-id
                                                                                                        :where [?e :course/instructor ?instructor-id]
                                                                                                        [?e :course/name ?name]] db (:db/id (first value)))))))))))))))



