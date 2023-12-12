(ns app.main
    #?(:cljs (:import [goog.math Long]))
    #?(:cljs (:require-macros [app.main :refer [with-reagent]]))
  (:require clojure.edn
            app.customer
            app.supplier
            app.msg-test
            app.admin
            contrib.ednish
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])
            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-awesome-button" :as AwesomeButton])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs ["react-data-table-component$default" :as DataTable])))


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
(def !state-cs (atom {:customer {:name ""}
                      :supplier {:name ""
                                 :types []}}))
(e/def conn)

(e/def db)

(defn set-supplier-name! [name]
      (swap! !state-cs assoc-in [:supplier :name] name))

#?(:clj (defn next-supplier-id [db]
              (if (empty? (dt/q '[:find (max ?id)
                                  :where [_ :supplier/id ?id]] db))
                1
                (inc (ffirst (dt/q '[:find (max ?id)
                                     :where [_ :supplier/id ?id]] db))))))
#?(:clj (defn next-customer-id [db]
              (if (empty? (dt/q '[:find (max ?id)
                                  :where [_ :customer/id ?id]] db))
                1
                (inc (ffirst (dt/q '[:find (max ?id)
                                     :where [_ :customer/id ?id]] db))))))
#?(:clj (defn type-finder [v db]
              (into [] (flatten (map (fn [s] (into [] (flatten (dt/q '[:find ?e
                                                                       :in $ ?name :where [?e :type/name ?name]] db s)))) v)))))

(e/defn CreateSupplier []
        (e/client
          (dom/div
            (let [state (e/watch !state-cs)]
                 (let [supplier (:supplier state)]
                      (dom/div
                        (dom/span (dom/text "Supplier Name:"))
                        (ui4/input (:name supplier) (e/fn [v] (set-supplier-name! v))))
                      (dom/div
                        (dom/span (dom/text "Types: "))
                        (e/for [value (e/server (dt/q '[:find ?name
                                                        :where [?e :type/name ?name]] (dt/db conn)))]
                               (dom/label
                                 (dom/input (dom/props {:type  "checkbox"
                                                        :name  (first value)
                                                        :value "true"})
                                            (dom/on "change" (e/fn [v]
                                                                   (if (and (.-checked dom/node) (not (some (partial = (str (.-name dom/node))) (:types supplier))))
                                                                     #_(swap! data update :nums conj {:first 1 :second 2})
                                                                     (swap! !state-cs update-in [:supplier :types] conj (str (.-name dom/node)))
                                                                     (if (some (partial = (str (.-name dom/node))) (:types supplier)))
                                                                     (swap! !state-cs update-in [:supplier :types] (fn [types] (vec (remove #(= (str (.-name dom/node)) %) types))))
                                                                     nil))))



                                 (dom/text (first value)))))
                      (dom/div
                        (ui4/button (e/fn []
                                          (e/server (dt/transact conn {:tx-data [{:supplier/id (next-supplier-id (dt/db conn))
                                                                                  :supplier/name (:name supplier)
                                                                                  :supplier/types (type-finder (:types supplier) (dt/db conn))}]})))
                                    (dom/text "Create Supplier"))))))))

(e/defn CreateCustomer []
        (e/client
          (dom/div
            (let [state (e/watch !state-cs)]
                 (let [customer (:customer state)]
                      (dom/div
                           (dom/span (dom/text "Customer Name"))
                           (ui4/input (:name customer) (e/fn [v] (swap! !state-cs assoc-in [:customer :name] v))))


                      (dom/div
                           (ui4/button (e/fn []
                                             (e/server (dt/transact conn {:tx-data [{:customer/id (next-customer-id (dt/db conn))}]
                                                                          :customer/name (:name customer)})))
                                       (dom/text "Create Customer"))))))))
#?(:cljs (defn button-test []
           [:> AwesomeButton/AwesomeButton {:onPress (fn [] (history/navigate! history/!history [::customer-page])) :type "primary" :size "medium" :button-primary-color "#1e88e5" :button-primary-color-dark "#1360a4"} "TEST"]))

(e/defn MainPage []
        (e/client
          (dom/h1 (dom/text "Select the Sub Page:"))
          (dom/div
            (history/link [::create-supplier] (dom/text "Create Supplier")))
          (dom/div
            (history/link [::create-customer] (dom/text "Create Customer")))
          (with-reagent button-test)))

(e/defn Page [[page x]]
        (e/client
          (dom/h1 (dom/text "Software Sourcing Platform"))
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: orange; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  legend {font-size: 25px; font-style: italic;} p {margin-bottom: 0}
                  }

                  tr {vertical-align: inherit; display: table-row}"))

          (dom/div
            (dom/ul (dom/props {:class "ul"})
                    (dom/li (dom/props {:float "left"}) (history/link [::summary] (dom/text "home")))
                    (dom/li (dom/props {:float "left"}) (history/link [::customer-page] (dom/text "Customer Side")))
                    (dom/li (dom/props {:float "left"}) (history/link [::supplier-page] (dom/text "Supplier Side")))
                    (dom/li (dom/props {:float "left"}) (history/link [::admin] (dom/text "Admin")))
                    (dom/li (dom/props {:float "left"}) (history/link [::msg-test] (dom/text "MSG_TEST"))))))




        (case page
              ::summary (history/router 1 (e/server (MainPage.)))
              ::admin (history/router 1 (e/server (app.admin/AdminPage.)))
              ::admin-companies (history/router 1 (e/server (app.admin/SelectCompany.)))
              ::admin-projects (history/router 1 (e/server (app.admin/Projects.)))
              ::admin-proposals (history/router 1 (e/server (app.admin/Proposals.)))
              ::admin-edit-proposal (history/router 2 (e/server (app.admin/EditProposal. x)))
              ::admin-edit-project (history/router 2 (e/server (app.admin/EditProject. x)))
              ::create-supplier (history/router 1 (e/server (CreateSupplier.)))
              ::create-customer (history/router 1 (e/server (CreateCustomer.)))
              ::customer-page (history/router 1 (e/server (app.customer/CompanySelect.)))
              ::customer-user-select (history/router 2 (e/server (app.customer/UserSelect. x)))
              ::customer-projects (history/router 2 (e/server (app.customer/Projects. x)))
              ::customer-project-detail (history/router 2 (e/server (app.customer/ProjectDetail. x)))
              ::customer-create-project (history/router 2 (e/server (app.customer/CreateProject. x)))
              ::customer-create-author (history/router 2 (e/server (app.customer/CreateAuthor. x)))
              ::customer-admin (history/router 2 (e/server (app.customer/AdminPage. x)))
              ::customer-admin-edit (history/router 2 (e/server (app.customer/EditUser. x)))
              ::customer-main-report (history/router 2 (e/server (app.customer/ReportPage. x)))
              ::supplier-page (history/router 1 (e/server (app.supplier/CompanySelect.)))
              ::supplier-user-select (history/router 2 (e/server (app.supplier/UserSelect. x)))
              ::supplier-proposals (history/router 2 (e/server (app.supplier/ProposalPage. x)))
              ::supplier-create-author (history/router 2 (e/server (app.supplier/CreateAuthor. x)))
              ::supplier-find-project (history/router 2 (e/server (app.supplier/FindProject. x)))
              ::supplier-main-message (history/router 1 (e/server (app.supplier/MainMessage.)))
              ::supplier-profile (history/router 2 (e/server (app.supplier/ProfilePage. x)))
              ::supplier-chat (history/router 2 (e/server (app.supplier/ChatPage. x)))
              ::supplier-admin-edit (history/router 2 (e/server (app.supplier/EditUser. x)))
              ::custom2 (history/router 2 (e/server (app.customer/CustomerPage2. x)))
              ::msg-test (history/router 2 (e/server (app.msg-test/MessageTest.)))
              ::supplier-admin (history/router 2 (e/server (app.supplier/AdminPage. x)))
              (e/client (dom/text "no matching route: " (pr-str page)))))
(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))
(e/defn Main []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % clojure.edn/read-string) [::summary])]
                   (history/router (history/HTML5-History.)
                                   #_(set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))))
                                           " - Datomic Browser")
                                   (dom/pre (dom/text (contrib.str/pprint-str history/route)))

                                   (e/server
                                     (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                              (binding [db (dt/db conn)]
                                                       (e/client
                                                         (Page. history/route)))))))))
