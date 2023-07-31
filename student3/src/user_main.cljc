(ns user-main
  (:require contrib.ednish
            [hyperfiddle.api :as hf]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #_[app.main-index :as demos]
            app.main-index
            app.test2-1
            app.registrationv2
            ))


(e/defn NotFoundPage []
        (e/client (dom/h1 (dom/text "Page not found!"))))


(e/defn Pages [page]
        (e/server
          (case page
            `app.main-index/Demos app.main-index/Demos
            `app.test2-1/CRUD app.test2-1/CRUD
            ;`app.registrationv2 app.registrationv2/CRUD
            NotFoundPage)))

(e/defn Main []
        (binding [history/encode contrib.ednish/encode-uri
                  history/decode #(or (contrib.ednish/decode-path % hf/read-edn-str)
                                            [`app.main-index/Demos])]
          (history/router (history/HTML5-History.)
                                (set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))) " - Hyperfiddle"))
                                (binding [dom/node js/document.body])
                                  (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                                  (let [[page & args] history/route]
                                    (e/server (new (Pages. page #_args))))
                                    )))
