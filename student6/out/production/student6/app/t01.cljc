(ns app.t01
  (:require [contrib.data :refer [unqualify]]
            app.todo-list
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            #?(:clj [ajax.core :refer [GET POST]])
            #?(:cljs goog.object)))

(e/defn page [name]
        (e/client
          (dom/text name)))

#?(:clj (def req {:query-string "name=ali"}))
#_#?(:clj (defn handler [{{name "name"} :params}]
            (-> (ring.util.response (page name))
                (content-type "text/html"))))

(defn handler [response]
  (.log js/console (str response)))
(def !state (atom {:student ""}))
(e/defn Test []
        (e/client
          (dom/text "TEST1")
          (ui/button (e/fn []
                           (apply (.-log js/console) [1 2]))
                     (e/server (GET "/hello" {:handler handler}))


                      (dom/text "Test"))))










