(ns app.customer
  #?(:cljs (:require-macros [app.customer :refer [with-reagent]]))
  (:require clojure.edn
            app.supplier
            app.admin
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
            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-awesome-button" :as AwesomeButton])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs ["react-data-table-component$default" :as DataTable])
            #?(:cljs ["reactjs-popup$default" :as Popup])
            ;#?(:cljs ["react-datepicker" :as DatePicker])
            #?(:cljs ["react-date-picker$default" :as DatePicker])
            #?(:cljs ["react-calendar$default" :as Calendar])
            #?(:cljs ["react-csv"] :refer [CSVLink CSVDownload])
            [clojure.string :as str]))


#?(:cljs (defn create-root
           "See https://reactjs.org/docs/react-dom-client.html#createroot"
           ([node] (create-root node (str (gensym))))
           [node id-prefix]
            (ReactDom/createRoot node #js {:identifierPrefix id-prefix})))
#?(:cljs (defn render [root & args]
           (.render root (r/as-element (into [:f>] args)))))


(defmacro with-reagent [& args]
  `(dom/div
     (let [root# (create-root dom/node)]
       (render root# ~@args)
       (e/on-unmount #(.unmount root#)))))




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
                                    :company ""
                                    :password ""}
                           :selected-company ""
                           :selected-user ""
                           :login-credentials {:user-name "" :password "" :login-message ""}
                           :msg/reply 0
                           :msg/author ""
                           :clicker {:project-detail {:types [] :click false}
                                     :project {:title "" :click false}}
                           :admin-user-selection []
                           :buttons {:delete false
                                     :edit false
                                     :create false
                                     :message ""}
                           :report {:start 0
                                    :end 0
                                    :selected []}}))


(defn set-username! [name]
  (swap! !state-project assoc-in [:login-credentials :user-name] name))

(defn set-password! [password]
  (swap! !state-project assoc-in [:login-credentials :password] password))

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

(e/defn CompanySelect []
        ((e/server
           (binding [conn @(requiring-resolve 'user/datomic-conn)]
             (e/client
               (let [state (e/watch !state-project)]
                 (if (< 0 (count (:selected-company state)))
                   (dom/div
                     (do
                       (history/navigate! history/!history [:app.main/customer-user-select (:selected-company state)])))
                   (dom/div
                     (dom/h2 (dom/text "Select Company:"))
                     (dom/div
                       (dom/table
                         (dom/th (dom/text "Name"))
                         (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                         :where [?e :customer/id _]] (dt/db conn)))]
                                (dom/tr
                                  (dom/td (history/link [:app.main/customer-user-select (:customer/name (first value))] (dom/text (:customer/name (first value)))))))))))))))))



(e/defn UserSelect [company]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (let [state (e/watch !state-project)]
                (let [login (:login-credentials state)]
                  (swap! !state-project assoc-in [:selected-company] company)
                  (if (< 0 (count (:selected-user state)))
                    (dom/div
                      (do (history/navigate! history/!history [:app.main/customer-projects (:selected-company state)])))

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
                                              (e/client (swap! !state-project assoc-in [:login-credentials :login-message] "Wrong username!"))
                                              (e/client (swap! !state-project assoc-in [:login-credentials :login-message] "")
                                                        (e/server
                                                          (if (= (:password login) (ffirst (dt/q '[:find ?password
                                                                                                   :in $ ?user
                                                                                                   :where [?e :password/user ?user]
                                                                                                   [?e :password/password ?password]] (dt/db conn) (ffirst (dt/q '[:find ?e
                                                                                                                                                                   :in $ ?name ?company
                                                                                                                                                                   :where [?e :author/name ?name]
                                                                                                                                                                       [?e :author/company ?company]] (dt/db conn) (:user-name login) (ffirst (dt/q '[:find ?e :in $ ?company :where [?e :customer/name ?company]] (dt/db conn) company)))))))
                                                            (e/client
                                                              (history/navigate! history/!history [:app.main/customer-projects (:selected-company state)])
                                                              (swap! !state-project assoc-in [:selected-user] (:user-name login)))
                                                            (e/client (swap! !state-project assoc-in [:login-credentials :login-message] "Wrong password!")))))))) (dom/text "Login")))))))))))





#?(:clj (defn project-data [db company]
          (vec (map (fn [[id title status]]
                      {:id      id
                       :title   title
                       :status status})
                    (vec (->>
                           (dt/q
                             '[:find ?id ?title ?status
                               :in $ ?company
                               :where
                               [?e :customer/name ?company]
                               [?p :project/customer ?e]
                               [?p :project/id ?id]
                               [?p :project/title ?title]
                               [?p :project/status ?status]]
                             db company)))))))

#?(:clj (defn project-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :project/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :project/id ?id]] db))))))

#?(:clj (defn next-password-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :password/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :password/id ?id]] db))))))
#?(:clj (defn type-finder [v db]
          (into [] (flatten (map (fn [s] (into [] (flatten (dt/q '[:find ?e
                                                                   :in $ ?name :where [?e :type/name ?name]] db s)))) v)))))
#?(:clj (defn project-detail-data [db detail-data]
          (into [] (map (fn [m] {:title       (:project/title m)
                                 :status      (:project/status m)
                                 :create_date (if (and
                                                    (and
                                                      (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. (:project/create_date m))))
                                                      (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. (:project/create_date m)))))
                                                    (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. (:project/create_date m)))))
                                                (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. (:project/create_date m)))
                                                (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:project/create_date m))))
                                 :description (:project/description m)
                                 :types       (into [] (flatten (map (fn [mt] (flatten (dt/q '[:find ?name
                                                                                               :in $ ?e
                                                                                               :where [?e :type/name ?name]] db (:db/id mt)))) (:project/types m))))}) [detail-data]))))



(defn project-table [data]
  #?(:cljs
             [:> DataTable {:allowRowEvents true
                            :onRowClicked   (fn [v] (swap! !state-project assoc-in [:clicker :project :title] (.-title v))
                                              (swap! !state-project assoc-in [:clicker :project :click] true))
                            :columns        [{:name :Title :selector (fn [row] (.-title row))}
                                             {:name :Status :selector (fn [row] (.-status row))}]
                            :data           data}]))

#?(:cljs (defn project-detail-table [data]
           [:> DataTable {:allowRowEvents true
                          :onRowClicked (fn [v] (swap! !state-project assoc-in [:clicker :project-detail :types] (js->clj (.-types v)))
                                          (swap! !state-project assoc-in [:clicker :project-detail :click] true))
                          :columns [{:name :Title :selector (fn [row] (.-title row))}
                                    {:name :Status :selector (fn [row] (.-status row))}
                                    {:name :Create_Date :selector (fn [row] (.-create_date row))}
                                    {:name :Description :selector (fn [row] (.-description row))}
                                    {:name :Types :selector (fn [row] (str/split (.-types row) #"(?=[A-Z])"))}] :data data}]))

#?(:cljs (defn proposal-table [data]
           [:> DataTable {:columns [{:name :Supplier :selector (fn [row] (.-supplier row))}
                                    {:name :Price :selector (fn [row] (.-price row))}
                                    {:name :Timestamp :selector (fn [row] (.-timestamp row))}]
                          :data data}]))

#?(:clj (defn next-author-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :author/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :author/id ?id]] db))))))
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

#?(:clj (defn proposal-data [db detail-data]
          (vec (map (fn [[supplier price timestamp]]
                      {:supplier supplier
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
                             '[:find ?supplier ?price ?timestamp
                               :in $ ?title
                               :where
                               [?e :project/title ?title]
                               [?p :proposal/price ?price]
                               [?p :proposal/timestamp ?timestamp]
                               [?p :proposal/project ?e]
                               [?p :proposal/supplier ?sid]
                               [?sid :supplier/name ?supplier]]
                             db (:project/title detail-data))))))))


(e/defn CreateProject [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (dom/h2 (dom/text "Creating a Project for " name))
              (dom/div
                (let [state (e/watch !state-project)]

                  (let [project (:project state)]

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
                        (dom/text (e/server (customer-finder name (dt/db conn))))
                        (ui4/button (e/fn []
                                          (e/server (ProjectToDatomic (project-next-id (dt/db conn))
                                                                      (:title project)
                                                                      :inactive
                                                                      (System/currentTimeMillis)
                                                                      (:description project)
                                                                      (type-finder (:types project) (dt/db conn))
                                                                      (customer-finder name (dt/db conn))
                                                                      (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :author/name ?name]] (dt/db conn) (:selected-user state)))
                                                                      conn)))


                                    (dom/text "Create Project")))))))))))

(e/defn Projects [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [state (e/watch !state-project)]
                  (if (:click (:project (:clicker state)))
                    (history/navigate! history/!history [:app.main/customer-project-detail (e/server (ffirst (dt/q '[:find (pull ?e [*])
                                                                                                                     :in $ ?title
                                                                                                                     :where [?e :project/title ?title]] db (:title (:project (:clicker state))))))]))
                  (dom/div (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: gray; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 10px 20px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  legend {font-size: 20px; font-style: italic;} p {margin-bottom: 0}
                  }
                  #container {position:absolute;  left: 40%;  top: 50%; margin-left: -50px;  margin-top: -50px; font-style: italic;}"))
                           (dom/ul
                             (dom/li (history/link [:app.main/customer-create-project name] (dom/text "Create Project")))
                             (dom/li (history/link [:app.main/customer-create-author name] (dom/text "Create Author")))
                             (dom/li (history/link [:app.main/customer-main-report name] (dom/text "Reports")))))
                  (dom/text (e/server (project-data db name)))
                  (dom/div (with-reagent project-table (clj->js (e/server (project-data db name)))))

                  (dom/table (dom/props {:border "1px" "solid" "black"})
                             (dom/td (dom/text "Project Name"))
                             (dom/td (dom/text "Status"))
                             (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                             :in $ ?name
                                                             :where [?e :project/customer ?name]] db (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :customer/name ?name]] db name))))]
                                    (dom/tr
                                      (dom/td (history/link [:app.main/customer-project-detail (first value)] (dom/text (:project/title (first value)))))
                                      (dom/td (dom/text (:project/status (first value)))))))))))))

(e/defn CreateAuthor [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
           (e/client
             (dom/div
               (let [state (e/watch !state-project)]
                 (let [auth (:author state)]
                   (dom/div
                     (dom/span (dom/text "Author Name:"))
                     (ui4/input (:name auth) (e/fn [v] (set-author-name! v)))
                     (dom/span (dom/text "Password: "))
                     (ui4/input (:password auth) (e/fn [v] (swap! !state-project assoc-in [:author :password] v))))
                   (dom/div
                     (dom/text name)
                     (ui4/button (e/fn []
                                       (e/server (dt/transact conn {:tx-data [{:author/id      (next-author-id (dt/db conn))
                                                                               :author/name    (:name auth)
                                                                               :author/company (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :customer/name ?name]] (dt/db conn) name))}]})
                                                 (dt/transact conn {:tx-data [{:password/id       (next-password-id (dt/db conn))
                                                                               :password/user     (ffirst (dt/q '[:find ?e :in $ ?name :where [?e :author/name ?name]] (dt/db conn) (:name auth)))
                                                                               :password/password (:password auth)}]})))



                                 (dom/text "Create Author"))))))))))

(e/defn ProjectDetail [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [state (e/watch !state-project)]
                  (dom/text (:clicker state))
                  (swap! !state-project assoc-in [:clicker :project :click] false)
                  (if (:click (:project-detail (:clicker state)))
                    (history/navigate! history/!history [:app.main/custom2 (:types (:project-detail (:clicker state)))]))
                  (swap! app.supplier/!state-supplier assoc-in [:clicker :proposal :click] false)
                  (dom/div (with-reagent project-detail-table (clj->js (e/server (project-detail-data db name)))))
                  (dom/div
                    (dom/h3 (dom/text "Proposals for this project"))
                    (dom/div (with-reagent proposal-table (clj->js (e/server (proposal-data db name))))))))))))




(e/defn MainMessage []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]))))


(e/defn CustomerPage2 [input]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [project (e/watch !state-project)]
                  (swap! !state-project assoc-in [:clicker :project-detail :click] false)
                  (let [!filter-project (atom ""), filter-project (e/watch !filter-project)]
                    (dom/span (dom/text "Project search via type: \n"))
                    (e/for [value (into [] input)]
                           (dom/label
                             (dom/input (dom/props {:type  "checkbox"
                                                    :name  value
                                                    :value "true"})
                                        (dom/on "change" (e/fn [v]
                                                               (if (and (.-checked dom/node) (not (some (partial = (str (.-name dom/node))) (:types project))))
                                                                 #_(swap! data update :nums conj {:first 1 :second 2})
                                                                 (swap! !state-project update-in [:types] conj (str (.-name dom/node)))
                                                                 (if (some (partial = (str (.-name dom/node))) (:types project))
                                                                   (swap! !state-project update-in [:types] (fn [types] (vec (remove #(= (str (.-name dom/node)) %) types))))
                                                                   nil))
                                                               (reset! !filter-project (str (.-name dom/node))))))





                             (dom/text value)))
                    (dom/text filter-project)
                    (dom/table (dom/props {:border "1px" "solid" "black"})
                               (dom/th (dom/text "Title"))
                               (dom/th (dom/text "Status"))
                               (dom/th (dom/text "Description"))
                               (dom/th (dom/text "Author"))
                               (dom/th (dom/text "Company"))
                               (dom/th (dom/text "Create Date"))
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
                                                                      (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:project/create_date (first value))))))))))))))))))

#?(:cljs (defn picker []
           #_[:> Calendar  {:onChange (fn [v] (apply (.-log js/console) [v]))}]
           [:div
            [:> DatePicker {:onChange (fn [v] (apply (.-log js/console) [v]))}]]))

#?(:clj (defn report-data [db data]
          (into [] (map (fn [m] {:title       (:project/title (first m))
                                 :status      (:project/status (first m))
                                 :create_date (if (and
                                                    (and
                                                      (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. (:project/create_date (first m)))))
                                                      (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. (:project/create_date (first m))))))
                                                    (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. (:project/create_date (first m))))))
                                                (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. (:project/create_date (first m))))
                                                (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:project/create_date (first m)))))
                                 :description (:project/description (first m))
                                 :types       (into [] (flatten (map (fn [mt] (flatten (dt/q '[:find ?name
                                                                                               :in $ ?e
                                                                                               :where [?e :type/name ?name]] db (:db/id mt)))) (:project/types (first m)))))}) data))))
;todo CSV aktarma butonu eklenecek. Diger filtrasyon ozellikleri eklenecek.
;todo ana sayfaya sirket ile alaklai yorum kismi eklencek.
#?(:cljs (defn report-table [title data]
           [:> DataTable {:allowRowEvents true
                          :title title
                          :selectableRows true
                          :onSelectedRowsChange (fn [v] (swap! !state-project assoc-in [:report :selected] (js->clj (.-selectedRows v)))) ;State'e kaydet sonrsinda buton olustur ve csv export tarfini hallet
                          :columns [{:name :Title :selector (fn [row] (.-title row))}
                                    {:name :Status :selector (fn [row] (.-status row))}
                                    {:name :Create_Date :selector (fn [row] (.-create_date row))}
                                    {:name :Description :selector (fn [row] (.-description row))}
                                    {:name :Types :selector (fn [row] (str/split (.-types row) #"(?=[A-Z])"))}] :data data}]))


#?(:cljs (defn report-csv [data]
           [:> CSVDownload {:header [{:label "Title" :key "title"}
                                     {:label "Status" :key "status"}
                                     {:label "Create Date" :key "create_date"}
                                     {:label "Description" :key "description"}
                                     {:label "Type" :key "type"}] :data data}]))
(e/defn ReportPage [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !state-project)]
          (dom/h3 (dom/text "Report Page"))
          (dom/text (:report state))
          (dom/div
            (dom/ul (dom/props {:style {:background-color "white"}})
                    (dom/li (dom/text "from:" (dom/props {:class "text"}))

                            (ui4/date
                              (:start (:report state)) (e/fn [v] (swap! !state-project assoc-in [:report :start] (inst-ms* v))
                                                             #_(apply (.-log js/console) v))))
                    (dom/li (dom/text "to:" (dom/props {:class "text"}))

                            (ui4/date
                              (:end (:report state)) (e/fn [v] (swap! !state-project assoc-in [:report :end] (inst-ms* v))
                                                           #_(apply (.-log js/console) v))))))
          (dom/text (cond
                      (and (= 0 (:start (:report state))) (= 0 (:end (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                          :in $ ?company
                                                                                                          :where
                                                                                                          [?c :customer/name ?company]
                                                                                                          [?e :project/create_date _]
                                                                                                          [?e :project/customer ?c]] (dt/db conn) name))
                      (and (< 0 (:start (:report state))) (< 0 (:end (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                          :in $ ?start ?end ?company
                                                                                                          :where [?e :project/create_date ?date]
                                                                                                          [?c :customer/name ?company]
                                                                                                          [?e :project/customer ?c]
                                                                                                          [(> ?date ?start)]
                                                                                                          [(< ?date ?end)]] (dt/db conn) (:start (:report state)) (:end (:report state)) name))
                      (and (= 0 (:start (:report state))) (< 0 (:end (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                          :in $ ?end ?company
                                                                                                          :where [?e :project/create_date ?date]
                                                                                                          [?c :customer/name ?company]
                                                                                                          [?e :project/customer ?c]
                                                                                                          [(< ?date ?end)]] (dt/db conn) (:end (:report state)) name))
                      (and (= 0 (:end (:report state))) (< 0 (:start (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                          :in $ ?start ?company
                                                                                                          :where [?e :project/create_date ?date]
                                                                                                          [?c :customer/name ?company]
                                                                                                          [?e :project/customer ?c]
                                                                                                          [(> ?date ?start)]] (dt/db conn) (:start (:report state)) name))))
          (with-reagent report-table (e/server (str (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:start (:report state)))) "-" (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:end (:report state))))))
                        (clj->js (e/server (report-data (dt/db conn ) (cond
                                                                        (and (= 0 (:start (:report state))) (= 0 (:end (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                                                                            :in $ ?company
                                                                                                                                                            :where
                                                                                                                                                            [?c :customer/name ?company]
                                                                                                                                                            [?e :project/customer ?c]
                                                                                                                                                            [?e :project/create_date _]] (dt/db conn) name))
                                                                        (and (< 0 (:start (:report state))) (< 0 (:end (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                                                                            :in $ ?start ?end ?company
                                                                                                                                                            :where [?e :project/create_date ?date]
                                                                                                                                                            [?c :customer/name ?company]
                                                                                                                                                            [?e :project/customer ?c]
                                                                                                                                                            [(> ?date ?start)]
                                                                                                                                                            [(< ?date ?end)]] (dt/db conn) (:start (:report state)) (:end (:report state)) name))
                                                                        (and (= 0 (:start (:report state))) (< 0 (:end (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                                                                            :in $ ?end ?company
                                                                                                                                                            :where [?e :project/create_date ?date]
                                                                                                                                                            [?c :customer/name ?company]
                                                                                                                                                            [?e :project/customer ?c]
                                                                                                                                                            [(< ?date ?end)]] (dt/db conn) (:end (:report state)) name))
                                                                        (and (= 0 (:end (:report state))) (< 0 (:start (:report state)))) (e/server (dt/q '[:find (pull ?e [*])
                                                                                                                                                            :in $ ?start ?company
                                                                                                                                                            :where [?e :project/create_date ?date]
                                                                                                                                                            [?c :customer/name ?company]
                                                                                                                                                            [?e :project/customer ?c]
                                                                                                                                                            [(> ?date ?start)]] (dt/db conn) (:start (:report state)) name)))))))
          #_(with-reagent)







          #_(with-reagent picker))))))


(e/defn CustomerPage []
        (e/client (dom/text "CustomerPage")
                  (history/link [:app.main/custom2 "input Test"] (dom/text "input page2"))))


#?(:cljs (defn reactive-btn [action]
           (case action
             "Delete" [:> ReactiveButton {:color "red" :idleText "Delete" :onClick (fn [] (swap! !state-project assoc-in [:buttons :delete] true))}]
             "Edit"   [:> ReactiveButton {:color "yellow" :idleText "Edit" :onClick (fn [] (swap! !state-project assoc-in [:buttons :edit] true))}]
             "Create" [:> ReactiveButton {:color "green" :idleText "Create" :onClick (fn [] (swap! !state-project assoc-in [:buttons :create] true))}])))
(e/defn EditUser [[m company]]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [edit-state (atom {:user-name "" :password "" :admin false})]
          (swap! edit-state assoc-in [:admin] (:admin (clojure.walk/keywordize-keys (first m))))
          (swap! edit-state assoc-in [:user-name] (:user (clojure.walk/keywordize-keys (first m))))
          (swap! edit-state assoc-in [:password] (:password (clojure.walk/keywordize-keys (first m))))
          (dom/div
            (dom/span (dom/text "User: "))
            (dom/input (dom/props {:placeholder (:user (clojure.walk/keywordize-keys (first m)))})
                       (dom/on "change" (e/fn [v] (swap! edit-state assoc-in [:user-name] (.-value dom/node))))))
          (dom/div
            (dom/span (dom/text "Password: "))
            (dom/input (dom/props {:placeholder (:password (clojure.walk/keywordize-keys (first m)))})
                       (dom/on "change" (e/fn [v] (swap! edit-state assoc-in [:password] (.-value dom/node))))))
          (dom/text "Customer Edit User"))))))

#?(:clj (defn admin-user-data [db company]
          (vec (map (fn [[id user password admin]]
                      {:id      id
                       :user user
                       :password password
                       :admin admin})
                    (vec (->>
                           (dt/q
                             '[:find ?id ?user ?password ?admin
                               :in $ ?company
                               :where
                               [?e :customer/name ?company]
                               [?u :author/company ?e]
                               [?u :author/id ?id]
                               [?u :author/name ?user]
                               [?u :author/admin ?admin]
                               [?p :password/user ?u]
                               [?p :password/password ?password]]
                             db company)))))))

#?(:cljs (defn admin-user-table [data]
           [:> DataTable {:allowRowEvents       true
                          :selectableRows       true
                          :onSelectedRowsChange (fn [v] (swap! !state-project assoc-in [:admin-user-selection] (js->clj (.-selectedRows v))))
                          :columns              [{:name :User :sortable true :selector (fn [row] (.-user row))}
                                                 {:name :Password :selector  (fn [row] (.-password row))}
                                                 {:name :Admin :sortable true :selector (fn [row] (str (.-admin row)))}]
                          :data                 data}]))
(e/defn AdminPage [company]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (binding [db (dt/db conn)]
        (e/client
          (let [state (e/watch !state-project)]
            (swap! app.admin/!admin-state assoc-in [:table-clickers :customer :click] false)
            (if (and (empty? (:admin-user-selection state)) (or (:delete (:buttons state)) (:edit (:buttons state))))
               (swap! !state-project assoc-in [:buttons :message] "Please Select User")
               (do
                 (swap! !state-project assoc-in [:buttons :message] "")
                 (if (:edit (:buttons state))
                   (history/navigate! history/!history [:app.main/customer-admin-edit [(:admin-user-selection state) company]]))))

            (if (:create (:buttons state))
              (history/navigate! history/!history [:app.main/customer-create-author company]))

            (dom/text (:message (:buttons state)))
            (dom/h3 (dom/text "Total registered user: " (e/server (ffirst (dt/q '[:find (count ?e)
                                                                                  :in $ ?company
                                                                                  :where [?c :customer/name ?company]
                                                                                  [?e :author/company ?c]] db company)))))
            (with-reagent admin-user-table (clj->js (e/server (admin-user-data db company))))))))))
