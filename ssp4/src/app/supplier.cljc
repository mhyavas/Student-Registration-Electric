(ns app.supplier
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

(e/def conn)
(e/def db)

(def !state-supplier (atom {:selected-supplier ""
                            :types []
                            :proposal {:supplier ""
                                       :price ""
                                       :project ""
                                       :timestamp 0}}))

(defn set-supplier [name]
  (swap! !state-supplier assoc-in [:selected-supplier] name))

#?(:clj (defn next-proposal-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :proposal/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :proposal/id ?id]] db))))))
#?(:clj (defn next-chat-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :chat/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :chat/id ?id]] db))))))
#?(:clj (defn next-msg-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :msg/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :msg/id ?id]] db))))))

#?(:clj (defn vector-appender [vect value]
          (conj vect value)))

(e/defn SendProposal [[project supplier]]
        (e/client
          (dom/div
            (let [supplier (e/watch !state-supplier)]
              (let [proposal (:proposal supplier)]
                (dom/text proposal)
                (dom/h2 (dom/text "Creating Proposal for" (:project/title project)))
                (dom/div
                  (dom/span (dom/text "Price"))
                  (ui4/input (:price proposal) (e/fn [v] (swap! !state-supplier assoc-in [:proposal :price] v))))
                (dom/div
                  (ui4/button (e/fn []
                                    (e/server
                                      (dt/transact conn {:tx-data [{:proposal/id        (next-proposal-id db)
                                                                    :proposal/supplier  (:db/id (ffirst (dt/q '[:find (pull ?e [*]) :in $ ?name :where [?e :supplier/name ?name]] db (:selected-supplier supplier))))
                                                                    :proposal/price     (Float/parseFloat (:price proposal))
                                                                    :proposal/project   (:db/id project)
                                                                    :proposal/timestamp (System/currentTimeMillis)}]}))) (dom/text "Send Proposal"))))) (dom/text project))))

(e/defn FindProject [supplier-name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [project (e/watch !state-supplier)]
                  (let [!filter-project (atom ""), filter-project (e/watch !filter-project)]
                   (dom/span (dom/text "Project search via type: \n"))
                   (e/for [value (e/server (dt/q '[:find ?name
                                                   :where [?e :type/name ?name]] (dt/db conn)))]
                          (dom/label
                            (dom/input (dom/props {:type  "checkbox"
                                                   :name  (first value)
                                                   :value "true"})
                                       (dom/on "change" (e/fn [v]
                                                              (if (and (.-checked dom/node) (not (some (partial = (str (.-name dom/node))) (:types project))))
                                                                #_(swap! data update :nums conj {:first 1 :second 2})
                                                                (swap! !state-supplier update-in [:types] conj (str (.-name dom/node)))
                                                                (if (some (partial = (str (.-name dom/node))) (:types project))
                                                                  (swap! !state-supplier update-in [:types] (fn [types] (vec (remove #(= (str (.-name dom/node)) %) types))))
                                                                  nil))
                                                              (reset! !filter-project (str (.-name dom/node))))))





                            (dom/text (first value))))
                   (dom/text filter-project)
                   (dom/table (dom/props {:border "1px" "solid" "black"})
                     (dom/th (dom/text "Title"))
                     (dom/th (dom/text "Status"))
                     (dom/th (dom/text "Description"))
                     (dom/th (dom/text "Author"))
                     (dom/th (dom/text "Company"))
                     (dom/th (dom/text "Create Date"))
                     (dom/th (dom/text "Proposal"))
                     (e/for [value (e/server (dt/q '[:find (pull ?p [*])
                                                     :in $  [?t]
                                                     :where [?p :project/types ?t]] db [(ffirst (dt/q '[:find ?e :in $ ?type :where [?e :type/name ?type]] db filter-project))]))]
                            (dom/tr
                              (dom/td (dom/text (:project/title (first value))))
                              (dom/td (dom/text (:project/status (first value))))
                              (dom/td (dom/text (:project/description (first value))))
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                          :in $ ?a
                                                                          :where [?a :author/name ?name]] db (:db/id (:project/author (first value))))))))
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?company
                                                                          :in $ ?c
                                                                          :where [?c :customer/name ?company]] db (:db/id (first (:project/customer (first value)))))))))
                              (dom/td (dom/text (e/server (if (and
                                                                (and
                                                                  (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. (:project/create_date (first value)))))
                                                                  (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. (:project/create_date (first value))))))
                                                                (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. (:project/create_date (first value))))))
                                                            (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. (:project/create_date (first value))))
                                                            (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:project/create_date (first value))))))))
                              (dom/td (history/link [::send-proposal [(first value) supplier-name]] (dom/text "Select")))))))))))))



(e/defn ProjectDetail [project-name]
        (e/client
          (dom/h2 (dom/text "Details of " project-name))
          (dom/table (dom/props {:border "1px" "solid" "black"})
                     (dom/th (dom/text "Title"))
                     (dom/th (dom/text "Status"))
                     (dom/th (dom/text "Author"))
                     (dom/th (dom/text "Description"))
                     (dom/th (dom/text "Deadline for Proposal"))
                     (dom/th (dom/text "Types"))
                     (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                     :in $ ?project-name
                                                     :where [?e :project/title ?project-name]] db project-name))]
                            (dom/tr
                              (dom/td (dom/text (:project/title (first value))))
                              (dom/td (dom/text (:project/status (first value))))
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                          :in $ ?id
                                                                          :where [?id :author/name ?name]] db (:db/id (:project/author (first value))))))))
                              (dom/td (dom/text (:project/description (first value))))
                              (dom/td (dom/text (e/server (java.util.Date. (+ (* 7 86400 1000)  (:project/create_date (first value)))))))
                              (dom/td (dom/text (e/server (map (fn [m]
                                                                 (ffirst (dt/q '[:find ?name
                                                                                 :in $ ?id
                                                                                 :where [?id :type/name ?name]] db (:db/id m)))) (:project/types (first value)))))))))))
(e/defn SupplierMain [name]
        (e/client
          (set-supplier name)
          (dom/h2 (dom/text "Main Page of " name))
          (dom/h3 (dom/text "Proposals"))
          (dom/table (dom/props {:border "1px" "solid" "black"})
                     (dom/th (dom/text "Project Title"))
                     (dom/th (dom/text "Status"))
                     (dom/th (dom/text "Date"))
                     (dom/th (dom/text "Customer"))
                     (e/for [value (e/server (dt/q '[:find (pull ?p [*])
                                                     :in $ ?supplier-name
                                                     :where [?s :supplier/name ?supplier-name]
                                                     [?p :proposal/supplier ?s]] db name))]
                            (dom/tr
                              (dom/td (history/link [::project-detail (e/server (ffirst (dt/q '[:find ?title
                                                                                                :in $ ?e
                                                                                                :where [?e :project/title ?title]] db (:db/id (:proposal/project (first value))))))] (dom/text (e/server (ffirst (dt/q '[:find ?title
                                                                                                                                                                                                                         :in $ ?e
                                                                                                                                                                                                                         :where [?e :project/title ?title]] db (:db/id (:proposal/project (first value)))))))))
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?status
                                                                          :in $ ?e
                                                                          :where [?e :project/status ?status]] db (:db/id (:proposal/project (first value))))))))
                              (dom/td (dom/text (e/server (if (and
                                                                (and
                                                                  (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. (:proposal/timestamp (first value)))))
                                                                  (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. (:proposal/timestamp (first value))))))
                                                                (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. (:proposal/timestamp (first value))))))
                                                            (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. (:proposal/timestamp (first value))))
                                                            (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:proposal/timestamp (first value))))))))

                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?customer
                                                                          :in $ ?customer-id
                                                                          :where [?customer-id :customer/name ?customer]] db (ffirst (dt/q '[:find ?status
                                                                                                                                             :in $ ?e
                                                                                                                                             :where [?e :project/customer ?status]] db (:db/id (:proposal/project (first value)))))))))))))))

(e/defn MainMessage [info]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (let [db (dt/db conn)]
              (e/client
                (dom/table
                  (dom/th (dom/text "Project"))
                  (dom/th (dom/text "Customer"))
                  (dom/th (dom/text "Author"))
                  (e/for [value (e/server (flatten (map (fn [m] (dt/q '[:find (pull ?project-id [*])
                                                                        :in $ ?project-id ?tender-winner
                                                                        :where [?project-id :project/status :active]
                                                                        [?project-id :project/tender_winner ?tender-winner]] db (:db/id (:proposal/project m)) (:db/id (:proposal/supplier m))))
                                                        (flatten (dt/q '[:find (pull ?e [*])
                                                                         :in $ ?supplier-name
                                                                         :where [?s :supplier/name ?supplier-name]
                                                                         [?e :proposal/supplier ?s]] db info)))))]
                         (dom/tr
                           (dom/td (dom/text (:project/title value)))
                           (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                       :in $ ?e
                                                                       :where [?e :customer/name ?name]] db (:db/id (first (:project/customer value))))))))
                           (dom/td (history/link [::chat [(:project/title value) (e/server (ffirst (dt/q '[:find ?name
                                                                                                           :in $ ?e
                                                                                                           :where [?e :author/name ?name]] db (:db/id (:project/author value)))))]] (dom/text (e/server (ffirst (dt/q '[:find ?name :in $ ?e :where [?e :author/name ?name]] db (:db/id (:project/author value))))))))))))))))

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
                                                                                                (dt/db conn) author)) ))]
                    (dom/ul
                      (e/for [content (:chat/messages (ffirst msg))]
                             (dom/li
                               (dom/text (:selected-supplier supplier) "->" (e/server (ffirst (dt/q '[:find ?msg
                                                                                                      :in $ ?id
                                                                                                      :where [?id :msg/message ?msg]] (dt/db conn) (:db/id content))))))))
                    )
                  )
                (dom/input (dom/props {:placeholder "Type a message" :maxlength 100})
                           (dom/on "keydown" (e/fn [e]
                                                   (when (= "Enter" (.-key e))
                                                     (when-some [v (empty->nil (.substr (.. e -target -value) 0 100))]
                                                       (apply (.-log js/console) v)
                                                       (e/server (dt/transact conn {:tx-data [{:msg/id        (next-msg-id (dt/db conn))
                                                                                               :msg/message   v
                                                                                               :msg/timestamp (System/currentTimeMillis)}]})
                                                                 (def msg-db-id (ffirst (dt/q '[:find ?e
                                                                                                :in $ ?msg
                                                                                                :where [?e :msg/message ?msg]] (dt/db conn) v)))
                                                                 (def chat-messages (if (nil? (:chat/messages (first (flatten (dt/q '[:find (pull ?e [*])
                                                                                                                                      :in $ ?chat-subject
                                                                                                                                      :where [?e :chat/subject ?chat-subject]
                                                                                                                                      [?e :chat/project _]] (dt/db conn) title))))
                                                                                              )
                                                                                      []
                                                                                      (into [] (map (fn [v] (:db/id  v)) (into [] (:chat/messages (first (flatten (dt/q '[:find (pull ?e [*])
                                                                                                                                                                         :in $ ?chat-subject
                                                                                                                                                                         :where [?e :chat/subject ?chat-subject]
                                                                                                                                                                         [?e :chat/id _]] (dt/db conn) title)))))))) )
                                                                 (dt/transact conn {:tx-data [{:db/id         (ffirst (dt/q '[:find ?e
                                                                                                                       :in $ ?chat-subject
                                                                                                                       :where [?e :chat/subject ?chat-subject]
                                                                                                                       [?e :chat/id _]] (dt/db conn) title))
                                                                                               :chat/messages (vector-appender chat-messages msg-db-id)}]}))
                                                       (set! (.-value dom/node) ""))))))


                (dom/text title " " author))))))
                ;Mesaj kismi olusturuldu
                ; Mesajlasma ksimi yazilacak
                ; chat/messages kisimi disinda caht tarafi dolduruldu

#_(dt/q '[:find ?msg
          :in $ ?title
          :where [?m :chat/subject ?title]
          [?m :chat/messages ?msg]] (dt/db conn) title)
(e/defn Main []
        (e/client
          (dom/h2 (dom/text "Select Your Supplier Company"))
          (dom/div
            (dom/table
              (dom/th (dom/text "Name"))
              (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                              :where [?e :supplier/id _]] db))]
                     (dom/tr
                       (dom/td (history/link [::supplier (:supplier/name (first value))] (dom/text (:supplier/name (first value)))))))))))


(e/defn Page [[page x]]
        (e/client
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div (dom/props {:class "user-gridsheet-demo"})
                   (let [state (e/watch !state-supplier)]
                     (dom/div (dom/text "Nav:")
                              (history/link [::main] (dom/text "Supplier Company Selection")) (dom/text " ")
                              (history/link [::find-project (:selected-supplier state)] (dom/text "Find Project")) (dom/text " ")
                              (history/link [::message (:selected-supplier state)] (dom/text "Messages")) (dom/text " ")))




                   (case page
                     ::main (history/router 1 (e/server (Main.)))
                     ::supplier (history/router 2 (e/server (SupplierMain. x)))
                     ::project-detail (history/router 2 (e/server (ProjectDetail. x)))
                     ::find-project (history/router 2 (e/server (FindProject. x)))
                     ::send-proposal (history/router 2 (e/server (SendProposal. x)))
                     ::message (history/router 2 (e/server (MainMessage. x)))
                     ::chat (history/router 2 (e/server (ChatPage. x)))
                     (e/client (dom/text "no matching route: " (pr-str page)))))))

(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))

(e/defn SupplierPage []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % read-edn-str) [::main])]

            (history/router (history/HTML5-History.)
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                            (e/server
                              (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                (assert (some? conn))
                                (binding [db (dt/db conn)]
                                  (e/client
                                    (Page. history/route)))))))))
