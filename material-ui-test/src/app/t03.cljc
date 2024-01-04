(ns app.t03
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]))


(e/defn Test []
  (e/client
    (dom/link (dom/props {:rel :stylesheet :href "/test.css"}))
    (dom/h1 (dom/text "Test"))))

