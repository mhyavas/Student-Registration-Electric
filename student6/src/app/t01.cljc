(ns app.t01
  (:require [contrib.data :refer [unqualify]]
            app.todo-list
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [hyperfiddle.history :as history]
            [hyperfiddle.api :as hf]
            #?(:clj [electric-server-java8-jetty9 :as jetty])
            [contrib.electric-goog-history :as goog]
            #?(:clj [ajax.core :refer [GET POST]])
            #?(:cljs goog.object)))

(e/defn page [name]
        (e/client
          (dom/text name)))

#?(:clj (def req {:query-string "name=ali"}))
#_#?(:clj (defn handler [{{name "name"} :params}]
            (-> (ring.util.response (page name))
                (content-type "text/html"))))


(e/defn test2 []
        (e/server
         (e/client
           (dom/text "test3"))))
(def !state (atom {:student ""}))



(e/defn Test []
        (e/client
          (dom/text "Testing version 2")
          #_(history/link [:test] (dom/text "home"))))













