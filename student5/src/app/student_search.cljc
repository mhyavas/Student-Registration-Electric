(ns app.student-search
  (:require clojure.edn
            contrib.ednish
            [contrib.datomic-m #?(:clj :as :cljs :as-alias) d]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])))


(e/def conn)
(e/def db)

(def !state (atom {:keyword ""}))

(defn set-search! [name]
  (swap! !state assoc-in [:keyword] name))
(e/defn StudentSearch []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
             (e/client
               (let [state (e/watch !state)]
                 (dom/div
                   (let [stage (:keyword state)]
                    (dom/h1 (dom/text "Student Search"))
                    (dom/span (dom/props {:style {:grid-area "i"}}) (dom/text "Student Name"))
                    (ui4/input stage (e/fn [v] (set-search! v)))
                    ))))))))

