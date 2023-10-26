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
            #?(:cljs ["reactjs-popup$default" :as Popup])
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


(defn set-username! [name]
  (swap! !state-supplier assoc-in [:login-credentials :user-name] name))

(defn set-password! [password]
  (swap! !state-supplier assoc-in [:login-credentials :password] password))

(e/defn CompanySelect []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (dom/h2 (dom/text "Select Your Supplier Company"))
              (dom/div
                (dom/table
                  (dom/th (dom/text "Name"))
                  (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                  :where [?e :supplier/id _]] (dt/db conn)))]
                         (dom/tr
                           (dom/td (history/link [:app.main/supplier-user-select (:supplier/name (first value))] (dom/text (:supplier/name (first value)))))))))))))



(e/defn UserSelect [company]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (e/client
              (let [state (e/watch !state-supplier)]
                (let [login (:login-credentials state)]
                  (swap! !state-supplier assoc-in [:selected-company] company)
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
                                                                                                                                                               [?e :author/company ?company]] (dt/db conn) (:user-name login) (ffirst (dt/q '[:find ?e :in $ ?company :where [?e :customer/name ?company]] (dt/db conn) company)))))))
                                                        (e/client
                                                          #_(history/navigate! history/!history [:app.main/customer-projects (:selected-company state)])
                                                          (swap! !state-supplier assoc-in [:selected-user] (:user-name login)))
                                                        (e/client (swap! !state-supplier assoc-in [:login-credentials :login-message] "Wrong password!")))))))) (dom/text "Login")))))))))