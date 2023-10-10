(ns app.customer
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

(def !state-project (atom {:project          {:title       ""
                                              :status      :inactive
                                              :create-date ""
                                              :description ""
                                              :types       []
                                              :customer    ""
                                              :author ""}
                           :author {:name ""
                                    :company ""}
                           :selected-company ""}))
(defn set-company! [name]
  (swap! !state-project assoc-in [:selected-company] name))


(defn set-project-title! [title]
  (swap! !state-project assoc-in [:project :title] title))
(defn set-project-description! [description]
  (swap! !state-project assoc-in [:project :description] description))

(defn set-project-types! [types]
  (swap! !state-project assoc-in [:project :types] types))

(defn set-types! [types]
  (swap! !state-project assoc-in [:types] types))

(defn set-author-name! [name]
  (swap! !state-project assoc-in [:author :name] name))

#?(:clj (defn project-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :project/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :project/id ?id]] db))))))
#?(:clj (defn next-author-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :author/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :author/id ?id]] db))))))

#?(:clj (defn type-finder [v db]
          (into [] (flatten (map (fn [s] (into [] (flatten (dt/q '[:find ?e
                                                                   :in $ ?name :where [?e :type/name ?name]] db s)))) v)))))
#?(:clj (defn customer-finder [name db]
          (ffirst (dt/q '[:find ?e
                          :in $ ?name
                          :where [?e :customer/name ?name]] db name))))
#?(:clj (defn ProjectToDatomic [id title status date description types customer author conn]
          (dt/transact conn {:tx-data [{:project/id id
                                        :project/title title
                                        :project/status status
                                        :project/create_date date
                                        :project/description description
                                        :project/types types
                                        :project/customer customer
                                        :project/author author}]})))

#?(:clj (defn next-msg-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :msg/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :msg/id ?id]] db))))))


(e/defn CreateAuthor [name]
        (e/client
          (dom/div
            (let [state (e/watch !state-project)]
              (let [auth (:author state)]
               (dom/div
                 (dom/span (dom/text "Author Name:"))
                 (ui4/input (:name auth) (e/fn [v] (set-author-name! v))))
               (dom/div
                 (ui4/button (e/fn []
                                   (e/server (dt/transact conn {:tx-data [{:author/id (next-author-id db)
                                                                           :author/name (:name auth)
                                                                           :author/customer (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :customer/name ?name]] db name))}]})))
                             (dom/text "Create Author"))))))))



(e/defn ProjectDetail [name]
        (e/client
          (dom/table (dom/props {:border "1px" "solid" "black"})
                     (dom/th (dom/text "Title"))
                     (dom/th (dom/text "Status"))
                     (dom/th (dom/text "Create Date"))
                     (dom/th (dom/text "Description"))
                     (dom/th (dom/text "Types"))
                     (dom/th (dom/text "Winner"))
                     (dom/tr
                       (dom/td (dom/text (:project/title name)))
                       (dom/td (dom/text (:project/status name)))
                       (dom/td (dom/text (e/server (if (and
                                                         (and
                                                           (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. (:project/create_date name))))
                                                           (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. (:project/create_date name)))))
                                                         (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. (:project/create_date name)))))
                                                     (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. (:project/create_date name)))
                                                     (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:project/create_date name))))) #_(:project/create_date name)))
                       (dom/td (dom/text (:project/description name)))
                       (dom/td (dom/text (e/server (flatten (map (fn [m] (flatten (dt/q '[:find ?name
                                                                                          :in $ ?e
                                                                                          :where [?e :type/name ?name]] db (:db/id m)))) (:project/types name))))))
                       (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                   :in $ ?e
                                                                   :where [?e :supplier/name ?name]] db (:db/id (first (:project/tender_winner name))))))))))
          (dom/h3 (dom/text "Proposals for this project"))
          (dom/table (dom/props {:border "1px" "solid" "black"})
                     (dom/th (dom/text "Supplier"))
                     (dom/th (dom/text "Price ($)"))
                     (dom/th (dom/text "Timestamp"))
                     (dom/th (dom/text "Select"))
                     (e/for [value (e/server (flatten (dt/q '[:find (pull ?m [*])
                                                              :in $ ?title
                                                              :where [?e :project/title ?title]
                                                                     [?m :proposal/project ?e]] db (:project/title name))))]
                            (dom/tr
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                          :in $ ?id
                                                                          :where [?id :supplier/name ?name]] db (:db/id (:proposal/supplier value)))))))
                             (dom/td (dom/text (:proposal/price value)))
                             (dom/td (dom/text (e/server (if (and
                                                               (and
                                                                 (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. (:proposal/timestamp value))))
                                                                 (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. (:proposal/timestamp value)))))
                                                               (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. (:proposal/timestamp value)))))
                                                           (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. (:proposal/timestamp value)))
                                                           (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:proposal/timestamp value)))))))
                             (dom/td (ui4/button (e/fn [e]
                                                       (e/server (dt/transact conn {:tx-data [{:db/id                 (:db/id name)
                                                                                               :project/status        :active
                                                                                               :project/tender_winner [(:proposal/supplier value)]}]}))) (dom/text "Select"))))))))
(e/defn CreateProject [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (dom/h2 (dom/text "Creating a Project for " name))
              (dom/div
                (let [state (e/watch !state-project)]
                  (let [project (:project state)]
                    (dom/text project)
                    (dom/div
                      (dom/span (dom/text "Title: "))
                      (ui4/input (:title project) (e/fn [v] (set-project-title! v)))
                      (dom/span (dom/text "Description: "))
                      (ui4/input (:description project) (e/fn [v] (set-project-description! v)))

                      (dom/div
                        (dom/span (dom/text "Types: "))
                        (e/for [value (e/server (dt/q '[:find ?name
                                                        :where [?e :type/name ?name]] (dt/db conn)))]
                               (dom/label
                                 (dom/input (dom/props {:type  "checkbox"
                                                        :name  (first value)
                                                        :value "true"})
                                            (dom/on "change" (e/fn [v]
                                                                   (if (and (.-checked dom/node) (not (some (partial = (str (.-name dom/node))) (:types project))))
                                                                     #_(swap! data update :nums conj {:first 1 :second 2})
                                                                     (swap! !state-project update-in [:project :types] conj (str (.-name dom/node)))
                                                                     (if (some (partial = (str (.-name dom/node))) (:types project))
                                                                       (swap! !state-project update-in [:project :types] (fn [types] (vec (remove #(= (str (.-name dom/node)) %) types))))
                                                                       nil)))))





                                 (dom/text (first value)))))
                      (dom/div
                        (dom/span (dom/text "Author: "))
                        (dom/select
                          (e/for [value (e/server (flatten (dt/q '[:find ?name
                                                                   :in $ ?company-name
                                                                   :where [?c :customer/name ?company-name]
                                                                   [?e :author/customer ?c]
                                                                   [?e :author/name ?name]] db name)))]
                                 (dom/option (dom/props {:value value})
                                             (dom/text value)))
                          (dom/on "change" (e/fn [e] (swap! !state-project assoc-in [:project :author] (.-value dom/node))))))
                      (dom/div
                        (dom/text (e/server (customer-finder name (dt/db conn))))
                        (ui4/button (e/fn []
                                          (e/server (ProjectToDatomic (project-next-id (dt/db conn))
                                                                      (:title project)
                                                                      :inactive
                                                                      (System/currentTimeMillis)
                                                                      (:description project)
                                                                      (type-finder (:types project) (dt/db conn))
                                                                      (customer-finder name (dt/db conn))
                                                                      (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :author/name ?name]] (dt/db conn) (:author project)))
                                                                      conn)))


                                    (dom/text "Create Project")))))))))))



(e/defn CustomerMain [name]
        (e/client
          (set-company! name)
          (dom/h2 (dom/text "Main Page of " name))
          (dom/h3 (dom/text "Projects"))
          (dom/table (dom/props {:border "1px" "solid" "black"})
                (dom/td (dom/text "Project Name"))
                (dom/td (dom/text "Status"))
                (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                     :in $ ?name
                                                     :where [?e :project/customer ?name]] db (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :customer/name ?name]] db name))))]
                       (dom/tr
                          (dom/td (history/link [::project-detail (first value)] (dom/text (:project/title (first value)))))
                          (dom/td (dom/text (:project/status (first value)))))))))

(e/defn ChatPage [[title customer]]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (if (empty? (e/server (dt/q '[:find (pull ?e [*])
                                              :in $ ?title ?customer
                                              :where [?e :chat/subject ?title]
                                              [?e :chat/from ?customer]] (dt/db conn)
                                            title
                                            (e/server
                                              (ffirst
                                                (dt/q '[:find ?e
                                                        :in $ ?customer
                                                        :where [?e :customer/name ?customer]] (dt/db conn)
                                                      customer))))))
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
                                                                                                  [?p :project/tender_winner ?supplier-id]] db title)))
                                                          :chat/subject title}]}))
                  nil)
                (dom/div
                  (let [msg (e/server (dt/q '[:find (pull ?m [*])
                                              :in $ ?title ;?customer
                                              :where [?m :chat/subject ?title]
                                              #_[?m :chat/from ?customer]] db title #_(ffirst (dt/q '[:find ?e :in $ ?customer :where [?e :customer/name ?customer]]
                                                                                                    (dt/db conn) customer))))]
                    (dom/text msg))))))))

; todo Yukaridaki hata author yerine :chat/from author yerine customer gonderilmis. Bundan dolayi hata geliyor. Customer yerine author olarak degistir
(e/defn MainMessage [info]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (let [db (dt/db conn)]
              (e/client
                (dom/table
                  (dom/th (dom/text "Project"))
                  (dom/th (dom/text "Supplier"))
                  (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                  :in $ ?name
                                                  :where [?e :project/customer ?name]
                                                         [?e :project/status :active]] db (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :customer/name ?name]] db info))))]
                         (dom/tr
                           (dom/td (dom/text (:project/title (first value))))
                           (dom/td (history/link [::chat [(:project/title (first value)) (e/server (ffirst (dt/q '[:find ?customer-name
                                                                                                                   :in $ ?customer-id
                                                                                                                   :where [?customer-id :customer/name ?customer-name]] db (:db/id (first (:project/customer (first value)))))))]] (dom/text (e/server (ffirst (dt/q '[:find ?name :in $ ?id :where [?id :supplier/name ?name]] db (:db/id (first (:project/tender_winner (first value))))))))))))))))))



(e/defn Main []
        (e/client
          (dom/h2 (dom/text "Please Select Your Company"))
          (dom/div
            (dom/table
              (dom/th (dom/text "Name"))
              (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                              :where [?e :customer/id _]] db))]
                     (dom/tr
                       (dom/td (history/link [::customer (:customer/name (first value))] (dom/text (:customer/name (first value)))))))))))
(e/defn Page [[page x]]
        (e/client
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div (dom/props {:class "user-gridsheet-demo"})
                   (let [state (e/watch !state-project)]
                     (dom/div (dom/text "Nav:")
                              (history/link [::main] (dom/text "Company Selection")) (dom/text " ")
                              (history/link [::customer (:selected-company state)] (dom/text "Customer Main")) (dom/text " ")
                              (history/link [::create-project (:selected-company state)] (dom/text "Create Project")) (dom/text " ")
                              (history/link [::create-author (:selected-company state)] (dom/text "Create Author")) (dom/text " ")
                              (history/link [::message (:selected-company state)] (dom/text "Messages")) (dom/text " ")))



                   (case page
                     ::main (history/router 1 (e/server (Main.)))
                     ::customer (history/router 2 (e/server (CustomerMain. x)))
                     ::create-project (history/router 2 (e/server (CreateProject. x)))
                     ::project-detail (history/router 2 (e/server (ProjectDetail. x)))
                     ::create-author (history/router 2 (e/server (CreateAuthor. x)))
                     ::message (history/router 2 (e/server (MainMessage. x)))
                     ::chat (history/router 2 (e/server (ChatPage. x)))
                     (e/client (dom/text "no matching route: " (pr-str page)))))))
(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))

(e/defn CustomerPage []
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
