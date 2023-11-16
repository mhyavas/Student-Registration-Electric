(ns app.admin
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
            [clojure.string :as str]))

(e/def conn)
(e/def db)
(def !state-admin (atom {:login-credentials {:user-name ""
                                             :password ""}}))
(e/defn UserSelect [company]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (let [state (e/watch !state-admin)]
                (let [login (:login-credentials state)]
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

(e/defn AdminPage []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (let [state (e/watch !state-admin)]
                  (dom/div
                    (dom/ul
                      (dom/li (dom/props {:float "left"}) (history/link [:app.main/create-supplier] (dom/text "Create Supplier")))
                      (dom/li (dom/props {:float "left"}) (history/link [:app.main/create-customer] (dom/text "Create Customer")))))
                  (dom/text "Admin Page Test")))))))
