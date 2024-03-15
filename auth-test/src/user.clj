(ns user
  (:require
    buddy.core.hash
    datomic.client.api
    datomic.client.api.async)) ; Must be ".clj" file, Clojure doesn't auto-load user.cljc

; lazy load dev stuff - for faster REPL startup and cleaner dev classpath
(def start-electric-server! (delay @(requiring-resolve 'app.electric-server-java8-jetty9/start-server!)))
(def shadow-start! (delay @(requiring-resolve 'shadow.cljs.devtools.server/start!)))
(def shadow-watch (delay @(requiring-resolve 'shadow.cljs.devtools.api/watch)))

(def datomic-client)
(def datomic-conn)
(def electric-server-config
  {:host "0.0.0.0", :port 8080, :resources-path "public"})

(defn main [& args]
  (println "Starting Electric compiler and server...")
  #_(println (buddy.core.hash/sha256 "test"))
  (@shadow-start!) ; serves index.html as well
  (@shadow-watch :dev) ; depends on shadow server
  ; Shadow loads app.todo-list here, such that it shares memory with server.
  (def server (@start-electric-server! electric-server-config))
  (comment (.stop server))
  (alter-var-root #'datomic-client (constantly (datomic.client.api/client {:server-type
                                                                           :dev-local
                                                                           :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\auth-test\\auth-db"
                                                                           :system "ci"})))
  (alter-var-root #'datomic-conn (constantly (datomic.client.api/connect datomic-client {:db-name "auth-test"}))))

; Server-side Electric userland code is lazy loaded by the shadow build.
; WARNING: make sure your REPL and shadow-cljs are sharing the same JVM!

(comment
  (main) ; Electric Clojure(JVM) REPL entrypoint
  (hyperfiddle.rcf/enable!) ; turn on RCF after all transitive deps have loaded
  (shadow.cljs.devtools.api/repl :dev) ; shadow server hosts the cljs repl
  ; connect a second REPL instance to it
  ; (DO NOT REUSE JVM REPL it will fail weirdly)
  (type 1))