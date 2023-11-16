(ns app.msg-test
  (:require clojure.edn
            contrib.ednish
            [hyperfiddle.electric-ui4 :as ui4]
            #?(:clj [contrib.datomic-contrib :as dx])
            #?(:cljs contrib.datomic-cloud-contrib)
            [contrib.gridsheet :as gridsheet :refer [Explorer]]
            [hyperfiddle.electric :as e]
            [contrib.str :refer [empty->nil]]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            [missionary.core :as m]
            #?(:clj [datomic.client.api :as dt])))


(e/def conn)
(e/def db)

#?(:clj (defn reply_finder [db ref]
          (dt/q '[:find (pull ?e [*])
                  :in $ ?ref
                  :where [?e :msg/reply_to ?ref]] db ref)))
#?(:clj (defn replier [db m]
          (if (nil? (:msg/reply_to (first m)))
            (first m)
            (dt/q '[:find (pull ?ref [*])
                    :in $ ?ref
                    :where [?ref :msg/title _]] db (:db/id (:msg/reply_to (first m)))))))
(e/defn MessageTest []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (e/for [msg (e/server (map (partial replier db) (dt/q '[:find (pull ?e [*])
                                                                        :in $ ?title
                                                                        :where [?e :msg/title ?title]
                                                                        [?e :msg/timestamp ?timestamp]] db "test3")))]
                       (dom/tr (dom/text msg) #_(dom/text (:msg/message (first msg)) "--" (:msg/timestamp (first msg))))))))))


