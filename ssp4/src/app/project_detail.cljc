(ns app.project-detail
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.electric-ui4 :as ui4]
    clojure.string
    #?(:clj [datomic.client.api :as dt])))


(e/def conn)
(e/def db)

