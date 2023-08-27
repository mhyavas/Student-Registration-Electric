(ns app.t01
  (:require [contrib.data :refer [unqualify]]
            app.todo-list
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [hyperfiddle.history :as history]
            #?(:clj [electric-server-java8-jetty9 :as jetty])
            #?(:clj [ajax.core :refer [GET POST]])
            #?(:cljs goog.object)))

(e/defn page [name]
        (e/client
          (dom/text name)))

#?(:clj (def req {:query-string "name=ali"}))
#_#?(:clj (defn handler [{{name "name"} :params}]
            (-> (ring.util.response (page name))
                (content-type "text/html"))))


(def !state (atom {:student ""}))
(e/defn Test []
        (e/server
         (e/client
           (dom/div
             (history/link [`app.todo-list/Todo-List] "test")))))












