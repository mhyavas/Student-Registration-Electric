(ns app.demo-index
  #?(:cljs (:import [goog.math Long]))
  (:require clojure.edn
            contrib.ednish
            [contrib.str :refer [any-matches?]]
            [contrib.data :refer [unqualify treelister]]
            #?(:clj [contrib.datomic-contrib :as dx])
            #?(:cljs contrib.datomic-cloud-contrib)
            [contrib.datomic-m #?(:clj :as :cljs :as-alias) d]
            [contrib.gridsheet :as gridsheet :refer [Explorer]]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.history :as history]
            [missionary.core :as m]))

(e/def conn)
(e/def db)
(e/def schema)




(def !state (atom {:selected nil
                   :stage-student    {:name       ""
                                      :surname    ""
                                      :department ""
                                      :course     ""
                                      :id         0}
                   :stage-course {:name ""
                                  :code ""
                                  :department ""
                                  :instructor ""
                                  :class ""
                                  :id 0}
                   :names    (sorted-map 0 {:name "Emil", :surname "Hans", :department :department/matematik, :course ["MAT101"] :id 0})
                   :courses  (sorted-map 0 {:name "Calculus 1" :code "MAT101" :department [:department/matematik :department/fizik] :id 0})}))

#?(:clj (defn create-schema [schema1 db]
          (d/transact! db schema1)))

#?(:clj (defn CreateStudent [id name department course db]
          (d/transact! db [{:student/id         id
                            :student/name       name
                            :student/department department
                            :student/course course}])))
;TODO CreateStudent fonksiyonuna gonderilecek objenin stringten vector icine aktarilmasi gerekiyor.

#?(:clj (defn CreateCourse [id code name department instructor class db]
          (d/transact! db [{:course/id id
                            :course/code code
                            :course/name name
                            :course/department department
                            :course/instructor instructor
                            :course/class class}])))

(defn set-name! [name]
  (swap! !state assoc-in [:stage-student :name] name))

(defn set-surname! [surname]
  (swap! !state assoc-in [:stage-student :surname] surname))
(defn set-department! [department]
  (swap! !state assoc-in [:stage-student :department] (keyword "department" department)))


(e/defn Index []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              (e/client
                (dom/div
                  (dom/h2 (dom/text "Creating Student"))
                  (let [state (e/watch !state)]
                    (let [stage (:stage-student state)]
                      (dom/text stage)
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
                               (dom/div (ui4/button (e/fn []
                                                          (apply (.-log js/console) (:names state)))

                                                    (dom/text "Create"))))))))))))



