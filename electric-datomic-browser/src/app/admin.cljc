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
#_(defn general-setter! [field value]
    (swap! !main-state assoc-in [:stage-student (keyword field)] value))

(e/defn Items [conn db id]
        (e/server
          (let [e (e/server (flatten (dt/q '[:find ?name ?status
                                             :in $ ?e
                                             :where [?e :field/description ?name]
                                                    [?e :field/status ?status]] db id)))
                name (first e)
                status (last e)]
            (e/client
              (dom/div
                (ui4/checkbox
                  (case status :inactive false, :active true)
                  (e/fn [v]
                        (e/server
                          (dt/transact conn {:tx-data [{:field/description name
                                                        :field/status (if v :active :inactive)}]})
                          nil))
                  (dom/props {:id id}))
                (dom/label (dom/props {:for id}) (dom/text (e/server (first e)))))))))

#?(:clj (defn todo-records [db]
          (->> (dt/q '[:find (pull ?e [*])
                       :where [?e :field/status]] db)
               (sort-by :field/description))))
(e/defn DomItem []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (e/server
                  (e/for-by :db/id [{:keys [db/id]} (flatten (todo-records db))]
                            (Items. conn db id))))))))

