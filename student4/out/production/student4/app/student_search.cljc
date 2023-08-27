(ns app.student-search
  (:require contrib.ednish
            [hyperfiddle.api :as hf]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]))



(e/defn StudentSearch []
        (e/client
          (dom/text "Student Test")))