(ns ;^:dev/always
  app.demo-index
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.api :as hf]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.history :as router]
            #?(:clj [datomic.client.api :as dt])
            #?(:clj [compojure.core :refer :all])
            #?(:clj [compojure.route :as route])))


(e/def conn)
(e/def db)

(e/defn Test []
        (e/client
          (dom/text "TEST")))
(def pages
  [`app.create-page/CreateData
   `app.student-search/StudentSearch
   `app.instructor-search/InstructorSearch
   `app.course-search/CourseSearch])
(e/defn Demos []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
             (e/client
               (dom/h1 (dom/text "Student Registration App"))
               (dom/div
                 (dom/h2 (dom/text "Statistics"))
                 (dom/span (dom/text "Number of Students:"))
                 (router/link [`app.student-list/StudentList] (dom/text (ffirst (e/server (dt/q '[:find (count ?e)
                                                                                                  :where [?e :student/id _]] db))))))
               (dom/div
                 (dom/span (dom/text "Number of Courses:"))
                 (router/link [`app.course-list/CourseList] (dom/text (ffirst (e/server (dt/q '[:find (count ?e)
                                                                                                :where [?e :course/id _]] db))))))
               (dom/div
                 (dom/span (dom/text "Number of Instructors:"))
                 (router/link [`app.instructor-list/InstructorList] (dom/text (ffirst (e/server (dt/q '[:find (count ?e)
                                                                                                        :where [?e :instructor/id _]] db))))))
               (e/for [k pages]
                      (dom/div (router/link [k] (dom/text (name k)))))

               (dom/div
                 (ui4/button (e/fn [] (router/link [`app.demo-index/Test] "Test1")))))))))







