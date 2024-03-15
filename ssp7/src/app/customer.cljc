(ns app.customer
  #?(:cljs (:require-macros [app.main :refer [with-reagent]]))
  (:require
    clojure.edn
    [clojure.string :as str]
    contrib.ednish
    [hyperfiddle.electric-ui4 :as ui4]
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    #?(:cljs [reagent.core :as r])
    #?(:clj [datomic.client.api :as dt])
    #?(:cljs ["reactive-button" :as ReactiveButton])
    #?(:cljs ["react-data-table-component$default" :as DataTable])
    #?(:cljs ["react-csv" :refer [CSVLink CSVDownload]])
    #?(:cljs ["react-icons/ai" :refer [AiFillLike AiFillDislike]])))


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
                                    :selected []
                                    :csv-button false
                                    :report-page-button false}
                           :logout-button false}))


(defn set-username! [name]
  (swap! !state-project assoc-in [:login-credentials :user-name] name))

(defn set-password! [password]
  (swap! !state-project assoc-in [:login-credentials :password] password))

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

#?(:clj (defn project-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :project/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :project/id ?id]] db))))))

#?(:clj (defn type-finder [v db]
          (into [] (flatten (map (fn [s] (into [] (flatten (dt/q '[:find ?e
                                                                   :in $ ?name :where [?e :type/name ?name]] db s)))) v)))))
(defn set-project-description! [description]
  (swap! !state-project assoc-in [:project :description] description))

(defn set-project-title! [title]
  (swap! !state-project assoc-in [:project :title] title))
(e/defn CompanySelect []
  ((e/server
     (binding [conn @(requiring-resolve 'user/datomic-conn)]
       (e/client
         (let [state (e/watch !state-project)]
           (if (< 0 (count (:selected-company state)))
             (dom/div
               #_(do
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
                                                                                                                                                           :where [?e :author/name ?name] [?e :author/company ?company]]
                                                                                                                                                         (dt/db conn) (:user-name login)
                                                                                                                                                         (ffirst (dt/q '[:find ?e :in $ ?company :where
                                                                                                                                                                         [?e :customer/name ?company]] (dt/db conn) company)))))))
                                                    (e/client
                                                      (swap! !state-project assoc-in [:selected-user] (:user-name login))
                                                      (apply (.-log js/console) "Login Successful")
                                                      (history/navigate! history/!history [:app.main/customer-projects company]))

                                                    (e/client (swap! !state-project assoc-in [:login-credentials :login-message] "Wrong password!")))))))) (dom/text "Login"))))))))))

(e/defn CreateProject [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (dom/ul
          (dom/li (history/link [:app.main/customer-create-project name] (dom/text "Create Project")))
          (dom/li (history/link [:app.main/customer-create-author name] (dom/text "Create Author")))
          (dom/li (history/link [:app.main/customer-main-report name] (dom/text "Reports")))
          (dom/li (history/link [:app.main/customer-review name] (dom/text "Reviews")))
          (dom/li (with-reagent log-out-button)))
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
#?(:cljs (defn log-out-button []
           [:> ReactiveButton {:color "violet" :idleText "Log out" :onClick (fn [] (swap! !state-project assoc-in [:logout-button] true))}]))

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

#?(:cljs
    (defn project-table [data]
     [:> DataTable {:allowRowEvents true
                    :onRowClicked   (fn [v] (swap! !state-project assoc-in [:clicker :project :title] (.-title v))
                                      (swap! !state-project assoc-in [:clicker :project :click] true))
                    :columns        [{:name :Title :selector (fn [row] (.-title row))}
                                     {:name :Status :selector (fn [row] (.-status row))}]
                    :data           data}]))
(e/defn Projects [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (binding [db (dt/db conn)]
        (e/client
          (let [state (e/watch !state-project)]
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
                       (dom/li (history/link [:app.main/customer-main-report name] (dom/text "Reports")))
                       (dom/li (history/link [:app.main/customer-review name] (dom/text "Reviews")))
                       (dom/li (with-reagent log-out-button))))
            (dom/div (with-reagent project-table (clj->js (e/server (project-data db name)))))))))))

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
(defn set-author-name! [name]
  (swap! !state-project assoc-in [:author :name] name))
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
           [:> CSVDownload {:headers [{:label "Title" :key "title"}
                                      {:label "Status" :key "status"}
                                      {:label "Create Date" :key "create_date"}
                                      {:label "Description" :key "description"}
                                      {:label "Type" :key "type"}] :data data}]))
#?(:cljs (defn CSV-button []
           [:> ReactiveButton {:color "blue" :idleText "Export" :onClick (fn [] (swap! !state-project assoc-in [:report :csv-button] true))}]))

(defn csv-preparer [v]
  (vec (map (fn [m]
              {:title (:title (clojure.walk/keywordize-keys m))
               :status (:status (clojure.walk/keywordize-keys m))
               :create_date (:create_date (clojure.walk/keywordize-keys m))
               :description (:description (clojure.walk/keywordize-keys m))
               :type (:types (clojure.walk/keywordize-keys m))})
            v)))


#?(:cljs (defn report-page-button []
           [:> ReactiveButton {:color "orange" :idleText "Report Page" :onClick (fn [] (swap! !state-project assoc-in [:report :report-page-button] true))}]))

(e/defn ReportPage [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !state-project)]
          (if (:csv-button (:report state))
            (history/navigate! history/!history [:app.main/customer-csv-download [name]]))
          (swap! !state-project assoc-in [:report :report-page-button] false)
          (dom/ul
            (dom/li (history/link [:app.main/customer-create-project name] (dom/text "Create Project")))
            (dom/li (history/link [:app.main/customer-create-author name] (dom/text "Create Author")))
            (dom/li (history/link [:app.main/customer-main-report name] (dom/text "Reports")))
            (dom/li (history/link [:app.main/customer-review name] (dom/text "Reviews")))
            (dom/li (with-reagent log-out-button)))


          (dom/h3 (dom/text "Report Page"))
          (dom/text (csv-preparer (:selected (:report state))))
          (dom/text (:report state))
          (dom/div
            (dom/ul (dom/props {:style {:background-color "white"}})
                    (dom/li (dom/text "from:" (dom/props {:class "text"}))

                            (ui4/date
                              (:start (:report state)) (e/fn [v] (swap! !state-project assoc-in [:report :start] (inst-ms* v)))))

                    (dom/li (dom/text "to:" (dom/props {:class "text"}))

                            (ui4/date
                              (:end (:report state)) (e/fn [v] (swap! !state-project assoc-in [:report :end] (inst-ms* v)))))))


          (with-reagent CSV-button)

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
                                                                                                                                                            [(> ?date ?start)]] (dt/db conn) (:start (:report state)) name))))))))))))



#?(:clj (defn customer-info-data [customer db]
          (vec (map (fn [[id review to from timestamp like dislike]]
                      {:id id
                       :review review
                       :to to
                       :from from
                       :timestamp (if (and
                                        (and
                                          (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. timestamp)))
                                          (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. timestamp))))
                                        (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. timestamp))))
                                    (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. timestamp))
                                    (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. timestamp)))
                       :like like
                       :dislike dislike})
                    (vec (->>
                           (dt/q
                             '[:find ?r ?review ?company ?from ?timestamp ?like ?dislike
                               :in $ ?company
                               :where
                               [?c :customer/name ?company]
                               [?r :review/to ?c]
                               [?r :review/review ?review]
                               [?r :review/from ?fr]
                               [?fr :supplier/name ?from]
                               [?r :review/timestamp ?timestamp]
                               [?r :review/like ?like]
                               [?r :review/dislike ?dislike]]
                             db customer)))))))

(def custom-styles {:table {:style {:maxWidth "100%"}}
                    :cells {:style {:wordBreak "break-word"}}})



#?(:cljs (defn customer-info-table [[data customer]]
           [:> DataTable {:title (str "Reviews of " customer)
                          :customStyles custom-styles
                          :columns [{:name :Review :style {:word-wrap "break-all" :maxWidth "10%" :wordBreak "break-all" :overflow "visible"}  :selector (fn [row] (.-review row))}
                                    {:name :From  :selector (fn [row] (.-from row))}
                                    {:name :Timestamp  :selector (fn [row] (.-timestamp row))}
                                    {:name :Like  :button true :ignoreRowClick true :cell (fn [v]
                                                                                            (r/as-element
                                                                                              [:a {:onClick (fn [])} (str (.-like v) "  ") [:> AiFillLike]]))}
                                    {:name :Dislike :button true :ignoreRowClick true :cell (fn [v]
                                                                                              (println v)
                                                                                              (r/as-element
                                                                                                [:a {:onClick (fn [])} (str (.-dislike v) "  ") [:> AiFillDislike]]))}] :data data}]))

(e/defn Reviews [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (dom/text "Review test")
        (with-reagent customer-info-table (clj->js [(e/server (customer-info-data name (dt/db conn))) name]))))))






