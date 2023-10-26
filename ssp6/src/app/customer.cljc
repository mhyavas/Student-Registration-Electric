(ns app.customer
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
            #?(:cljs ["reactjs-popup$default" :as Popup])
            [clojure.string :as str]))


#?(:cljs (defn create-root
           "See https://reactjs.org/docs/react-dom-client.html#createroot"
           ([node] (create-root node (str (gensym))))
           ([node id-prefix]
            (ReactDom/createRoot node #js {:identifierPrefix id-prefix}))))
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
                           :msg/author ""}))

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
               (dom/h2 (dom/text "Select Company:"))
               (dom/div
                 (dom/table
                   (dom/th (dom/text "Name"))
                   (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                   :where [?e :customer/id _]] (dt/db conn)))]
                          (dom/tr
                            (dom/td (history/link [:app.main/customer-user-select (:customer/name (first value))] (dom/text (:customer/name (first value))))))))))))))

(e/defn UserSelect [company]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (let [state (e/watch !state-project)]
                (let [login (:login-credentials state)]
                  (swap! !state-project assoc-in [:selected-company] company)
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
                                                        (e/client (swap! !state-project assoc-in [:login-credentials :login-message] "Wrong password!")))))))) (dom/text "Login")))))))))

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
                                 :create-date (if (and
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

(defn project-navigator [v]
  (history/navigate! history/!history [:app.main/customer-project-detail (.-title v)]))

#?(:cljs (defn project-table [data]
           [:> DataTable {:onRowClicked (fn [v]
                                          (project-navigator v))
                          :columns      [{:name :Title :selector (fn [row] (.-title row))} {:name :Status :selector (fn [row] (.-status row))}]
                          :data         data}]))

#?(:cljs (defn project-detail-table [data]
           [:> DataTable {:columns [{:name :Title :selector (fn [row] (.-title row))}
                                    {:name :Status :selector (fn [row] (.-status row))}
                                    {:name :Create_Date :selector (fn [row] (.-create-date row))}
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
                (dom/div (dom/text "Nav:")
                         (history/link [:app.main/customer-create-project name] (dom/text "Create Project")) (dom/text " ")
                         (history/link [:app.main/customer-create-author name] (dom/text "Create Author")) (dom/text " "))
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
                                          (dom/td (dom/text (:project/status (first value))))))))))))

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
                (dom/div (with-reagent project-detail-table (clj->js (e/server (project-detail-data db name)))))
                (dom/div
                  (dom/h3 (dom/text "Proposals for this project"))
                  (dom/div (with-reagent proposal-table (clj->js (e/server (proposal-data db name)))))))))))




(e/defn CustomerPage2 [input]
        (e/client (dom/text "test2" input)))
(e/defn CustomerPage []
        (e/client (dom/text "CustomerPage")
                  (history/link [:app.main/custom2 "input Test"] (dom/text "input page2"))))