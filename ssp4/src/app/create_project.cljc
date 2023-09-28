(ns app.create-project
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.electric-ui4 :as ui4]
    clojure.string
    #?(:clj [datomic.client.api :as dt])))

(e/def conn)
(e/def db)

(def !state-project (atom {:project          {:title       ""
                                              :status      :inactive
                                              :create-date ""
                                              :description ""
                                              :types       []
                                              :customer    ""
                                              :author ""}
                           :selected-company ""}))
(defn set-company! [name]
  (swap! !state-project assoc-in [:selected-company] name))
(defn set-project-title! [title]
  (swap! !state-project assoc-in [:project :title] title))
(defn set-project-description! [description]
  (swap! !state-project assoc-in [:project :description] description))

(defn set-project-types! [types]
  (swap! !state-project assoc-in [:project :types] types))

(defn set-types! [types]
  (swap! !state-project assoc-in [:types] types))

#?(:clj (defn project-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :project/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :project/id ?id]] db))))))
#?(:clj (defn type-finder [v db]
          (into [] (map (fn [s] (into [] (flatten (t/q '[:find ?e
                                                         :in $ ?name
                                                         :where [?e :type/name ?name]] db s)))) v))))
#?(:clj (defn customer-finder [name db]
          (ffirst (d/q '[:find ?e
                         :in ? ?name
                         :where [?e :customer/name ?name]] db name))))
#?(:clj (defn ProjectToDatomic [id status date description types customer author conn]
          (dt/transact conn {:tx-data [{:project/id id
                                        :project/status status
                                        :project/create_date date
                                        :project/description description
                                        :project/types types
                                        :project/customer customer
                                        :project/author author}]})))
(e/defn CreateProject [name]
        (e/client
          (dom/h2 (dom/text "Creating a Project for " name))
          (dom/div
            (let [state (e/watch !state-project)]
              (let [project (:project state)]
                (dom/text state)
                (dom/div
                  (dom/span (dom/text "Title: "))
                  (ui4/input (:title project) (e/fn [v] (set-project-title! v)))
                  (dom/span (dom/text "Description: "))
                  (ui4/input (:description project) (e/fn [v] (set-project-description! v)))

                  (dom/div
                    (dom/span (dom/text "Types: "))
                    (e/for [value (e/server (dt/q '[:find ?name
                                                    :where [?e :type/name ?name]] (dt/db conn)))]
                           (dom/label
                             (dom/input (dom/props {:type  "checkbox"
                                                    :name  (first value)
                                                    :value "true"})
                                        (dom/on "change" (e/fn [v]
                                                               (if (and (.-checked dom/node) (not (some (partial = (str (.-name dom/node))) (:types project))))
                                                                 #_(swap! data update :nums conj {:first 1 :second 2})
                                                                 (swap! !state-project update-in [:project :types] conj (str (.-name dom/node)))
                                                                 (if (some (partial = (str (.-name dom/node))) (:types project)))
                                                                 (swap! !state-project update-in [:project :types] (fn [types] (vec (remove #(= (str (.-name dom/node)) %) types))))
                                                                 nil))))



                             (dom/text (first value)))))
                  (dom/div
                    (dom/select
                      (e/for [value (e/server (flatten (dt/q '[:find ?name
                                                               :in $ ?company-name
                                                               :where [?c :customer/name ?company-name]
                                                               [?e :author/customer ?c]
                                                               [?e :author/name ?name]] db name)))]
                             (dom/option (dom/props {:value value})
                                         (dom/text value)))
                      (dom/on "change" (e/fn [e] (swap! !state-project assoc-in [:project :author] (.-value dom/node))))))
                  (dom/div
                    (ui4/button (e/fn []
                                      (e/server (ProjectToDatomic (project-next-id (dt/db conn))
                                                                  :inactive
                                                                  (quot (System/currentTimeMillis) 1000)
                                                                  (:description project)
                                                                  (type-finder (:types project) (dt/db conn))
                                                                  (customer-finder name (dt/db conn))
                                                                  (:author project)
                                                                  conn)))


                                (dom/text "Create Project"))))))))
        #_(e/server
            (binding [conn @(requiring-resolve 'user/datomic-conn)]
              (binding [db (dt/db conn)]))))

