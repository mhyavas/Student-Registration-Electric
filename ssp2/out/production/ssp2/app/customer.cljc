(ns app.customer
  #?(:cljs (:import [goog.math Long]))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.electric-ui4 :as ui]
    [hyperfiddle.history :as history]
    [hyperfiddle.electric-ui4 :as ui4]
    clojure.string
    clojure.core
    #?(:clj [datomic.client.api :as dt])))

;todo Proposal icin deadline kismi eklenecek
;todo Proje icin author kismi eklenecek
;todo

(e/def conn)
(e/def db)

(def !state-project (atom {:project          {:title       ""
                                              :status      :inactive
                                              :create-date ""
                                              :description ""
                                              :types       []
                                              :customer    ""}
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
#?(:clj (defn project-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :project/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :project/id ?id]] db))))))
#?(:clj (defn type-finder [v db]
                     (into [] (map (fn [s] (into [] (flatten (t/q '[:find ?e
                                                                    :in $ ?name
                                                                    :where [?e :type/name ?name]] db s)))) v))))
#?(:clj (defn customer-finder [name db]
          (ffirst (d/q '[:find ?e
                         :in ? ?name
                         :where [?e :customer/name ?name]] db name))))
#?(:clj (defn ProjectToDatomic [id status date description types customer conn]
          (dt/transact conn {:tx-data [{:project/id id
                                        :project/status status
                                        :project/create_date date
                                        :project/description description
                                        :project/types types
                                        :project/customer customer}]})))
(e/defn Main []
         (e/server
           (binding [conn @(requiring-resolve 'user/datomic-conn)]
             (binding [db (dt/db conn)]
               (e/client
                 (dom/h2 (dom/text "Please Select Your Company"))
                 (dom/text (e/server (quot (System/currentTimeMillis) 1000))) ; Timestamp in seconds.
                 ; todo Change the datomic schema for create_date
                 #_(set-types! (e/server (map (fn [i] {:name i :status :inactive} ) (flatten (dt/q '[:find ?name
                                                                                                     :where [?e :type/id _]
                                                                                                     [?e :type/name ?name]] db)))))

                 #_(dom/text (str (.toLocaleDateString (js/Date.))))
                 (dom/div
                   (dom/table
                     (dom/th (dom/text "Name"))
                     (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                     :where [?e :customer/id _]] db))]
                            (dom/tr
                              (dom/td (history/link [::customer (:customer/name (first value))] (dom/text (:customer/name (first value))))))))))))))

(e/defn CreateProject [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
           (e/client
             (dom/h2 (dom/text "Creating a Project for " name))
             (dom/div
               (let [state (e/watch !state-project)]
                 (let [project (:project state)]
                   (dom/text state)
                   (dom/div
                     (dom/span (dom/text "Title: "))
                     (ui4/input (:title project) (e/fn [v] (set-project-title! v)))
                     (dom/span (dom/text "Description: "))
                     (ui4/input (:description project) (e/fn [v] (set-project-description! v)))

                     #_(dom/div
                         (dom/text project)
                         (dom/span (dom/text "Types: "))
                         (e/for [value (e/server (dt/q '[:find ?name
                                                         :where [?e :type/name ?name]] (dt/db conn)))]
                                (dom/label
                                  (dom/input (dom/props {:type  "checkbox"
                                                         :name  (first value)
                                                         :value "true"})
                                             (dom/on "change" (e/fn [v]
                                                                #_(apply (.-log js/console) (str (.-name dom/node) v))
                                                                (if (and (.-checked dom/node) (not (some (partial = (str (.-name dom/node))) (:types project))))
                                                                  #_(swap! data update :nums conj {:first 1 :second 2})
                                                                  (swap! !state-project update-in [:project :types] conj (str (.-name dom/node)))
                                                                  (if (some (partial = (str (.-name dom/node))) (:types project))
                                                                    (swap! !state-project update-in [:project :types] (fn [types] (vec (remove #(= (str (.-name dom/node)) %) types))))
                                                                    nil)))))

                                  (dom/text (first value)))))
                     #_(dom/div
                         #_(ui4/button (e/fn []
                                             (e/server (ProjectToDatomic (project-next-id (dt/db conn))
                                                                         :inactive
                                                                         (quot (System/currentTimeMillis) 1000)
                                                                         (:description project)
                                                                         (type-finder (:types project) (dt/db conn))
                                                                         (customer-finder name (dt/db conn))
                                                                         conn)))


                                       (dom/text "Create Project")))))))))))





(e/defn ProjectDetail [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
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
                   (dom/td (dom/text (:project/create_date name)))
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
                (dom/tr
                  (e/for [value (e/server (flatten (dt/q '[:find (pull ?m [*])
                                                           :in $ ?title
                                                           :where [?e :project/title ?title]
                                                           [?m :proposal/project ?e]] db (:project/title name))))]
                         (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                     :in $ ?id
                                                                     :where [?id :supplier/name ?name]] db (:db/id (:proposal/supplier value)))))))
                         (dom/td (dom/text (:proposal/price value)))
                         (dom/td (dom/text (:proposal/timestamp value)))
                         (dom/td (ui4/button (e/fn []
                                                   (e/server (dt/transact conn {:tx-data [{:db/id (:db/id name)
                                                                                           :project/status :active
                                                                                           :project/tender_winner [(:proposal/supplier value)]}]}))) (dom/text "Select")))))))))))








(e/defn CustomerMain [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
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
                         (dom/td (dom/text (:project/status (first value))))))))))))


(e/defn Page [[page x]]
        (e/client
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div (dom/props {:class "user-gridsheet-demo"})
                   (let [state (e/watch !state-project)]
                     (dom/div (dom/text "Nav:")
                              (history/link [::main] (dom/text "Company Selection")) (dom/text " ")
                              (history/link [::customer (:selected-company state)] (dom/text "Customer Main")) (dom/text " ")
                              (history/link [::create-project (:selected-company state)] (dom/text "Create Project")) (dom/text " ")))



                   (case page
                     ::main (history/router 1 (e/server (Main.)))
                     ::customer (history/router 2 (e/server (CustomerMain. x)))
                     ::create-project (history/router 2 (e/server (CreateProject. x)))
                     ::project-detail (history/router 2 (e/server (ProjectDetail. x)))
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
                              (binding [conn @(requiring-resolve 'user/datomic-conn)] (assert (some? conn))
                                (binding [db (dt/db conn)]
                                 (e/client
                                   (Page. history/route)))))))))
