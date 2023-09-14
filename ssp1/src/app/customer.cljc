(ns app.customer
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]))



(e/defn Customer []
        (e/client
          (dom/text "Customer Test")))
