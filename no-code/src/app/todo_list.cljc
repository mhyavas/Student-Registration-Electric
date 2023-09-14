(ns app.todo-list
  (:require contrib.str
            #?(:clj [datascript.core :as d])                ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]))


#?(:clj (defonce !conn (d/create-conn {}))) ; database on server
(e/def db) ; injected database ref; Electric defs are always dynamic

(def !state (atom []))

(def !main-state (atom {:selected nil
                        :stage-student    {:name       ""
                                           :surname    ""
                                           :department ""
                                           :course     ""
                                           :gpa        ""
                                           :id         0}
                        :stage-course {:name ""
                                       :code ""
                                       :department ""
                                       :instructor ""
                                       :class ""
                                       :id 0}
                        :stage-instructor {:name ""
                                           :department ""
                                           :id 0}
                        :names    (sorted-map 0 {:name "Emil"})
                        :courses  (sorted-map 0 {:name "Calculus 1"})
                        :instructor (sorted-map 0 {:name "Ali Deniz"})}))

(defn add-item! [item]
  (swap! !state conj item))

(defn set-name! [name]
  (swap! !main-state assoc-in [:stage-student :name] name))

(defn set-department! [department]
  (swap! !main-state assoc-in [:stage-student :department] department))

(defn general-setter! [field value]
  (swap! !main-state assoc-in [:stage-student (keyword field)] value))



(e/defn TodoItem [id]
  (e/server
    (let [e (d/entity db id)
          des (:task/description e)
          status (:task/status e)]
      (e/client
        (dom/div
          (ui/checkbox
            (case status :deactive false, :active true)
            (e/fn [v]
                  (apply (.-log js/console) (vector des))
                  (e/server
                    (d/transact! !conn [{:db/id       id
                                         :task/status (if v :active :deactive)}])
                    (e/client (if v
                                (add-item! des)
                                nil))
                    nil))

            (dom/props {:id id}))
          (dom/label (dom/props {:for id}) (dom/text (e/server (:task/description e)))))))))



(e/defn InputSubmit [F]
  ; Custom input control using lower dom interface for Enter handling
  (dom/input (dom/props {:placeholder "Buy milk"})
    (dom/on "keydown" (e/fn [e]
                        (when (= "Enter" (.-key e))
                          (when-some [v (contrib.str/empty->nil (-> e .-target .-value))]
                            (new F v)
                            (set! (.-value dom/node) "")))))))


#?(:clj (defn todo-records [db]
          (->> (d/q '[:find [(pull ?e [:db/id :task/description]) ...]
                      :where [?e :task/status]] db)
            (sort-by :task/description))))

(e/defn Todo-list []
  (e/server
    (binding [db (e/watch !conn)]
      (e/client
       (let [state (e/watch !state)]
         #_(e/server
             (map (fn [v] (d/transact! !conn [{:task/description v
                                               :task/status      :deactive}])) ["name" "department"]))
         (dom/link (dom/props {:rel :stylesheet :href "/todo-list.css"}))
         (dom/div (dom/props {:class "todo-list"})
                  (dom/div {:class "todo-items"}
                           (e/server
                             (e/for-by :db/id [{:keys [db/id]} (todo-records db)]
                                       (TodoItem. id)))))
         (dom/text state))

       (dom/div
         (let [main-state (e/watch !main-state)]
           (let [stage (:stage-student main-state)]
             (e/for [field-name (e/server (map (fn [m] (:task/description m)) (->> (d/q '[:find [(pull ?e [:db/id :task/description]) ...] :where [?e :task/status :active]] db)
                                                                                   (sort-by :task/description))))]
                    (dom/div
                      (dom/span (dom/text field-name ":"))

                      (ui/input ((keyword field-name) stage) (e/fn [v]
                                                                   (general-setter! field-name v)
                                                                   #_((resolve ((ns-publics app.todo-list) (symbol "set-name!"))) v)
                                                                   #_(set-name! v)))))







            (dom/text stage))))))))




;Admin ekrani uzerinde