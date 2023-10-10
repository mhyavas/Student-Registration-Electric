(ns app.message
  #?(:cljs (:import [goog.math Long]))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    [hyperfiddle.electric-ui4 :as ui4]
    [missionary.core :as m]
    clojure.string
    #?(:clj [datomic.client.api :as dt])))


(e/def conn)
(e/def db)

(def !message (atom {:supplier ""}))


(defn set-supplier! [name]
  (swap! !message assoc-in [:supplier] name))


(e/defn ChatPage [[supplier author]]
        (e/client (dom/text supplier " " author)))





(e/defn Page [[page x]]
        (e/client
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (let [value (e/watch !message)]
            (dom/div (dom/props {:class "user-gridsheet-demo"})
                     (case page
                       ::main (history/router 2 (e/server (MessagePage. (:supplier value))))
                       ::chat (history/router 2 (e/server (ChatPage. x)))
                       (e/client (dom/text "no matching route: " (pr-str page))))))))
(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))




