(ns ;^:dev/always
  app.main-index

  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router])
  (:require [hyperfiddle.history :as router]))

(def pages
  [`app.test2-1/CRUD])
   ;`app.registrationv2/CRUD])


(e/defn Demos []
        (e/client
          (dom/h1 (dom/text "Demos"))
          (e/for [k pages]
                 (dom/div (router/link [k] (dom/text (name k)))))))


