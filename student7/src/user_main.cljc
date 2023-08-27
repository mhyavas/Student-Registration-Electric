(ns user-main
  (:require contrib.ednish
            [hyperfiddle.api :as hf]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]

            app.demo-index
            app.create-page
            app.student-search
            app.instructor-search
            app.course-search
            app.student-list
            app.course-list
            app.instructor-list))



(e/defn NotFoundPage []
        (e/client (dom/h1 (dom/text "Page not found!"))))


(e/defn Pages [page]
        (e/server
          (case page
            `app.demo-index/Demos app.demo-index/Demos
            `app.create-page/CreateData app.create-page/CreateData
            `app.student-search/StudentSearch app.student-search/StudentSearch
            `app.instructor-search/InstructorSearch app.instructor-search/InstructorSearch
            `app.course-search/CourseSearch app.course-search/CourseSearch
            `app.student-list/StudentList app.student-list/StudentList
            `app.course-list/CourseList app.course-list/CourseList
            `app.instructor-list/InstructorList app.instructor-list/InstructorList
            NotFoundPage)))

(e/defn Main []
        (binding [history/encode contrib.ednish/encode-uri
                  history/decode #(or (contrib.ednish/decode-path % hf/read-edn-str)
                                      [`app.demo-index/Demos])]
          (history/router (history/HTML5-History.)
                          (set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))) " - Hyperfiddle"))
                          (binding [dom/node js/document.body])
                          (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                          (let [[page & args] history/route]
                            (e/server (new (Pages. page #_args)))))))