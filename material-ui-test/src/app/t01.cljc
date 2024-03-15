(ns app.t01
  #?(:cljs (:import [goog.math Long]))
  #?(:cljs (:require-macros [app.t01 :refer [with-reagent]]))
  #?(:cljs (:require-macros [reagent-mui.util :refer [react-component]]))
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs ["@mui/material" :as mui])
            #?(:cljs ["@mui/styles" :as styles])
            #?(:cljs [reagent-mui.material.typography :as rmm])))


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

#?(:cljs (defn btn-test []
           [:> mui/Button {:variant "contained"
                           :color   "primary"
                           :onClick (fn [] (apply (.-log js/console) "TEST"))} "Click Me"]))



#?(:cljs (defn menu []
           #_(reagent-mui.material.typography)

           [:> mui/CardActions
            [:> mui/Button {:size "small"} "Learn More"]]))





(e/defn Test []
        (e/client
          #_(rdom/render [btn-test] "Test")
          (with-reagent btn-test)
          #_(with-reagent menu)
          (dom/text "Test1 Hello")))








