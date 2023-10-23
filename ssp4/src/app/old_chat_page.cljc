(ns app.old-chat-page
  #?(:cljs (:import [goog.math Long]))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    [hyperfiddle.electric-ui4 :as ui4]
    [missionary.core :as m]
    [contrib.str :refer [empty->nil]]
    clojure.string
    app.message
    #?(:clj [datomic.client.api :as dt])))


(e/defn ChatPage [[title author]]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (let [supplier (e/watch !state-supplier)]
                (if (empty? (e/server (dt/q '[:find (pull ?e [*])
                                              :in $ ?title ?supplier
                                              :where [?e :chat/subject ?title]
                                              [?e :chat/from ?supplier]] (dt/db conn) title (e/server (ffirst (dt/q '[:find ?e :in $ ?supplier :where [?e :supplier/name ?supplier]] (dt/db conn) (:selected-supplier supplier)))))))
                  (e/server (dt/transact conn {:tx-data [{:chat/id      (e/server (next-chat-id (dt/db conn)))
                                                          :chat/project (e/server (ffirst (dt/q '[:find ?e
                                                                                                  :in $ ?title
                                                                                                  :where [?e :project/title ?title]] (dt/db conn) title)))
                                                          :chat/from    (e/server (ffirst (dt/q '[:find ?e
                                                                                                  :in $ ?supplier
                                                                                                  :where [?e :supplier/name ?supplier]] (dt/db conn) (:selected-supplier supplier))))
                                                          :chat/to (e/server (ffirst (dt/q '[:find ?e
                                                                                             :in $ ?name
                                                                                             :where [?e :author/name ?name]] (dt/db conn) author)))
                                                          :chat/subject title}]}))
                  nil)
                (dom/div
                  (let [msg (e/server (dt/q '[:find (pull ?m [*])
                                              :in $ ?title ?author
                                              :where [?m :chat/subject ?title]
                                              [?m :chat/to ?author]
                                              [?m :chat/id _]] (dt/db conn) title (ffirst (dt/q '[:find ?e :in $ ?aut :where [?e :author/name ?aut]]
                                                                                                (dt/db conn) author))))
                        customer-msg (e/server (dt/q '[:find (pull ?m [*])
                                                       :in $ ?title ?author
                                                       :where [?m :chat/subject ?title]
                                                       [?m :chat/from ?author]
                                                       [?m :chat/id _]] (dt/db conn) title (ffirst (dt/q '[:find ?e :in $ ?aut :where [?e :author/name ?aut]]
                                                                                                         (dt/db conn) author))))]
                    (dom/ul
                      (e/for [content (:chat/messages (ffirst msg))]
                             (dom/text content)
                             (dom/li
                               (dom/text (:selected-supplier supplier) "->" (e/server (let [m (ffirst (dt/q '[:find (pull ?id [*]) #_?msg
                                                                                                              :in $ ?id
                                                                                                              :where [?id :msg/message ?msg]] (dt/db conn) (:db/id content)))]
                                                                                        (str (:msg/message m) "--" (java.util.Date. (:msg/timestamp m)))))))))
                    (dom/ul
                      (e/for [content (:chat/messages (ffirst customer-msg))]
                             (dom/li
                               (dom/text (e/server (let [m (ffirst (dt/q '[:find (pull ?id [*]) #_?msg
                                                                           :in $ ?id
                                                                           :where [?id :msg/message ?msg]] (dt/db conn) (:db/id content)))]
                                                     (str (:msg/message m) "--" (java.util.Date. (:msg/timestamp m)))))))))
                    (dom/ul
                      (e/for [value (e/server (def formatted-msg (map (fn [m] [{:from (:chat/from m) :to (:chat/to m) :messages (:chat/messages m)}]) (conj (first msg))))
                                              (def formatted-cust-msg (map (fn [m] [{:from (:chat/from m) :to (:chat/to m) :messages (:chat/messages m)}]) (first customer-msg)))
                                              (concat formatted-msg formatted-cust-msg))]
                             ()
                             (dom/text value)
                             #_(dom/li

                                 (dom/text (e/server (map (fn [m] (dt/q '[:find (pull ?id [*]) #_?msg
                                                                          :in $ ?id
                                                                          :where [?id :msg/message ?msg]] (dt/db conn) (:db/id m))) (:chat/messages value)))))))))


                (dom/input (dom/props {:placeholder "Type a message" :maxlength 100})
                           (dom/on "keydown" (e/fn [e]
                                                   (when (= "Enter" (.-key e))
                                                     (when-some [v (empty->nil (.substr (.. e -target -value) 0 100))]
                                                       (apply (.-log js/console) v)
                                                       (e/server (dt/transact conn {:tx-data [{:msg/id        (next-msg-id (dt/db conn))
                                                                                               :msg/message   v
                                                                                               :msg/timestamp (System/currentTimeMillis)}]})
                                                                 (delay (println "Testing") 1)
                                                                 (def msg-db-id (ffirst (dt/q '[:find ?e
                                                                                                :in $ ?msg
                                                                                                :where [?e :msg/message ?msg]] (dt/db conn) v)))
                                                                 (def chat-messages (if (nil? (:chat/messages (first (flatten (dt/q '[:find (pull ?e [*])
                                                                                                                                      :in $ ?chat-subject
                                                                                                                                      :where [?e :chat/subject ?chat-subject]
                                                                                                                                      [?e :chat/project _]] (dt/db conn) title)))))

                                                                                      []
                                                                                      (into [] (map (fn [v] (:db/id  v)) (into [] (:chat/messages (first (flatten (dt/q '[:find (pull ?e [*])
                                                                                                                                                                          :in $ ?chat-subject
                                                                                                                                                                          :where [?e :chat/subject ?chat-subject]
                                                                                                                                                                          [?e :chat/id _]] (dt/db conn) title)))))))))
                                                                 (dt/transact conn {:tx-data [{:db/id  (ffirst (dt/q '[:find ?e
                                                                                                                       :in $ ?chat-subject ?author
                                                                                                                       :where [?e :chat/subject ?chat-subject]
                                                                                                                       [?e :chat/to ?author]] (dt/db conn) title (ffirst (dt/q '[:find ?e :in $ ?aut :where [?e :author/name ?aut]]
                                                                                                                                                                               (dt/db conn) author))))
                                                                                               :chat/messages (vector-appender chat-messages msg-db-id)}]}))
                                                       (set! (.-value dom/node) ""))))))


                (dom/text title " " author))))))



;Customer side Chat Page

(e/client
  (if (empty? (e/server (dt/q '[:find (pull ?e [*])
                                :in $ ?title ?author
                                :where [?e :chat/subject ?title]
                                [?e :chat/from ?author]] (dt/db conn)
                              title
                              (e/server
                                (ffirst
                                  (dt/q '[:find ?e
                                          :in $ ?title
                                          :where [?p :project/title ?title]
                            [?p :project/author ?e]] (dt/db conn)
                                        title))))))
    (e/server (dt/transact conn {:tx-data [{:chat/id      (next-msg-id db)
                                            :chat/project (e/server (ffirst (dt/q '[:find ?e
                                                                                    :in $ ?title
                                                                                    :where [?e :project/title ?title]] (dt/db conn) title)))
                                            :chat/from    (e/server (ffirst (dt/q '[:find ?a
                                                                                    :in $ ?title
                                                                                    :where [?e :project/title ?title]
                                                                                    [?e :project/author ?a]] (dt/db conn) title)))
                                            :chat/to      (e/server (ffirst (dt/q '[:find ?supplier-id
                                                                                    :in $ ?project-title
                                                                                    :where [?p :project/title ?project-title]
                                                                                    [?p :project/tender_winner ?supplier-id]] (dt/db conn) title)))
                                            :chat/subject title}]}))
    nil)
  (dom/div
    (let [msg (e/server (dt/q '[:find (pull ?m [*])
                                :in $ ?title ?author
                                :where [?m :chat/subject ?title]
                                [?m :chat/from ?author]] (dt/db conn) title (ffirst (dt/q '[:find ?e :in $ ?title :where [?p :project/title ?title] [?p :project/author ?e]] (dt/db conn) title))))]
      (dom/ul
        (e/for [content (:chat/messages (ffirst msg))]
               (dom/li
                 (dom/text (e/server (ffirst (dt/q '[:find ?msg
                                                     :in $ ?id
                                                     :where [?id :msg/message ?msg]] (dt/db conn) (:db/id content))))))))
      (dom/text msg)))
  (dom/div
    (dom/input (dom/props {:placeholder "Type a message" :maxlength 100})
               (dom/on "keydown" (e/fn [e]
                                       (when (= "Enter" (.-key e))
                                         (when-some [v (empty->nil (.substr (.. e -target -value) 0 100))]
                                           (e/server
                                             (dt/transact conn {:tx-data [{:msg/id (next-msg-id (dt/db conn))
                                                                           :msg/message v
                                                                           :msg/timestamp (System/currentTimeMillis)}]})
                                             (delay (println "Testing") 1)
                                             (def msg-db-id (ffirst (dt/q '[:find ?e
                                                                            :in $ ?msg
                                                                            :where [?e :msg/message ?msg]] (dt/db conn) v)))

                                             (def chat-messages (if (nil? (:chat/messages (first (flatten (dt/q '[:find (pull ?e [*])
                                                                                                                  :in $ ?chat-subject
                                                                                                                  :where [?e :chat/subject ?chat-subject]
                                                                                                                  [?e :chat/project _]] (dt/db conn) title)))))

                                                                  []
                                                                  (into [] (map (fn [v] (:db/id  v)) (into [] (:chat/messages (first (flatten (dt/q '[:find (pull ?e [*])
                                                                                                                                                      :in $ ?chat-subject ?author
                                                                                                                                                      :where [?e :chat/subject ?chat-subject]
                                                                                                                                        [?e :chat/from ?author]] (dt/db conn) title (ffirst (dt/q '[:find ?e :in $ ?title :where [?p :project/title ?title] [?p :project/author ?e]] (dt/db conn) title)))))))))))
                                             (dt/transact conn {:tx-data [{:db/id (ffirst (dt/q '[:find ?e
                                                                                                  :in $ ?chat-subject ?from
                                                                                                  :where [?e :chat/subject ?chat-subject]
                                                                                    [?e :chat/from ?from]] (dt/db conn) title (ffirst (dt/q '[:find ?e :in $ ?title :where [?p :project/title ?title] [?p :project/author ?e]]
                                                                                                                       (dt/db conn) title))))
                                                                           :chat/messages (vector-appender chat-messages msg-db-id)}]}))
                                           (set! (.-value dom/node) ""))))))))