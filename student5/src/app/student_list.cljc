(ns app.student-list
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]
            #?(:clj [datomic.client.api :as dt])))

(e/def conn)
(e/def db)

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

                            (dom/td (dom/text (:student/name (first value))))
                            (dom/td (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                        :in $ ?dept-id
                                                                        :where [?dept-id :department/name ?name]] db (:db/id (:student/department (first value)))))))))))))))))



