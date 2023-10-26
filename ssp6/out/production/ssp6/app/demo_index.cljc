(ns ;^:dev/always
  app.demo-index
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]))




(def pages
  [`app.t01/app01])
(e/defn Demos []
        (e/client
          (e/for [k pages]
                 (dom/div (router/link [k] (dom/text (name k)))))))




