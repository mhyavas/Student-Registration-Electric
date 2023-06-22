(ns user.demo-student
  "Requires -Xss2m to compile. The Electric compiler exceeds the default 1m JVM ThreadStackSize
  due to large macroexpansion resulting in false StackOverflowError during analysis."
  (:require
    contrib.str
    #?(:clj [datomic.api :as d])
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.electric-ui4 :as ui]
    [missionary.core :as m]))

;;; Datomic plumbing
#?(:clj
   (defn next-db< [conn]
     (let [q (d/tx-report-queue conn)]
       (m/observe (fn [!]
                    (! (d/db conn))
                    (let [t (Thread. ^Runnable
                                     #(when (try (! (:db-after (.take ^java.util.concurrent.LinkedBlockingQueue q)))
                                                 true
                                                 (catch InterruptedException _))
                                        (recur)))]
                      (.start t)
                      #(doto t .interrupt .join)))))))

;; Datomic only allows a single queue consumer, so we need to spawn a singleton here
;; In the next Electric iteration we can use `m/signal` and clean this up
#?(:clj (defonce !db (atom nil)))
#?(:clj (defonce !taker nil))
#?(:clj (defn init-conn [ schema2]
          (let [uri "datomic:mem://test2"]
            (d/delete-database uri)
            (d/create-database uri)
            (let [conn (d/connect uri)]
              (d/transact conn schema2)
              (d/transact conn [{:student/id 1
                                 :student/name "Can Ali"
                                 :student/department :department/matematik}
                                {:student/id 2
                                 :student/name "Ali Deniz"
                                 :student/department :department/fizik}])

              (when !taker (!taker))
              (alter-var-root #'!taker (fn [_] ((m/reduce #(reset! !db %2) nil (next-db< conn)) identity identity)))
              conn))))

;; Application

#?(:clj (def schema2
          [{:db/ident :student/id
            :db/valueType :db.type/long
            :db/unique :db.unique/identity
            :db/cardinality :db.cardinality/one}
           {:db/ident :student/name
            :db/valueType :db.type/string
            :db/unique :db.unique/identity
            :db/cardinality :db.cardinality/one}
           {:db/ident :student/department
            :db/valueType :db.type/ref
            :db/cardinality :db.cardinality/one}]))


#?(:clj (defonce !conn (init-conn  schema2)))
#?(:clj (comment (alter-var-root #'!conn (fn [_] (init-conn  schema2)))))

(e/def db)                                                  ; server
(e/def transact!) ; server

#?(:clj
   (defn find-student-by-name2 [datodb student-name]
     (d/q
       '[:find (pull ?e [*])
         :in $ ?student-name
         :where
         [?e :student/name ?student-name]]
       datodb student-name)))






(e/defn TodoMVC-UI [state]
        (dom/section (dom/props {:class "todoapp"})
                     (when (e/server (pos? (todo-count db :all)))
                       (TodoList. state))))


#?(:clj
   (defn student-filter [db ?s]
     (->> db
          (filter (fn [m] (str/includes? (m :department) (str ?s))))
          (into []))))



#?(:clj
   (defn slow-transact! [!conn delay tx]
     (try (Thread/sleep delay) ; artificial latency
          (d/transact !conn tx)
          (catch InterruptedException _))))

(e/defn TodoMVC []
        (e/client
          (dom/h1 (dom/text "Student Registration"))
          (let [!search (atom "")
                search (e/watch !search)]
            (e/server
              (binding [db (e/watch !db)]
                (let [system-props (find-student-by-name2 db search)]
                  (e/client
                    (dom/div (dom/props {:style {:color "gray"}}))
                    (dom/text system-props)
                    (ui/input search (e/fn [name] (reset! !search name))
                              (dom/props {:type "search" :placeholder "department"}))
                    (dom/h3 (dom/text "Student List"))
                    (dom/table (dom/props {:style {:border-style :solid :border-collapse :collapse}})
                               (e/server
                                 (e/for [{:keys [:student/id :student/name :student/department]} system-props]
                                        (e/client
                                          (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})
                                                  (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse}}) (dom/text :student/id))
                                                  (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse}}) (dom/text :student/name))
                                                  (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse :white-space :nowrap}}) (dom/text department))))))))))))))


(comment
  (todo-count @!conn :all)
  (todo-count @!conn :active)
  (todo-count @!conn :done)
  (query-todos @!conn :all)
  (query-todos @!conn :active)
  (query-todos @!conn :done)
  (d/q '[:find (count ?e) . :where [?e :task/status]] @!conn))

