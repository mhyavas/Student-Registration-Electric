(ns user ; Must be ".clj" file, Clojure doesn't auto-load user.cljc
  (:require datomic.client.api
            datomic.client.api.async
            [hyperfiddle.rcf :refer [tests]]
            [missionary.core :as m]))

(def datomic-client)
(def datomic-conn)
; lazy load dev stuff - for faster REPL startup and cleaner dev classpath
(def start-electric-server! (delay @(requiring-resolve 'electric-server-java11-jetty10/start-server!)))
(def shadow-start! (delay @(requiring-resolve 'shadow.cljs.devtools.server/start!)))
(def shadow-watch (delay @(requiring-resolve 'shadow.cljs.devtools.api/watch)))

(def electric-server-config
  {:host "0.0.0.0", :port 8080, :resources-path "public"})
#_(def datomic-client (datomic.client.api/client {:server-type :dev-local :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\datodb" :system "ci"}))
#_(datomic.client.api/create-database datomic-client "datomic:mem://test2")


#_(def datomic-conn (datomic.client.api/connect datomic-client {:db-name "studentReg"}))

#_(datomic.client.api/transact  datomic-conn
                     {:tx-data [{:db/ident :department/matematik}
                     {:db/ident :department/fizik}
                     {:db/ident :department/sosyoloji}]})
#_(datomic.client.api/transact datomic-conn
                             {:tx-data [{:db/ident       :student/id
                                         :db/valueType   :db.type/long
                                         :db/unique      :db.unique/identity
                                         :db/cardinality :db.cardinality/one}
                                        {:db/ident       :student/name
                                         :db/valueType   :db.type/string
                                         :db/unique      :db.unique/identity
                                         :db/cardinality :db.cardinality/one}
                                        {:db/ident       :student/department
                                         :db/valueType   :db.type/ref
                                         :db/cardinality :db.cardinality/one}]})
#_(datomic.client.api/transact datomic-conn
                             {:tx-data [{:student/id         1
                                         :student/name       "Can Ali"
                                         :student/department :department/matematik}
                                        {:student/id         2
                                         :student/name       "Ali Deniz"
                                         :student/department :department/fizik}]})

(defn main [& args]
  (println "Starting Electric compiler and server...")
  (@shadow-start!) ; serves index.html as well
  (@shadow-watch :dev) ; depends on shadow server
  (def server (@start-electric-server! electric-server-config))
  (comment (.stop server))

  ; inject datomic root bindings
  (alter-var-root #'datomic-client (constantly (datomic.client.api/client {:server-type :dev-local :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\datodb" :system "ci"})))
  (alter-var-root #'datomic-conn (constantly (datomic.client.api/connect datomic-client {:db-name "studentReg"} )))

  ; inject test database, for repl only
  (require '[datomic.client.api.async :as d])
  (def db (datomic.client.api.async/db datomic-conn))
  (hyperfiddle.rcf/enable!))

; Userland Electric code is lazy loaded by the shadow build due to usage of
; :require-macros in all Electric source files.
; WARNING: make sure your REPL and shadow-cljs are sharing the same JVM!

(comment
  (main) ; Electric Clojure(JVM) REPL entrypoint
  (hyperfiddle.rcf/enable!) ; turn on RCF after all transitive deps have loaded
  (shadow.cljs.devtools.api/repl :dev) ; shadow server hosts the cljs repl
  ; connect a second REPL instance to it
  ; (DO NOT REUSE JVM REPL it will fail weirdly)
  (type 1)

  (tests "healthcheck"
         (->> (m/? (app.queries/query
                     '[:find (pull ?tx [:db/id :db/txInstant])
                       :where [?tx :db/txInstant]]
                     db))
                   (take 1))
         := [[#:db{:id 13194139533312, :txInstant #inst"1970-01-01T00:00:00.000-00:00"}]]))