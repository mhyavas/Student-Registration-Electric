(ns app.t01
  #?(:cljs (:import [goog.math Long]))
  (:require
            clojure.edn
            contrib.ednish
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]))



(e/defn Test1 []
        (e/client (dom/text "Test1 Page")
                  (dom/div
                    (history/link [::test2 ["Input-1" "Input-2"]] (dom/text "Go to Test2 page")))))

(e/defn Test2 [[input1 input2]]
        (e/client (dom/text "Test2 with parameters: " input1 input2)))



(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))

(e/defn Page [[page x]]
        (e/client
          (dom/h1 (dom/text "Software Sourcing Platform"))
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div (dom/text "Nav: ")
                   (history/link [::summary] (dom/text "home")) (dom/text " ")
                   (history/link [::test2 ["Input-1" "Input-2"]] (dom/text "test2")) (dom/text " ")))



        (case page
          ::summary (history/router 1 (e/server (Test1.)))
          ::test2 (history/router 2 (e/server (Test2. x)))
          (e/client (dom/text "no matching route: " (pr-str page)))))

(e/defn app01 []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % clojure.edn/read-string) [::summary])]
            (history/router (history/HTML5-History.)
                            #_(set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))))
                                    " - Datomic Browser")
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))

                            (Page. history/route)))))





