(ns user-main
  (:require contrib.ednish
            [hyperfiddle.api :as hf]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]

            app.demo-index
            app.todo-list
            app.t01
            app.t02))



(e/defn NotFoundPage []
        (e/client (dom/h1 (dom/text "Page not found!"))))


(e/defn Pages [page]
        (e/server
          (case page
            `app.demo-index/Demos app.demo-index/Demos
            `app.t01/Test01 app.t01/Test01
            `app.t02/Test02 app.t02/Test02
            `app.todo-list/Todo-list app.todo-list/Todo-list
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