(ns ;^:dev/always
  app.main-index

  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]))


(def pages
  [;`app.demo-index/CreateData
   `app.student-search/StudentSearch
   `app.instructor-search/InstructorSearch])
   ;`app.registrationv2/CRUD])


(e/defn Demos []
        (e/client
          (dom/h1 (dom/text "Student Registration App"))
          (e/for [k pages]
                 (dom/div (router/link [k] (dom/text (name k)))))))


