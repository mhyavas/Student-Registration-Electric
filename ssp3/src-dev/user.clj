(ns user ; Must be ".clj" file, Clojure doesn't auto-load user.cljc
  (:require [app.config :as config]
            [app.server :refer [start-server!]]
            [datomic.api :as d]
            datomic.client.api
            [hyperfiddle.rcf :refer [tests]]))

; lazy load dev stuff - for faster REPL startup and cleaner dev classpath
(def shadow-start! (delay @(requiring-resolve 'shadow.cljs.devtools.server/start!)))
(def shadow-watch (delay @(requiring-resolve 'shadow.cljs.devtools.api/watch)))

(defn main [& args]
  (println "Starting Electric compiler and server...")
  (@shadow-start!) ; serves index.html as well
  (@shadow-watch :dev) ; depends on shadow server)
  (alter-var-root #'config/datomic-client (constantly (datomic.client.api/client {:server-type
                                                                                  :dev-local
                                                                                  :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                                                                                  :system "ci"})))
  (alter-var-root #'config/datomic-conn (constantly (datomic.client.api/connect config/datomic-client {:db-name "SSP"})))

  (def server (start-server! config/electric-server-config))
  (comment (.stop server))
  (def db (d/db config/datomic-conn)) ; inject test db, for repl only
  (hyperfiddle.rcf/enable!)
  (tests "datomic healthcheck"
    (->> (d/q '[:find (pull ?tx [:db/id :db/txInstant]) :where [?tx :db/txInstant]] db) (take 1))
    := [[#:db{:id 13194139533312, :txInstant #inst"1970-01-01T00:00:00.000-00:00"}]]))

(comment (main))