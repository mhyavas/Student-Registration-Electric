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


#?(:cljs (defn IMG [url user]
           [:div 
            [:img {:onClick (fn [] (apply (.-log js/console) "test")
                              (do (history/navigate!. history/!history [:test1 user]))) :src url :width 50 :style {:border-radius "50%"}}]
            [:p {:style {:font-size "15px"}}  user]]))





(e/defn app01 []
        (e/client
          (with-reagent IMG "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"  "input-test")
          (dom/text "Test1 Hello")))

(e/defn app02 [input]
        (e/client
          (dom/text input)))


(e/defn Page [[page x]]
        (e/client
          (dom/h1 (dom/text "Debug"))
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
