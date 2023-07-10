(ns app.student-side
  (:require contrib.str
            [clojure.string :as str]
            #?(:clj [datascript.core :as d])                ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [clojure.walk :as walk]))


(def schema-dept  [{:db/ident :department/matematik}
                   {:db/ident :department/fizik}
                   {:db/ident :department/sosyoloji}
                   {:db/ident       :student/id
                    :db/valueType   :db.type/long
                    :db/unique      :db.unique/identity
                    :db/cardinality :db.cardinality/one}
                   {:db/ident       :student/name
                    :db/valueType   :db.type/string
                    :db/unique      :db.unique/identity
                    :db/cardinality :db.cardinality/one}
                   {:db/ident       :student/department
                    :db/valueType   :db.type/ref
                    :db/cardinality :db.cardinality/one}])


#?(:clj (defonce !conn (d/create-conn {}))) ; database on server


(e/def db) ; injected database ref; Electric defs are always dynamic


(def !state (atom {:selected nil
                   :stage {:name ""
                           :surname ""
                           :department ""
                           :id 0}
                   :names (sorted-map 0 {:name "Emil", :surname "Hans", :department :department/matematik,:id 0})}))

(def next-id (partial swap! (atom 0) inc))


(defn set-name! [name]
  (swap! !state assoc-in [:stage :name] name))

(defn set-surname! [surname]
  (swap! !state assoc-in [:stage :surname] surname))
(defn set-department! [department]
  (swap! !state assoc-in [:stage :department] (keyword "department" department)))

(defn set-id! []
  (swap! !state assoc-in [:stage :id] (next-id)))


#?(:clj (defn create-schema [schema db]
          (d/transact! db schema)))


(defn create! []
  (swap! !state (fn [{:keys [stage] :as state}]
                  (set-id!)
                  (-> state
                      (update :names assoc (:id stage) stage)
                      (assoc :stage {:name "", :surname "", :department "", :id 0})))))



#?(:clj (defn CreateStudent [id name department db]
          (d/transact! db [{:student/id         id
                            :student/name       name
                            :student/department department}])))


(defn filter-names [names-map needle]
  (if (empty? needle)
    names-map
    (let [needle (str/lower-case needle)]
      (reduce-kv (fn [r k {:keys [name surname department]}]
                   (if (or (str/includes? (str/lower-case name) needle)
                           (str/includes? (str/lower-case surname) needle)
                           (str/includes? (str/lower-case (walk/stringify-keys department)) needle))
                     r
                     (dissoc r k)))
                 names-map names-map))))



#?(:clj (defn query-test [db dept]
          (-> (d/q '[:find [(pull ?e [:student/id :student/name :student/department]) ] :in $ ?dept
                     :where [?e :student/department ?dept]]

                   db dept))))

(defn select! [id]
  (swap! !state (fn [state]
                  (assoc state :selected id
                               :stage (get-in state [:names id])))))




(e/defn CRUD []
        (e/server

          (binding [db (e/watch !conn)]
            (e/server (create-schema schema-dept !conn))
            (e/client
              (let [state (e/watch !state)
                    selected (:selected state)]
                (dom/div (dom/props {:style {:display             :grid
                                             :grid-gap            "0.5rem"
                                             :align-items         :baseline
                                             :grid-template-areas "'a b c c'\n
                                                         'd d e f'\n
                                                         'd d g h'\n
                                                         'd d i k'\n
                                                         'j j j j'\n
                                                         'l l l l'\n
                                                         'n n m m'\n
                                                         't t t t'\n"}})
                         (dom/span (dom/props {:style {:grid-area "a"}})
                                   (dom/text "Filter prefix:"))
                         (let [!needle (atom ""), needle (e/watch !needle)]
                           (ui4/input needle (e/fn [v] (reset! !needle v))
                                      (dom/props {:style {:grid-area "b"}}))
                           (dom/ul (dom/props {:style            {:grid-area "d"}
                                               :background-color :white
                                               :list-style-type  :none
                                               :padding          0
                                               :border           "1px gray solid"
                                               :height           "100%"})
                                   (dom/table
                                     (dom/th (dom/text "Surname"))
                                     (dom/th (dom/text "Name"))
                                     (dom/th (dom/text "Department"))
                                     (dom/th (dom/text "Id"))
                                     (e/for [entry (filter-names (:names state) needle)]
                                            (let [id (key entry)
                                                  value (val entry)]

                                              #_(dom/li (dom/text (:surname value) ", " (:name value) "," (:department value)))
                                              (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                                      (dom/td (dom/text (:surname value)))
                                                      (dom/td (dom/text (:name value)))
                                                      (dom/td (dom/text (:department value)))
                                                      (dom/td (dom/text id)))
                                              (dom/on "click" (e/fn [_] (select! id))))))))




                         (let [stage (:stage state)]

                           (dom/span (dom/props {:style {:grid-area "e"}}) (dom/text "Name:"))
                           (ui4/input (:name stage) (e/fn [v] (set-name! v))
                                      (dom/props {:style {:grid-area "f"}}))
                           (dom/span (dom/props {:style {:grid-area "g"}}) (dom/text "Surname:"))
                           (ui4/input (:surname stage) (e/fn [v] (set-surname! v))
                                      (dom/props {:style {:grid-area "h"}}))
                           (dom/span (dom/props {:style {:grid-area "i"}}) (dom/text "department"))
                           (ui4/input (:department stage) (e/fn [v] (set-department! v))

                                      (dom/props {:style {:grid-area "k"}}))
                           (dom/div (dom/props
                                      {:style {:grid-area             "j"
                                               :display               :grid
                                               :grid-gap              "0.5rem"
                                               :grid-template-columns "auto auto auto 1fr"}})
                                    (dom/div (ui4/button (e/fn [] (set-id!)
                                                               (create!)
                                                               #_(apply (.-log js/console) (:names state))
                                                               (e/server (CreateStudent (:id (last (vals (get-in state [:names])))) (:name (last (vals (get-in state [:names])))) (:department (last (vals (get-in state [:names])))) !conn))) (dom/text "Create")))


                                    )
                           (dom/div (dom/props
                                      {:style {:grid-area             "l"
                                               :display               :grid
                                               :grid-gap              "0.5rem"
                                               :grid-template-columns "auto auto auto 1fr"}})
                                    (dom/text "Student Filter by department name from DB")
                                    (let [!filter-dept (atom ""), filter-dept (e/watch !filter-dept)]
                                      (dom/span  (dom/text "Department:"))
                                      (ui4/input filter-dept (e/fn [v] (reset! !filter-dept v))
                                                 )

                                      (dom/table (dom/props {:style {:grid-area "t"}})
                                                 (dom/th (dom/text "Id"))
                                                 (dom/th (dom/text "Name"))
                                                 (dom/th (dom/text "Department"))
                                                 (e/for [entry (e/server (query-test db (keyword "department" filter-dept)))]
                                                        (let [value entry]

                                                          #_(dom/li (dom/text (:surname value) ", " (:name value) "," (:department value)))
                                                          (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                                                  (dom/td (dom/text (:student/id value)))
                                                                  (dom/td (dom/text (:student/name value)))
                                                                  (dom/td (dom/text (:student/department value))))
                                                          ))
                                                 ))
                                    ))))))))









