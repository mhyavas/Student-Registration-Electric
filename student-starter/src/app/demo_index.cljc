(ns ;^:dev/always
  app.demo-index
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]
            #?(:clj [datomic.client.api :as dt])))




(def pages
  [`app.t01/Test01
   `app.t02/Test02])

(e/defn Demos []
        (e/server
         (e/client
           (e/for [k pages]
                  (dom/div (router/link [k] (dom/text (name k))))))))





