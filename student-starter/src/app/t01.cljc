(ns app.t01
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])))

(e/defn TestPrint []
        (e/client
          (dom/div
           (dom/text "Test Print Function"))))
(e/defn Page [[page x]]
        (dom/h1 (dom/text "Testing versions"))
        (dom/div
          (history/link [::testPrint] (dom/text "test_function")))
        (case page
          ::TestPrint (history/router 2 (e/server (new (TestPrint.))))))
(e/defn Test01 []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri]
            (e/server
              (e/client
                (Page. history/route))))))
