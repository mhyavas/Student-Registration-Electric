(ns app.t02
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-ui4 :as ui]
    [hyperfiddle.electric-dom2 :as dom]))


(e/defn Test2 []
  (e/client
    (dom/text "test")))
