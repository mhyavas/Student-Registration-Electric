(ns app.t01
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]
            #?(:clj [datomic.client.api :as dt])))


(e/defn app01 []
        (e/client
          (dom/text "Test1 Hello")))
