(ns app.admin
  (:require clojure.edn
            contrib.ednish
            clojure.string
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])))

(e/def conn)
(e/def db)
(defn general-setter! [field value]
  (swap! !main-state assoc-in [:stage-student (keyword field)] value))


#?(:clj (defn todo-records [db]
          (->> (d/q '[:find (pull ?e [*])
                      :where [?e :field/status]] db)
               (sort-by :field/description))))
(e/defn DomItem [id]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (dom/text (e/server
                          (todo-records db)
                          #_(e/for-by :db/id [{:keys [db/id]} (todo-records db)]
                                      (dom/text id))))))))
