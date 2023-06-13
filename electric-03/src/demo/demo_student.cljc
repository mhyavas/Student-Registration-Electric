(ns demo.demo-student
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


#?(:clj (defonce !db (atom nil)))
#?(:clj (defonce !taker nil))
#?(:clj (defn init-conn []
          (let [uri "datomic:mem://db6"]
            #_ (d/delete-database uri)
            #_(d/create-database uri)
            (let [conn (d/connect uri)]
              #_(d/transact conn schema)
              (when !taker (!taker))
              (alter-var-root #'!taker (fn [_] ((m/reduce #(reset! !db %2) nil (next-db< conn)) identity identity)))
              conn))))

#_#?(:clj (defonce !conn (init-conn)))
#_(e/def db)                                                  ; server
#_(e/def transact!) ; server



#?(:clj
   (defn query-departments [db filter]
     {:pre [filter]}
     (case filter
       :department/matematik (d/q '[:find (pull ?e [*]) :where [?e :student/id _] [?e :student/department :department/matematik]] db)
       :department/fizik   (d/q '[:find (pull ?e [*]) :where [?e :student/id _] [?e :student/department :department/fizik]] db)
       :department/sosyoloji    (d/q '[:find (pull ?e [*]) :where [?e :student/id _] [?e :student/department :department/sosyoloji]] db))))



(defn query [] "TEST2")

(e/defn MyComponent []
        (dom/h1 (dom/text (e/server (query))))
        (println 'component-did-mount)
        (e/on-unmount #(println 'component-will-unmount)))

(e/defn Student []
        (e/client
          (dom/h1 (dom/text "Student"))
          (dom/div
            ))) ; added and removed from the DOM every two seconds


