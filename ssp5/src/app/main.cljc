(ns app.main
  #?(:cljs (:import [goog.math Long]))
  (:require clojure.edn
            contrib.ednish
            app.customer
            app.supplier
            [hyperfiddle.electric-ui4 :as ui4]
            #?(:cljs contrib.datomic-cloud-contrib)
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])))

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
                                    (e/server (dt/transact conn {:tx-data [{:customer/id (next-customer-id (dt/db conn))
                                                                            :customer/name (:name customer)}]})))
                              (dom/text "Create Customer"))))))))

(e/defn MainPage []
        (e/client
          (dom/h1 (dom/text "Select the Sub Page:"))
          (dom/div
            (history/link [::customer] (dom/text "Customer Side")))
          (dom/div
            (history/link [::supplier] (dom/text "Supplier Side")))
          (dom/div
            (history/link [::create-supplier] (dom/text "Create Supplier")))
          (dom/div
            (history/link [::create-customer] (dom/text "Create Customer")))))
(e/defn Page [[page x]]
        (e/client
          (dom/h1 (dom/text "Software Sourcing Platform"))
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div (dom/text "Nav: ")
                   (history/link [::summary] (dom/text "home")) (dom/text " ")))



        (case page
          ::summary (history/router 1 (e/server (MainPage.)))
          ::customer (history/router 1 (e/server (app.customer/CustomerPage.)))
          ::supplier (history/router 1 (e/server (app.supplier/SupplierPage.)))
          ::create-supplier (history/router 1 (e/server (CreateSupplier.)))
          ::create-customer (history/router 1 (e/server (CreateCustomer.)))
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