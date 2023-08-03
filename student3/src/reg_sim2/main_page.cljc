(ns reg-sim2.main-page
  (:require contrib.str
            [clojure.string :as str]
            #?(:clj [datascript.core :as d])                ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [clojure.walk :as walk]))

#?(:clj (defonce !conn (d/create-conn {}))) ; database on server


(e/def db) ; injected database ref; Electric defs are always dynamic

;Aşağıda öğrencilerin, derslerin, ve departmanların schema objeleri oluşturuluyor.
(def schema-student [{:db/ident       :student/id
                      :db/valueType   :db.type/long
                      :db/unique      :db.unique/identity
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :student/name
                      :db/valueType   :db.type/string
                      :db/unique      :db.unique/identity
                      :db/cardinality :db.cardinality/one}
                     {:db/ident       :student/department
                      :db/valueType   :db.type/ref
                      :db/cardinality :db.cardinality/one}
                     {:db/ident :student/course
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/many}])

(def schema-course [{:db/ident :course/id
                     :db/valueType :db.type/long
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :course/code
                     :db/valueType :db.type/string
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :course/name
                     :db/valueType :db.type/string
                     :db/unique :db.unique/identity
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :course/department
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/many}
                    {:db/ident :course/instructor
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one}
                    {:db/ident :course/class
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one}])
(def schema-dept  [{:db/ident :department/matematik}
                   {:db/ident :department/fizik}
                   {:db/ident :department/sosyoloji}])

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

(e/defn MainPage []
        (e/server
          (binding [db (e/watch !conn)]
            (e/server (create-schema schema-dept !conn)
                      (create-schema schema-student !conn)
                      (create-schema schema-course !conn))
            (e/client
              (dom/div
                (dom/h2 (dom/text "Creating Student"))
                (let [state (e/watch !state)]
                  (let [stage (:stage-student state)]
                    (dom/text stage)
                    (dom/span  (dom/text "Name:"))
                    (ui4/input (:name stage) (e/fn [v] (set-name! v)))
                    (dom/span  (dom/text "Surname:"))
                    (ui4/input (:surname stage) (e/fn [v] (set-surname! v)))
                    (dom/span  (dom/text "department"))
                    (ui4/input (:department stage) (e/fn [v] (set-department! v)))
                    (dom/div (dom/props
                               {:style {:grid-area             "j"
                                        :display               :grid
                                        :grid-gap              "0.5rem"
                                        :grid-template-columns "auto auto auto 1fr"}})
                             (dom/div (ui4/button (e/fn []
                                                        (apply (.-log js/console) (:names state)))

                                                  (dom/text "Create")))))))))))












