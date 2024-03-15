(ns app.supplier
  #?(:cljs (:require-macros [app.main :refer [with-reagent]]))
  (:require
    clojure.edn
    contrib.ednish
    [hyperfiddle.electric-ui4 :as ui4]
    [hyperfiddle.electric :as e]
    [contrib.str :refer [empty->nil]]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    #?(:clj [datomic.client.api :as dt])
    #?(:cljs ["react" :as react])
    #?(:cljs [reagent.core :as r])
    #?(:cljs [reagent.dom :as rdom])
    #?(:cljs ["react-dom/client" :as ReactDom])
    #?(:cljs ["react-data-table-component$default" :as DataTable])
    #?(:cljs ["reactive-button" :as ReactiveButton])))



(e/def conn)
(e/def db)

(def !state-supplier (atom {:selected-supplier ""
                            :types []
                            :proposal {:supplier ""
                                       :price ""
                                       :project ""
                                       :timestamp 0}
                            :author {:name ""
                                     :company ""
                                     :password ""}
                            :selected-company ""
                            :selected-user ""
                            :admin false
                            :login-credentials {:user-name "" :password "" :login-message ""}
                            :msg/reply 0
                            :msg/author ""
                            :clicker {:proposal {:title "" :click false}
                                      :img {:name "" :click false}}
                            :admin-user-selection []
                            :buttons {:delete false
                                      :edit false
                                      :create false
                                      :message ""}
                            :admin-company-detail {:click false :company ""}
                            :customer-company-selection {:click false :company ""}
                            :customer-like {:click false :review-id 0 :like 0 :dislike 0}
                            :new-review {:click false :review ""}}))


(e/defn CompanySelect []
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !state-supplier)]
          (if (< 0 (count (:selected-company state)))
            (dom/div
              (do (history/navigate! history/!history [:app.main/supplier-user-select (:selected-company state)])))
            (dom/div
              (dom/h2 (dom/text "Select Your Supplier Company"))
              (dom/table
                (dom/th (dom/text "Name"))
                (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                :where [?e :supplier/id _]] (dt/db conn)))]
                       (dom/tr
                         (dom/td (history/link [:app.main/supplier-user-select (:supplier/name (first value))] (dom/text (:supplier/name (first value)))))))))))))))

(defn set-username! [name]
  (swap! !state-supplier assoc-in [:login-credentials :user-name] name))

(defn set-password! [password]
  (swap! !state-supplier assoc-in [:login-credentials :password] password))
(e/defn UserSelect [company]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !state-supplier)]
          (let [login (:login-credentials state)]
            (swap! !state-supplier assoc-in [:selected-company] company)
            (if (< 0 (count (:selected-user state)))
              (dom/div
                (do (history/navigate! history/!history [:app.main/supplier-proposals (:selected-company state)])))
              (dom/div
                (dom/h2 (dom/text "User Login:"))
                (dom/text (:login-message login))
                (dom/div
                  (dom/span (dom/text "Name:"))
                  (ui4/input (:user-name login)  (e/fn [v] (set-username! v)))
                  (dom/span (dom/text "Password:"))
                  (ui4/input  (:password login) (e/fn [v] (set-password! v)))
                  (ui4/button (e/fn []
                                    (e/server
                                      (if (empty? (dt/q '[:find ?e
                                                          :in $ ?name
                                                          :where [?e :author/name ?name]] (dt/db conn) (:user-name login)))
                                        (e/client (swap! !state-supplier assoc-in [:login-credentials :login-message] "Wrong username!"))
                                        (e/client (swap! !state-supplier assoc-in [:login-credentials :login-message] "")
                                                  (e/server
                                                    (if (= (:password login) (ffirst (dt/q '[:find ?password
                                                                                             :in $ ?user
                                                                                             :where [?e :password/user ?user]
                                                                                             [?e :password/password ?password]] (dt/db conn) (ffirst (dt/q '[:find ?e
                                                                                                                                                             :in $ ?name ?company
                                                                                                                                                             :where [?e :author/name ?name]
                                                                                                                                                             [?e :author/company ?company]] (dt/db conn) (:user-name login) (ffirst (dt/q '[:find ?e :in $ ?company :where [?e :supplier/name ?company]] (dt/db conn) company)))))))
                                                      (e/client
                                                        (e/server
                                                          (if (ffirst (dt/q '[:find ?admin
                                                                              :in $ ?user
                                                                              :where [?e :author/name ?user]
                                                                                     [?e :author/admin ?admin]] (dt/db conn) (:user-name login)))
                                                            (e/client (swap! !state-supplier assoc-in [:admin] true))))
                                                        (history/navigate! history/!history [:app.main/supplier-proposals (:selected-company state)])
                                                        (swap! !state-supplier assoc-in [:selected-user] (:user-name login)))
                                                      (e/client (swap! !state-supplier assoc-in [:login-credentials :login-message] "Wrong password!")))))))) (dom/text "Login")))))))))))


#?(:clj (defn proposal-data [db company]
          (vec (map (fn [[id title price timestamp customer]]
                      {:id        id
                       :title     title
                       :price price
                       :timestamp (if (and
                                        (and
                                          (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. timestamp)))
                                          (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. timestamp))))
                                        (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. timestamp))))
                                    (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. timestamp))
                                    (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. timestamp)))
                       :customer customer})
                    (vec (->>
                           (dt/q
                             '[:find ?id ?title ?price ?timestamp ?customer
                               :in $ ?company
                               :where
                               [?e :supplier/name ?company]
                               [?p :proposal/supplier ?e]
                               [?p :proposal/id ?id]
                               [?p :proposal/project ?pro]
                               [?pro :project/title ?title]
                               [?p :proposal/timestamp ?timestamp]
                               [?p :proposal/price ?price]
                               [?pro :project/customer ?c]
                               [?c :customer/name ?customer]]
                             db company)))))))
#?(:cljs (defn proposal-table [data]
           [:> DataTable {:pointerOnHover true
                          :allowRowEvents true
                          :responsive true
                          :theme         "dark"
                          :highlightOnHover true
                          :pagination true
                          :onRowClicked (fn [v] (swap! !state-supplier assoc-in [:clicker :proposal :title] (.-title v))
                                          (swap! !state-supplier assoc-in [:clicker :proposal :click] true))
                          :columns [
                                    {:name :Title :style {:background-color "green"} :selector (fn [row] (.-title row))}
                                    {:name :Price :sortable true :selector (fn [row] (.-price row))}
                                    {:name :Date :selector (fn [row] (.-timestamp row))}
                                    {:name :Customer :button true :ignoreRowClick true :cell (fn [v]
                                                                                               (println v)
                                                                                               (r/as-element
                                                                                                 [:a {:onClick (fn [] (swap! !state-supplier assoc-in [:customer-company-selection] {:click true :company (.-customer v)}))}
                                                                                                  (.-customer v)]))}] :data data}]))
#?(:cljs (defn log-out-button []
           [:> ReactiveButton {:color "violet" :idleText "Log out" :onClick (fn [] (swap! !state-supplier assoc-in [:selected-user] ""))}]))
(e/defn ProposalPage [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (binding [db (dt/db conn)]
        (e/client
          (let [state (e/watch !state-supplier)]
            (if (:click (:customer-company-selection state))
              (history/navigate! history/!history [:app.main/supplier-customer-page (:company (:customer-company-selection state))]))
            (if (= 0 (count (:selected-user state)))
              (history/navigate! history/!history [:app.main/supplier-user-select name]))
            (if (:click (:proposal (:clicker state)))
              (history/navigate! history/!history [:app.main/customer-project-detail (e/server (ffirst (dt/q '[:find (pull ?e [*])
                                                                                                               :in $ ?title
                                                                                                               :where [?e :project/title ?title]] db (:title (:proposal (:clicker state))))))]))
            (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: gray; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 10px 20px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  .rdt_Table {color: red;}

                  li a:hover {
                  background-color: #405d27;
                  legend {font-size: 20px; font-style: italic;} p {margin-bottom: 0}
                  }
                  #container {position:absolute;  left: 40%;  top: 50%; margin-left: -50px;  margin-top: -50px; font-style: italic;}"))
            (dom/div
              (dom/ul
                (dom/li (history/link [:app.main/supplier-create-author name] (dom/text "Create Author")))
                (dom/li (history/link [:app.main/supplier-find-project name] (dom/text "Find Project")))
                (dom/li (with-reagent log-out-button))))

            (dom/div

              (dom/h3 (dom/text "Proposals"))

              (dom/div (dom/props {:class "test"})
                       (with-reagent proposal-table (clj->js (e/server (proposal-data db name))))))))))))

#?(:clj (defn next-password-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :password/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :password/id ?id]] db))))))
#?(:clj (defn next-author-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :author/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :author/id ?id]] db))))))
(defn set-author-name! [name]
  (swap! !state-supplier assoc-in [:author :name] name))
(e/defn CreateAuthor [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (dom/div
          (dom/ul
            (dom/li (history/link [:app.main/supplier-create-author name] (dom/text "Create Author")))
            (dom/li (history/link [:app.main/supplier-find-project name] (dom/text "Find Project")))
            (dom/li (with-reagent log-out-button))))
        (dom/div
          (let [state (e/watch !state-supplier)]
            (let [auth (:author state)]
              (swap! !state-supplier assoc-in [:buttons :create] false)
              (dom/div
                (dom/span (dom/text "Author Name:"))
                (ui4/input (:name auth) (e/fn [v] (set-author-name! v)))
                (dom/span (dom/text "Password: "))
                (ui4/input (:password auth) (e/fn [v] (swap! !state-supplier assoc-in [:author :password] v))))
              (dom/div
                (dom/text name)
                (ui4/button (e/fn []
                                  (e/server (dt/transact conn {:tx-data [{:author/id      (next-author-id (dt/db conn))
                                                                          :author/name    (:name auth)
                                                                          :author/admin false
                                                                          :author/company (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :supplier/name ?name]] (dt/db conn) name))}]})
                                            (dt/transact conn {:tx-data [{:password/id       (next-password-id (dt/db conn))
                                                                          :password/user     (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :author/name ?name]] (dt/db conn) (:name auth)))
                                                                          :password/password (:password auth)}]})))



                            (dom/text "Create Author"))))))))))

(e/defn FindProject [supplier-name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (binding [db (dt/db conn)]
        (e/client
          (let [project (e/watch !state-supplier)]
            (let [!filter-project (atom ""), filter-project (e/watch !filter-project)]
              (dom/div
                (dom/ul
                  (dom/li (history/link [:app.main/supplier-create-author name] (dom/text "Create Author")))
                  (dom/li (history/link [:app.main/supplier-find-project name] (dom/text "Find Project")))
                  (dom/li (with-reagent log-out-button))))
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