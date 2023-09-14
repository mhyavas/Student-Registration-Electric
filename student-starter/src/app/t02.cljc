(ns app.t02
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]
            #?(:clj [datomic.client.api :as dt])))


(e/defn Test02 []
        (e/client
          (dom/text "Hello World2")))
