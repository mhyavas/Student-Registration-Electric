(ns app.config)

#?(:clj (def app-version (System/getProperty "HYPERFIDDLE_ELECTRIC_SERVER_VERSION")))

#?(:clj (def datomic-client))
#?(:clj (def datomic-conn))
#?(:clj (def electric-server-config {:host "0.0.0.0", :port 8080, :resources-path "public"}))
