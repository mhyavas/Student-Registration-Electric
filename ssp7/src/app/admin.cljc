(ns app.admin
  #?(:cljs (:require-macros [app.main :refer [with-reagent]]))
  (:require clojure.edn
            contrib.ednish
            [clojure.string :as str]
            [hyperfiddle.electric-ui4 :as ui4]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])
            #?(:cljs ["react" :as react])
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