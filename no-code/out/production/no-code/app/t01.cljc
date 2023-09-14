(ns app.t01
  (:require contrib.str
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]))





(e/defn T01 []
        (e/client
          (dom/text "Test")))
