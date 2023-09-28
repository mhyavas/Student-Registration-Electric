(ns app.supplier
  #?(:cljs (:import [goog.math Long]))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    [hyperfiddle.electric-ui4 :as ui4]
    [missionary.core :as m]
    clojure.string
    #?(:clj [datomic.client.api :as dt])))


(e/defn SupplierPage []
        (e/client
          (dom/text "Supplier Side")))
