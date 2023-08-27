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

#?(:clj (defn query-name [db dept]
          (dt/q '[:find (pull ?e [*])
                  :in $ ?dept
                  :where [?e :student/name ?dept]]

                db dept)))
#?(:clj (defn query-dept [db dept]
          (dt/q '[:find (pull ?e [*])
                  :in $ ?id
                  :where [?e :student/department ?id]] db dept)))

(defn set-search! [name]
  (swap! !state assoc-in [:keyword] name))
(e/defn StudentSearch []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
             (e/client
               (let [state (e/watch !state)]
                 #_(dom/div
                     (let [stage (:keyword state)]
                      (dom/h1 (dom/text "Student Search"))
                      (dom/span (dom/props {:style {:grid-area "i"}}) (dom/text "Student Name"))
                      (ui4/input stage (e/fn [v] (set-search! v)))))
                 (dom/div
                   (let [!filter-dept (atom ""), filter-dept (e/watch !filter-dept)]
                     (dom/span  (dom/text "Student Search by Name:"))
                     (ui4/input filter-dept (e/fn [v] (reset! !filter-dept v)))


                     (dom/ul
                       (dom/table
                         (dom/th (dom/text "Id"))
                         (dom/th (dom/text "Name"))
                         (dom/th (dom/text "Department"))
                         (e/for [entry (e/server (query-name db filter-dept))]
                                (let [value entry]

                                  #_(dom/li (dom/text (:student/id value) ", " (:student/name value) "," (:student/department value)))
                                  (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                          (dom/td (dom/text (:student/id (first value))))
                                          (dom/td (dom/text (:student/name (first value))))
                                          (dom/td (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                                      :in $ ?dept-id
                                                                                      :where [?dept-id :department/name ?name]] db (:db/id (:student/department (first value)))))))))))))))
                 (dom/div
                   (let [!filter-dept (atom ""), filter-dept (e/watch !filter-dept)]
                     (dom/span  (dom/text "Student Search by Department:"))
                     (ui4/input filter-dept (e/fn [v] (reset! !filter-dept v)))

                     #_(dom/text (e/server (dt/q '[:find (pull ?e [*])
                                                   :in $ ?id
                                                   :where [?e :student/department ?id]] db (ffirst (dt/q '[:find ?dept-id
                                                                                                           :in $ ?name
                                                                                                           :where [?dept-id :department/name ?name]] db "Fizik")))))


                     (dom/ul
                       (dom/table
                         (dom/th (dom/text "Id"))
                         (dom/th (dom/text "Name"))
                         (dom/th (dom/text "Department"))
                         (e/for [entry (e/server (query-dept db (ffirst (dt/q '[:find ?dept-id
                                                                                :in $ ?name
                                                                                :where [?dept-id :department/name ?name]] db (clojure.string/capitalize filter-dept)))))]
                                (let [value entry]

                                  #_(dom/li (dom/text (:student/id value) ", " (:student/name value) "," (:student/department value)))
                                  (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})

                                          (dom/td (dom/text (:student/id (first value))))
                                          (dom/td (dom/text (:student/name (first value))))
                                          (dom/td (dom/text (ffirst (e/server (dt/q '[:find ?name
                                                                                      :in $ ?dept-id
                                                                                      :where [?dept-id :department/name ?name]] db (:db/id (:student/department (first value)))))))))))))))))))))


