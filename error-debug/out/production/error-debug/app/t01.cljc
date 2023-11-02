(ns app.t01
  #?(:cljs (:import [goog.math Long]))
  #?(:cljs (:require-macros [app.t01 :refer [with-reagent]]))
  (:require contrib.ednish
            clojure.edn
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-dom/client" :as ReactDom])))


(e/defn app01 []
        (e/client
          (dom/text "Test1 Hello")))

(e/defn app02 [input]
        (e/client
          (dom/text input)))


(e/defn Page [[page x]]
        (e/client
          (dom/h1 (dom/text "Software Sourcing Platform"))
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div
            (dom/ul
                    (dom/li  (history/link [::summary] (dom/text "home")))
                    (dom/li (history/link [::test1 "input"] (dom/text "test1"))))))


        (case page
          ::summary (history/router 1 (e/server (app01.)))
          ::test1 (history/router 2 (e/server (app02. x)))

          (e/client (dom/text "no matching route: " (pr-str page)))))



(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))

(e/defn Main []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % clojure.edn/read-string) [::summary])]
            (history/router (history/HTML5-History.)
                            #_(set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))))
                                    " - Datomic Browser")
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))

                            (Page. history/route)))))
