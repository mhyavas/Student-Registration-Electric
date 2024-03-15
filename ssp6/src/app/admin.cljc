(ns app.admin
  #?(:cljs (:require-macros [app.customer :refer [with-reagent]]))
  (:require clojure.edn
            contrib.ednish
            [hyperfiddle.electric-ui4 :as ui4]
            #?(:clj [contrib.datomic-contrib :as dx])
            [contrib.gridsheet :as gridsheet :refer [Explorer]]
            [hyperfiddle.electric :as e]
            [contrib.str :refer [empty->nil]]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            [missionary.core :as m]
            #?(:clj [datomic.client.api :as dt])
            [clojure.string :as str]
            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs ["react-data-table-component$default" :as DataTable])
            #?(:cljs ["hamburger-react" :as HM])
            #?(:cljs ["reactive-button" :as ReactiveButton])))

(e/def conn)
(e/def db)

(def !admin-state (atom {:login-credentials {:user-name "" :password "" :login-message ""}
                         :table-clickers {:supplier {:company "" :click false}
                                          :customer {:company "" :click false}
                                          :proposal {:company "" :project-title "" :click false}
                                          :project {:company "" :title "" :click false}}
                         :menu false
                         :project-company ""
                         :proposal-company ""
                         :admin-login false
                         :buttons {:edit false
                                   :delete false}}))


;memberlarin oldugu CRUD sayfasi
;Projelerin oldugu crud sayfasi
;Sirketlerin oldugu CRUD sayfasi


#?(:cljs (defn supplier-table [data]
           [:> DataTable {:allowRowEvents true
                          :onRowClicked (fn [v] (swap! !admin-state assoc-in [:table-clickers :supplier :company] (.-company v))
                                          (swap! !admin-state assoc-in [:table-clickers :supplier :click] true))
                          :columns [{:name :Company :selector (fn [row] (.-company row))}
                                    {:name :User :selector (fn [row] (.-user row))}]
                          :data data}]))
#?(:clj (defn supplier-data [db]
          (vec (map (fn [[company user]]
                      {:company company
                       :user user})
                    (vec (->>
                           (dt/q
                             '[:find ?company (count ?a)
                               :where
                               [?e :supplier/name ?company]
                               [?a :author/company ?e]]
                             db)))))))

#?(:cljs (defn customer-table [data]
           #_[:link {:rel "stylesheet" :href "react-day-picker/dist/style.css"}]
           [:> DataTable {:allowRowEvents true
                          :onRowClicked (fn [v] (swap! !admin-state assoc-in [:table-clickers :customer :company] (.-company v))
                                          (swap! !admin-state assoc-in [:table-clickers :customer :click] true))
                          :columns [{:name :Company :sortable true :selector (fn [row] (.-company row))}
                                    {:name :User :sortable true :selector (fn [row] (.-user row))}]
                          :data data}]))

#?(:clj (defn customer-data [db]
          (vec (map (fn [[company user]]
                      {:company company
                       :user user})
                    (vec (->>
                           (dt/q
                             '[:find ?company (count ?a)
                               :where
                               [?e :customer/name ?company]
                               [?a :author/company ?e]]
                             db)))))))

#?(:cljs (defn BMenu []
           [:> HM/Spin {:direction "left" :onToggle (fn [v] (if v (swap! !admin-state assoc-in [:menu] true)
                                                                  (swap! !admin-state assoc-in [:menu] false)))}]))
(e/defn SelectCompany []
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !admin-state)]
          (if (:menu state)
            (dom/ul
              (dom/li (history/link [:app.main/admin-projects] (dom/text "Projects")))
              (dom/li (history/link [:app.main/admin-proposals] (dom/text "Proposals")))))
          (with-reagent BMenu)
          (cond
            (:click (:customer (:table-clickers state))) (history/navigate! history/!history [:app.main/customer-admin (:company (:customer (:table-clickers state)))])
            (:click (:supplier (:table-clickers state))) (history/navigate! history/!history [:app.main/supplier-admin (:company (:supplier (:table-clickers state)))]))
          (dom/div
            (dom/h3 (dom/text "Suppliers"))
            (with-reagent supplier-table (clj->js (e/server (supplier-data (dt/db conn))))))
          (dom/div
            (dom/h3 (dom/text "Customers"))
            (with-reagent customer-table (clj->js (e/server (customer-data (dt/db conn)))))))))))



(e/defn AdminPage []
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !admin-state)]
          (let [login (:login-credentials state)]
            (if (:admin-login state)
              (history/navigate! history/!history [:app.main/admin-companies])
              (dom/div
                (dom/h2 (dom/text "User Login:"))
                (dom/text (:login-message login))
                (dom/div
                  (dom/span (dom/text "Name:"))
                  (ui4/input (:user-name login) (e/fn [v] (swap! !admin-state assoc-in [:login-credentials :user-name] v)))
                  (dom/span (dom/text "Password:"))
                  (ui4/input (:password login) (e/fn [v] (swap! !admin-state assoc-in [:login-credentials :password] v)))
                  (ui4/button (e/fn []
                                    (e/server
                                      (if (empty? (dt/q '[:find ?e
                                                          :in $ ?name
                                                          :where [?e :admin/name ?name]] (dt/db conn) (:user-name login)))
                                        (e/client (swap! !admin-state assoc-in [:login-credentials :login-message] "Wrong username!"))
                                        (e/client (swap! !admin-state assoc-in [:login-credentials :login-message] "")
                                                  (e/server
                                                    (if (= (:password login) (ffirst (dt/q '[:find ?password
                                                                                             :in $ ?user
                                                                                             :where [?e :admin/name ?user]
                                                                                             [?e :admin/password ?password]] (dt/db conn) (:user-name login))))
                                                      (e/client
                                                        (swap! !admin-state assoc-in [:admin-login] true)
                                                        (history/navigate! history/!history [:app.main/admin-companies])))))))) (dom/text "Login")))))))))))
#?(:clj (defn project-data [db company]
          (vec (map (fn [[title status date author description type]]
                      {:title title
                       :status status
                       :create_date (if (and
                                          (and
                                            (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. date)))
                                            (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. date))))
                                          (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. date))))
                                      (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. date))
                                      (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. date)))
                       :author author
                       :description description
                       :type type #_(into [] (flatten (map (fn [mt] (flatten (dt/q '[:find ?name
                                                                                     :in $ ?e
                                                                                     :where [?e :type/name ?name]] db (:db/id mt)))) type)))})
                    (vec (->>
                           (dt/q
                             '[:find ?title ?status ?date ?author ?description ?type
                               :in $ ?company
                               :where
                               [?e :customer/name ?company]
                               [?p :project/customer ?e]
                               [?p :project/title ?title]
                               [?p :project/status ?status]
                               [?p :project/create_date ?date]
                               [?p :project/description ?description]
                               [?p :project/author ?a]
                               [?a :author/name ?author]
                               [?p :project/types ?type]]
                             db company)))))))

#?(:cljs (defn project-table [data]
           [:> DataTable {:allowRowEvents       true
                          :onRowClicked (fn [v] (swap! !admin-state assoc-in [:table-clickers :project :title] (.-title v))
                                                (swap! !admin-state assoc-in [:table-clickers :project :click] true))

                          :columns              [{:name :Title :sortable true :selector (fn [row] (.-title row))}
                                                 {:name :Status :sortable true :selector (fn [row] (.-status row))}
                                                 {:name :Create_Date :sortable true :selector (fn [row] (.-create_date row))}
                                                 {:name :Description :selector (fn [row] (.-description row))}
                                                 {:name :Type :selector (fn [row] (str/split (.-type row) #"(?=[A-Z])"))}]
                          :data                 data}]))

(e/defn Projects []
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (binding [db (dt/db conn)]
        (e/client
          (let [state (e/watch !admin-state)]
            (if (:click (:project (:table-clickers state)))
              (history/navigate! history/!history [:app.main/admin-edit-project (:project (:table-clickers state))]))
            (dom/div
              (dom/span (dom/text "Company: "))
              (dom/select
                (e/for [value (e/server (dt/q '[:find ?name :where [?e :customer/name ?name]] db))]
                       (dom/option (dom/text (first value))))
                (dom/on "change" (e/fn [v] (swap! !admin-state assoc-in [:project-company] (.-value dom/node))
                                       (swap! !admin-state assoc-in [:table-clickers :project :company] (.-value dom/node))))))
            (with-reagent project-table (clj->js (e/server (project-data db (:project-company state)))))))))))

#?(:clj (defn proposal-data [db company]
          (vec (map (fn [[title status timestamp price]]
                      {:title title
                       :status status
                       :create_date (if (and
                                          (and
                                            (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. timestamp)))
                                            (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. timestamp))))
                                          (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. timestamp))))
                                      (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. timestamp))
                                      (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. timestamp)))
                       :price price})
                    (vec (->>
                           (dt/q
                             '[:find ?title ?status ?timestamp ?price
                               :in $ ?company
                               :where
                               [?e :supplier/name ?company]
                               [?p :proposal/supplier ?e]
                               [?p :proposal/project ?project]
                               [?project :project/title ?title]
                               [?project :project/status ?status]
                               [?p :proposal/timestamp ?timestamp]
                               [?p :proposal/price ?price]]
                             db company)))))))
#?(:cljs (defn proposal-table [data]
           [:> DataTable {:allowRowEvents       true
                          :pagination true
                          :onRowClicked (fn [v] (swap! !admin-state assoc-in [:table-clickers :proposal :project-title] (.-title v))
                                          (swap! !admin-state assoc-in [:table-clickers :proposal :click] true))
                          :columns              [{:name :Title :sortable true :selector (fn [row] (.-title row))}
                                                 {:name :Status :selector (fn [row] (.-status row))}
                                                 {:name :Create_Date :sortable true :selector (fn [row] (.-create_date row))}
                                                 {:name :Price :sortable true :selector (fn [row] (.-price row))}]
                          :data                 data}]))

(e/defn Proposals []
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (binding [db (dt/db conn)]
        (e/client
          (swap! !admin-state assoc-in [:buttons :edit] false)
          (let [state (e/watch !admin-state)]
            (if (:click (:proposal (:table-clickers state)))
              (history/navigate! history/!history [:app.main/admin-edit-proposal (:proposal (:table-clickers state))]))
            (dom/div
              (dom/span (dom/text "Company: "))
              (dom/select
                (e/for [value (e/server (dt/q '[:find ?name :where [?e :supplier/name ?name]] db))]
                       (dom/option (dom/text (first value))))
                (dom/on "change" (e/fn [v] (swap! !admin-state assoc-in [:proposal-company] (.-value dom/node))
                                           (swap! !admin-state assoc-in [:table-clickers :proposal :company] (.-value dom/node))))))
            (with-reagent proposal-table (clj->js (e/server (proposal-data db (:proposal-company state)))))))))))

#?(:cljs (defn reactive-btn [action]
           (case action
             "Delete" [:> ReactiveButton {:color "red" :idleText "Delete" :onClick (fn [] (swap! !admin-state assoc-in [:buttons :delete] true))}]
             "Edit"   [:> ReactiveButton {:color "yellow" :idleText "Edit" :onClick (fn [] (swap! !admin-state assoc-in [:buttons :edit] true))}])))
#?(:clj (defn proposal-detail [db company title]
          (vec (map (fn [[title status timestamp price]]
                      {:title       title
                       :status      status
                       :create_date (if (and
                                          (and
                                            (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. timestamp)))
                                            (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. timestamp))))
                                          (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. timestamp))))
                                      (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. timestamp))
                                      (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. timestamp)))
                       :price       price})
                    (vec (->>
                           (dt/q
                             '[:find ?title ?status ?timestamp ?price
                               :in $ ?company ?title
                               :where
                               [?e :supplier/name ?company]
                               [?p :proposal/supplier ?e]
                               [?p :proposal/project ?project]
                               [?project :project/title ?title]
                               [?project :project/status ?status]
                               [?p :proposal/timestamp ?timestamp]
                               [?p :proposal/price ?price]]
                             db company title)))))))
#?(:cljs (defn proposal-detail-table [data]
           [:> DataTable {:allowRowEvents true
                           :pagination true
                          :columns              [{:name :Title :selector (fn [row] (.-title row))}
                                                 {:name :Status :selector (fn [row] (.-status row))}
                                                 {:name :Create_Date :selector (fn [row] (.-create_date row))}
                                                 {:name :Price :selector (fn [row] (.-price row))}]
                          :data                 data}]))

(e/defn EditProposal [m]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [edit-state (atom {:price 0 :db-id 0})]
          (let [edit (e/watch edit-state)]
             (let [state (e/watch !admin-state)]
               (if (:edit (:buttons state))
                 (do
                   (e/server (dt/transact conn {:tx-data [{:db/id          (:db-id edit)
                                                           :proposal/price (float (:price edit))}]}))
                   (history/navigate! history/!history [:app.main/admin-proposals])))

               (swap! !admin-state assoc-in [:table-clickers :proposal :click] false)
               (let [value (e/server (ffirst (dt/q '[:find (pull ?e [*])
                                                     :in $ ?company ?title
                                                     :where [?project :project/title ?title]
                                                     [?supplier :supplier/name ?company]
                                                     [?e :proposal/supplier ?supplier]
                                                     [?e :proposal/project ?project]] (dt/db conn) (:company m) (:project-title m))))]
                 (with-reagent proposal-detail-table (clj->js (e/server (proposal-detail (dt/db conn) (:company m) (:project-title m)))))
                 (dom/div
                   (dom/span (dom/text "Price: "))
                   (dom/input (dom/props {:placeholder (:proposal/price value) :type "number"})
                              (dom/on "change" (e/fn [v] (swap! edit-state assoc-in [:price] (parse-double (.-value dom/node))
                                                                (apply (.-log js/console) [v])
                                                                (swap! edit-state assoc-in [:db-id] (:db/id value))))))))

               (dom/ul
                 (dom/li (with-reagent reactive-btn "Delete"))
                 (dom/li (with-reagent reactive-btn "Edit"))))))))))


#?(:cljs (defn project-detail-table [data]
           [:> DataTable {:allowRowEvents true
                          :onRowClicked (fn [v] (swap! !state-project assoc-in [:clicker :project-detail :types] (js->clj (.-types v)))
                                          (swap! !state-project assoc-in [:clicker :project-detail :click] true))
                          :columns [{:name :Title :sortable true :selector (fn [row] (.-title row))}
                                    {:name :Status :sortable true :selector (fn [row] (.-status row))}
                                    {:name :Create_Date :sortable true :selector (fn [row] (.-create_date row))}
                                    {:name :Description :selector (fn [row] (.-description row))}
                                    {:name :Types :selector (fn [row] (str/split (.-types row) #"(?=[A-Z])"))}] :data data}]))

(e/defn EditProject [m]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !admin-state)]
          (swap! !admin-state assoc-in [:table-clickers :project :click] false)
          (let [edit-state (atom {:title "" :status :inactive :description "" :types [] :db-id 0})]
            (let [edit (e/watch edit-state)]
              ((if (:edit (:buttons state))
                 (do (e/server (dt/transact conn {:tx-data []})))))

              (swap! edit-state assoc {:title (:project/title m) :status (:project/status m) :description (:project/description m) :types []})
              (let [value (e/server (ffirst (dt/q '[:find (pull ?p [*])
                                                    :in $ ?company ?title
                                                    :where [?c :customer/name ?company]
                                                    [?p :project/customer ?c]
                                                    [?p :project/title ?title]] (dt/db conn) (:company m) (:title m))))]
                (with-reagent project-detail-table (e/server (app.customer/project-detail-data (dt/db conn) value)))
                (swap! edit-state assoc-in [:types] (e/server (map (fn [m] (ffirst (dt/q '[:find ?name
                                                                                           :in $ ?id
                                                                                           :where [?id :type/name ?name]] (dt/db conn) (:db/id m)))) (:project/types value))))
                (dom/div
                  (dom/span (dom/text "Title: "))
                  (dom/input (dom/props {:placeholder (:project/title value)})
                             (dom/on "change" (e/fn [v] (swap! edit-state assoc-in [:title] (.-value dom/node)
                                                               (swap! edit-state assoc-in [:db-id] (:db/id value)))))))
                (dom/div
                  (dom/span (dom/text "Description: "))
                  (dom/input (dom/props {:placeholder (:project/description value) :type "text" :style {:width "200px" :word-wrap "break-word" :display "block" :text-overflow "hidden" :box-sizing "content-box" :overflow "visible" :white-space "normal"}}) ;}})
                             (dom/on "change" (e/fn [v] (swap! edit-state assoc-in [:description] (.-value dom/node))))))

                (dom/div
                  (dom/span (dom/text "Types: "))
                  (e/for [value (e/server (dt/q '[:find ?name
                                                  :where [?e :type/name ?name]] (dt/db conn)))]
                         (dom/label
                           (dom/input (dom/props {:type  "checkbox"
                                                  :name  (first value)
                                                  :value "true"})
                                      (dom/on "change" (e/fn [v]
                                                             (if (and (.-checked dom/node) (not (some (partial = (str (.-name dom/node))) (:types edit))))
                                                               #_(swap! data update :nums conj {:first 1 :second 2})
                                                               (swap! !state-project update-in [:project :types] conj (str (.-name dom/node)))
                                                               (if (some (partial = (str (.-name dom/node))) (:types project))
                                                                 (swap! !state-project update-in [:project :types] (fn [types] (vec (remove #(= (str (.-name dom/node)) %) types))))
                                                                 nil)))))


;todo checkbox kisminda hata var. Guncel typeler checked olacak. Sonrasinda edit-state guncellenecek.
                           ;todo bookmarklanmis if statment true tarafina transact fonksiyonu yazilacak


                           (dom/text (first value)))))

                (dom/ul
                  (dom/li (with-reagent reactive-btn "Delete"))
                  (dom/li (with-reagent reactive-btn "Edit")))))))))))





