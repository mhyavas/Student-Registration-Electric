(ns app.t01
  #?(:cljs (:import [goog.math Long]))
  #?(:cljs (:require-macros [app.t01 :refer [with-reagent]]))
  (:require clojure.edn
            contrib.ednish
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:cljs ["react" :as react])
            #?(:cljs ["reactive-button" :as ReactiveButton])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-data-table-component$default" :as DataTable])))

#?(:cljs (defn create-root
           "See https://reactjs.org/docs/react-dom-client.html#createroot"
           ([node] (create-root node (str (gensym))))
           ([node id-prefix]
            (ReactDom/createRoot node #js {:identifierPrefix id-prefix}))))
#?(:cljs (defn render [root & args]
           (.render root (r/as-element (into [:f>] args)))))


(defmacro with-reagent [& args]
  `(dom/div
     (let [root# (create-root dom/node)]
       (render root# ~@args)
       (e/on-unmount #(.unmount root#)))))

(e/defn MainPage []
  (e/client
    (dom/text "This is the main page!")))
(e/defn Page [[page x]]
  (case page
    ::main (history/router 1 (e/server (MainPage.)))))
(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))
(e/defn Test []
  (e/client
    (binding [dom/node js/document.body
              history/encode contrib.ednish/encode-uri
              history/decode #(or (contrib.ednish/decode-path % clojure.edn/read-string) [::summary])]
      (history/router (history/HTML5-History.)
                      #_(set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))))
                              " - Datomic Browser")
                      (dom/pre (dom/text (contrib.str/pprint-str history/route)))

                      (Page. history/route)))))

