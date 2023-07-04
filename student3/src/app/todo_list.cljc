(ns app.todo-list
  (:require contrib.str
            [clojure.string :as str]
            #?(:clj [datascript.core :as d]) ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]))

#?(:clj (defonce !conn (d/create-conn {}))) ; database on server
(e/def db) ; injected database ref; Electric defs are always dynamic

(def !state (atom {:selected nil
                   :stage {:name ""
                           :surname ""
                           :department ""
                           :id nil}
                   :names (sorted-map 0 {:name "Emil", :surname "Hans", :department "MATH",:id 0})}))

(def next-id (partial swap! (atom 0) inc))

(defn select! [id]
  (swap! !state (fn [state]
                  (assoc state :selected id
                               :stage (get-in state [:names id])))))

(defn set-name! [name]
  (swap! !state assoc-in [:stage :name] name))

(defn set-surname! [surname]
  (swap! !state assoc-in [:stage :surname] surname))
(defn set-department! [department]
  (swap! !state assoc-in [:stage :department] department))


(defn create! []
  (swap! !state (fn [{:keys [stage] :as state}]
                  (-> state
                      (update :names assoc (next-id) stage)
                      (assoc :stage {:name "", :surname "", :department "", :id nil})))))




(defn filter-names [names-map needle]
  (if (empty? needle)
    names-map
    (let [needle (str/lower-case needle)]
      (reduce-kv (fn [r k {:keys [name surname department]}]
                   (if (or (str/includes? (str/lower-case name) needle)
                           (str/includes? (str/lower-case surname) needle)
                           (str/includes? (str/lower-case department) needle))
                     r
                     (dissoc r k)))
                 names-map names-map))))


(e/defn CRUD []
        (e/client
          (let [state (e/watch !state)
                selected (:selected state)]
            (dom/div (dom/props {:style {:display :grid
                                         :grid-gap "0.5rem"
                                         :align-items :baseline
                                         :grid-template-areas "'a b c c'\n
                                                         'd d e f'\n
                                                         'd d g h'\n
                                                         'd d i k'\n
                                                         'j j j j'"}})
                     (dom/span (dom/props {:style {:grid-area "a"}})
                               (dom/text "Filter prefix:"))
                     (let [!needle (atom ""), needle (e/watch !needle)]
                       (ui4/input needle (e/fn [v] (reset! !needle v))
                                  (dom/props {:style {:grid-area "b"}}))
                       (dom/ul (dom/props {:style {:grid-area "d"}
                                           :background-color :white
                                           :list-style-type :none
                                           :padding 0
                                           :border "1px gray solid"
                                           :height "100%"})
                               (dom/table
                                 (dom/th (dom/text "Surname"))
                                 (dom/th (dom/text "Name"))
                                 (dom/th (dom/text "Department"))
                                 (e/for [entry (filter-names (:names state) needle)]
                                        (let [id (key entry)
                                              value (val entry)]

                                          #_(dom/li (dom/text (:surname value) ", " (:name value) "," (:department value)))
                                            (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                                    (dom/td  (dom/text (:surname value)))
                                                    (dom/td  (dom/text (:name value)))
                                                    (dom/td  (dom/text (:department value)))
                                                    (dom/td (dom/text id)))
                                          (dom/on "click" (e/fn [_] (select! id))))))))




                     (let [stage (:stage state)]

                       (dom/span (dom/props {:style {:grid-area "e"}}) (dom/text "Name:"))
                       (ui4/input (:name stage) (e/fn [v] (set-name! v))
                                               (dom/props {:style {:grid-area "f"}}))
                       (dom/span (dom/props {:style {:grid-area "g"}}) (dom/text "Surname:"))
                       (ui4/input (:surname stage) (e/fn [v] (set-surname! v))
                                               (dom/props {:style {:grid-area "h"}}))
                       (dom/span (dom/props {:style {:grid-area "i"}}) (dom/text "department")))
                     (ui4/input (:department stage) (e/fn [v] (set-department! v))

                                (dom/props {:style {:grid-area "k"}}))
                     (dom/div (dom/props
                                {:style {:grid-area "j"
                                         :display :grid
                                         :grid-gap "0.5rem"
                                         :grid-template-columns "auto auto auto 1fr"}})
                              (dom/div (ui4/button (e/fn [] (create!)) (dom/text "Create"))))))))


