(ns app.course-test
  (:require contrib.str
            [clojure.string :as str]
            #?(:clj [datascript.core :as d])                ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui4]
            [clojure.walk :as walk]))




(def schema-dept [{
                   :student/id         {
                                        :db/valueType   :db.type/long
                                        :db/unique      :db.unique/identity
                                        :db/cardinality :db.cardinality/one}
                   :student/name       {
                                        :db/valueType   :db.type/string
                                        :db/unique      :db.unique/identity
                                        :db/cardinality :db.cardinality/one}
                   :student/department {
                                        :db/valueType   :db.type/ref
                                        :db/cardinality :db.cardinality/many}
                   :course/id          {
                                        :db/valueType   :db.type/long
                                        :db/unique      :db.unique/identity
                                        :db/cardinality :db.cardinality/one}
                   :course/code        {
                                        :db/valueType   :db.type/string
                                        :db/unique      :db.unique/identity
                                        :db/cardinality :db.cardinality/one}
                   :course/name        {
                                        :db/valueType   :db.type/string
                                        :db/unique      :db.unique/identity
                                        :db/cardinality :db.cardinality/one}
                   :course/department  {
                                        :db/valueType   :db.type/ref
                                        :db/cardinality :db.cardinality/many}}])



#?(:clj (defonce !conn (d/create-conn {}))) ; database on server


(e/def db) ; injected database ref; Electric defs are always dynamic

(defn next-id-course [id]  (inc id))

#?(:clj (defn datomic-course-id [db]
          (ffirst (d/q '[:find (max ?v)
                         :where [?e :course/id ?v]] db))))
(def !state (atom {:selected nil
                   :stage    {:name       ""
                              :surname    ""
                              :department ""
                              :id         0}
                   :stage-course {:name ""
                                  :code ""
                                  :department ""
                                  :id 0}
                   :names    (sorted-map 0 {:name "Emil", :surname "Hans", :department :department/matematik, :id 0})
                   :courses  (sorted-map 0 {:name "Calculus 1" :code "MAT101" :department [:department/matematik :department/fizik] :id 0})}))





(defn set-course-name! [name]
  (swap! !state assoc-in [:stage-course :name] name))
(defn set-course-code! [code]
  (swap! !state assoc-in [:stage-course :code] code))
(defn set-course-department! [dept]
  (swap! !state assoc-in [:stage-course :department] (into [] (map (fn [v] (keyword "department" v)) (clojure.string/split dept #",")))))
(defn set-course-id! [id]
  (swap! !state assoc-in [:stage-course :id] id))
(defn create-course! []
  (swap! !state (fn [{:keys [stage-course] :as state}]

                  (-> state
                      (update :courses assoc (:id stage-course) stage-course)
                      (assoc :stage-course {:name ""
                                            :code ""
                                            :department ""
                                            :id 0})))))



#?(:clj (defn create-schema [schema1 db]
          (d/transact! db schema1)))




#?(:clj (defn CreateCourse [id code name department db]
          (d/transact! db [{:course/id id
                            :course/code code
                            :course/name name
                            :course/department department}])))



(defn filter-course [names-map needle]
  (if (empty? needle)
    names-map
    (let [needle (str/lower-case needle)]
      (reduce-kv (fn [r k {:keys [code name department]}]
                   (if (or (str/includes? (str/lower-case name) needle)
                           (str/includes? (str/lower-case code) needle)
                           (some true? (map (fn [v] (str/includes? (str/lower-case (str v)) needle)) department)))
                     r
                     (dissoc r k)))
                 names-map names-map))))



#?(:clj (defn query-course [db dept]
          (d/q
            '[:find ?e ?v
              :in $ [?dept ...]
              :where
              [?e :course/department ?dept]
              [?e :course/name ?v]]
            db dept)
          #_(d/q '[:find [(pull ?e [:course/id :course/name :course/department])...]
                   :in $ ?dept
                   :where [?e :course/department ?dept]] db [:department/fizik])
          #_(-> (d/q '[:find [(pull ?e [:course/id :course/code :course/name :course/department]) ...]
                       :in $ [?dept ...]
                       :where [?e :course/department [?dept]]]

                     db dept))))



(e/defn CRUD []
        (e/server

          (binding [db (e/watch !conn)]
            (e/server (create-schema schema-dept  !conn))
            (e/client
              (let [state (e/watch !state)
                    selected (:selected state)]




                (dom/div
                  (dom/text "Course Filter Side")
                  (let [!course-dept (atom "") , course-dept (e/watch !course-dept)]
                    (dom/span  (dom/text "Department:"))
                    (ui4/input course-dept (e/fn [v] (reset! !course-dept v)))

                    (dom/ul
                      (dom/table
                        (dom/th (dom/text "Code"))
                        (dom/th (dom/text "Name"))
                        (dom/th (dom/text "Department"))
                        (dom/th (dom/text "Id"))
                        (e/for [entry (filter-course (:courses state) course-dept)]
                               (let [id (key entry)
                                     value (val entry)]

                                 #_(dom/li (dom/text (:surname value) ", " (:name value) "," (:department value)))
                                 (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                         (dom/td (dom/text (:code value)))
                                         (dom/td (dom/text (:name value)))
                                         (dom/td (dom/text (:department value)))
                                         (dom/td (dom/text id))))))))

                  (let [stage (:stage-course state)]

                    (dom/span (dom/text "Course Code:"))
                    (ui4/input (:code stage) (e/fn [v] (set-course-code! v)))

                    (dom/span (dom/text "Course Name:"))
                    (ui4/input (:name stage) (e/fn [v] (set-course-name! v)))

                    (dom/span (dom/text "Course Department"))
                    (ui4/input (:department stage) (e/fn [v] (set-course-department! v)))

                    (dom/text (e/server (d/q '[:find ?v
                                               :where [?e :course/id ?v]] !conn)))
                    (dom/div
                      (dom/div (ui4/button (e/fn []

                                                 (set-course-id! (next-id-course (e/server (datomic-course-id !conn))))
                                                 (create-course!)
                                                 #_(apply (.-log js/console) (:names state))
                                                 (e/server (CreateCourse (:id (last (vals (get-in state [:courses]))))
                                                                         (:code (last (vals (get-in state [:courses]))))
                                                                         (:name (last (vals (get-in state [:courses]))))
                                                                         (:department (last (vals (get-in state [:courses])))) !conn)))
                                           (dom/text "Course Create"))))))
                (dom/div
                  (dom/text  "Course Filter by department name from DB")
                  (let [!filter-dept (atom ""), filter-dept (e/watch !filter-dept)]
                    (dom/span  (dom/text " Department:")
                               (ui4/input filter-dept (e/fn [v] (reset! !filter-dept v)))
                               (dom/text (e/server (query-course db (keyword "department" "fizik"))))



                               (dom/ul
                                (dom/table
                     (dom/th (dom/text "Code")
                                   (dom/th (dom/text "Name"))
                                   (dom/th (dom/text "Department"))
                                   (e/for [entry (e/server (query-course db (keyword "department" filter-dept)))]
                                          (let [value entry]
                   #_(dom/li (dom/text (:student/id value) ", " (:student/name value) "," (:student/department value))
                                            (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})
                                                    (dom/td (dom/text (:course/code value)))
                                                    (dom/td (dom/text (:course/name value)))
                                                    (dom/td (dom/text (:course/department value))))))))))))))))))











