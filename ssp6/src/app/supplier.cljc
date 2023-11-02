(ns app.supplier
  #?(:cljs (:require-macros [app.customer :refer [with-reagent]]))
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
            #?(:clj [datomic.client.api :as dt])
            #?(:clj [datomic.client.api :as dt])
            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-awesome-button" :as AwesomeButton])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs ["react-data-table-component$default" :as DataTable])
            #?(:cljs ["react-offcanvas$default" :as offcanvas])
            [clojure.string :as str]))


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
                            :login-credentials {:user-name "" :password "" :login-message ""}
                            :msg/reply 0
                            :msg/author ""}))

(defn set-supplier [name]
  (swap! !state-supplier assoc-in [:selected-supplier] name))

(defn set-msg-replier [id]
  (swap! !state-supplier assoc-in [:msg/reply] id))
(defn set-author-name! [name]
  (swap! !state-supplier assoc-in [:author :name] name))

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
#?(:clj (defn next-author-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :author/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :author/id ?id]] db))))))
#?(:clj (defn next-password-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :password/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :password/id ?id]] db))))))


(defn set-username! [name]
  (swap! !state-supplier assoc-in [:login-credentials :user-name] name))

(defn set-password! [password]
  (swap! !state-supplier assoc-in [:login-credentials :password] password))

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
                                                              (history/navigate! history/!history [:app.main/supplier-proposals (:selected-company state)])
                                                              (swap! !state-supplier assoc-in [:selected-user] (:user-name login)))
                                                            (e/client (swap! !state-supplier assoc-in [:login-credentials :login-message] "Wrong password!")))))))) (dom/text "Login")))))))))))



#?(:cljs (defn proposal-table [data]
           [:> DataTable {:columns [{:name :Title :selector (fn [row] (.-title row))}
                                    {:name :Price :selector (fn [row] (.-price row))}
                                    {:name :Date :selector (fn [row] (.-timestamp row))}] :data data}]))
#?(:clj (defn proposal-data [db company]
          (vec (map (fn [[id title price timestamp]]
                      {:id      id
                       :title   title
                       :price price
                       :timestamp (if (and
                                        (and
                                          (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. timestamp)))
                                          (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. timestamp))))
                                        (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. timestamp))))
                                    (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. timestamp))
                                    (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. timestamp)))})
                    (vec (->>
                           (dt/q
                             '[:find ?id ?title ?price ?timestamp
                               :in $ ?company
                               :where
                               [?e :supplier/name ?company]
                               [?p :proposal/supplier ?e]
                               [?p :proposal/id ?id]
                               [?p :proposal/project ?pro]
                               [?pro :project/title ?title]
                               [?p :proposal/timestamp ?timestamp]
                               [?p :proposal/price ?price]]
                             db company)))))))


(e/defn ProposalPage [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [state (e/watch !state-supplier)]
                  (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: gray; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 10px 20px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  legend {font-size: 20px; font-style: italic;} p {margin-bottom: 0}
                  }
                  #container {position:absolute;  left: 40%;  top: 50%; margin-left: -50px;  margin-top: -50px; font-style: italic;}"))
                  (dom/div (dom/ul
                             (dom/li (history/link [:app.main/supplier-create-author name] (dom/text "Create Author")))
                             (dom/li (history/link [:app.main/supplier-find-project name] (dom/text "Find Project")))
                             (dom/li (history/link [:app.main/supplier-main-message] (dom/text "Messages"))))))

                (dom/div
                  (dom/h3 (dom/text "Proposals"))
                  (with-reagent proposal-table (clj->js (e/server (proposal-data db name)))))
                (dom/div
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

                                      (dom/td (history/link [:app.main/customer-project-detail (e/server (ffirst (dt/q '[:find (pull ?e [*])
                                                                                                                          :in $ ?e
                                                                                                                          :where [?e :project/title _]] db (:db/id (:proposal/project (first value))))))] (dom/text (e/server (ffirst (dt/q '[:find ?title
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
                                                                                                                                                     :where [?e :project/customer ?status]] db (:db/id (:proposal/project (first value)))))))))))))))))))


(e/defn CreateAuthor [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (dom/div
                (let [state (e/watch !state-supplier)]
                  (let [auth (:author state)]
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

#?(:cljs (defn IMG [url user]
           [:div {:style {:float "right"}}
            [:img {:onClick (fn [] (apply (.-log js/console) "test")
                              #_(clj->js (do (history/navigate!. history/!history [:app.main/supplier-profile user])))) :src url :width 50 :style {:border-radius "50%"}}]
            [:p {:style {:font-size "15px"}}  user]]))

(e/defn ProfilePage [author]
        (e/client
          (dom/text author)))
(e/defn MainMessage []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [state (e/watch !state-supplier)]
                  (with-reagent IMG "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" (:selected-user state))
                  (dom/div
                    (dom/table
                      (dom/th (dom/text "Project"))
                      (dom/th (dom/text "Customer"))
                      (dom/th (dom/text "Author"))
                      (e/for [value (e/server (flatten (map (fn [m] (dt/q '[:find (pull ?project-id [*])
                                                                            :in $ ?project-id
                                                                            :where [?project-id :project/status :inactive]] db (:db/id (:proposal/project m))))
                                                            (flatten (dt/q '[:find (pull ?e [*])
                                                                             :in $ ?supplier-name
                                                                             :where [?s :supplier/name ?supplier-name]
                                                                             [?e :proposal/supplier ?s]] db (:selected-company state))))))]
                             (dom/tr
                               (dom/td (dom/text (:project/title value)))
                               (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                           :in $ ?e
                                                                           :where [?e :customer/name ?name]] db (:db/id (first (:project/customer value))))))))
                               (dom/td (history/link [:app.main/supplier-chat [(:project/title value) (:selected-user state)]] (dom/text (e/server (ffirst (dt/q '[:find ?name :in $ ?e :where [?e :author/name ?name]] db (:db/id (:project/author value))))))))))))))))))

#?(:clj (defn reply_finder [db ref]
          (dt/q '[:find (pull ?e [*])
                  :in $ ?ref
                  :where [?e :msg/reply_to ?ref]] db ref)))
(e/defn ChatPage [[title author]]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [state (e/watch !state-supplier)]
                  (dom/table
                    (e/for [msg (reverse (e/server (dt/q '[:find (pull ?e [*])
                                                           :in $ ?title
                                                           :where [?e :msg/title ?title]
                                                           (not [?e :msg/reply_to _])] db title)))]
                           (dom/tr
                             (dom/text (e/server (ffirst (dt/q '[:find ?name :in $ ?id :where [?id :author/name ?name]] db (:db/id (:msg/author (first msg)))))) "-->" (:msg/message (first msg)) "--" (:msg/timestamp (first msg)))
                             (ui4/button (e/fn []
                                               (swap! !state-supplier assoc-in [:msg/reply] (:db/id (first msg)))) (dom/text "Reply"))
                             (dom/table
                               (dom/div (e/for [rply (reverse (e/server (reply_finder db (:db/id (first msg)))))]
                                               (dom/tr
                                                 (dom/text (e/server (ffirst (dt/q '[:find ?name :in $ ?id :where [?id :author/name ?name]] db (:db/id (:msg/author (first rply)))))) "-->" (:msg/message (first rply) ) "--" (:msg/timestamp (first rply)))
                                                 (ui4/button (e/fn []
                                                                   (swap! !state-supplier assoc-in [:msg/reply] (:db/id (first msg)))) (dom/text "Reply")))))))))
                  (dom/div
                    (dom/input (dom/props {:placeholder "Type a message" :maxlength 100})
                               (dom/on "keydown" (e/fn [e]
                                                       (when (= "Enter" (.-key e))
                                                         (when-some [v (empty->nil (.substr (.. e -target -value) 0 100))]
                                                           (if (= 0 (:msg/reply state))
                                                             (e/server (dt/transact conn {:tx-data [{:msg/id        (next-msg-id (dt/db conn))
                                                                                                     :msg/title     title
                                                                                                     :msg/message   v
                                                                                                     :msg/timestamp (System/currentTimeMillis)
                                                                                                     :msg/author    (ffirst (dt/q '[:find ?e
                                                                                                                                    :in $ ?name
                                                                                                                                    :where [?e :author/name ?name]] (dt/db conn) author))}]}))
                                                             (e/server (dt/transact conn {:tx-data [{:msg/id        (next-msg-id (dt/db conn))
                                                                                                     :msg/title     title
                                                                                                     :msg/message   v
                                                                                                     :msg/timestamp (System/currentTimeMillis)
                                                                                                     :msg/reply_to  (:msg/reply state)
                                                                                                     :msg/author    (ffirst (dt/q '[:find ?e
                                                                                                                                    :in $ ?name
                                                                                                                                    :where [?e :author/name ?name]] (dt/db conn) author))}]})))

                                                           (set! (.-value dom/node) ""))))))
                    (swap! !state-supplier assoc-in [:msg/reply] 0))))))))

