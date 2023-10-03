(ns app.supplier
  #?(:cljs (:import [goog.math Long]))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    [hyperfiddle.electric-ui4 :as ui4]
    [missionary.core :as m]
    clojure.string
    #?(:clj [datomic.client.api :as dt])))

(e/def conn)
(e/def db)

(def !state-supplier (atom {:selected-supllier ""}))

(defn set-supplier [name]
  (swap! !state-supplier assoc-in [:selected-supplier] name))

(e/defn ProjectDetail [project-name]
        (e/client (dom/text project-name)))
(e/defn SupplierMain [name]
        (e/client
          (set-supplier name)
          (dom/h2 (dom/text "Main Page of " name))
          (dom/h3 (dom/text "Proposals"))
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
                              (dom/td (history/link [::project-detail (e/server (ffirst (dt/q '[:find ?title
                                                                                                :in $ ?e
                                                                                                :where [?e :project/title ?title]] db (:db/id (:proposal/project (first value))))))] (dom/text (e/server (ffirst (dt/q '[:find ?title
                                                                                                                                                                                                                         :in $ ?e
                                                                                                                                                                                                                         :where [?e :project/title ?title]] db (:db/id (:proposal/project (first value)))))))))
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?status
                                                                          :in $ ?e
                                                                          :where [?e :project/status ?status]] db (:db/id (:proposal/project (first value))))))))
                              (dom/td (dom/text (e/server (java.util.Date. (:proposal/timestamp (first value))))))
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?customer
                                                                          :in $ ?customer-id
                                                                          :where [?customer-id :customer/name ?customer]] db (ffirst (dt/q '[:find ?status
                                                                                                                                             :in $ ?e
                                                                                                                                             :where [?e :project/customer ?status]] db (:db/id (:proposal/project (first value)))))))))))))))





(e/defn Main []
        (e/client
          (dom/h2 (dom/text "Select Your Supplier Company"))
          (dom/div
            (dom/table
              (dom/th (dom/text "Name"))
              (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                              :where [?e :supplier/id _]] db))]
                     (dom/tr
                       (dom/td (history/link [::supplier (:supplier/name (first value))] (dom/text (:supplier/name (first value)))))))))))


(e/defn Page [[page x]]
        (e/client
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div (dom/props {:class "user-gridsheet-demo"})
                   (let [state (e/watch !state-supplier)]
                     (dom/div (dom/text "Nav:")
                              (history/link [::main] (dom/text "Supplier Company Selection")) (dom/text " ")))




                   (case page
                     ::main (history/router 1 (e/server (Main.)))
                     ::supplier (history/router 2 (e/server (SupplierMain. x)))
                     ::project-detail (history/router 2 (e/server (ProjectDetail. x)))
                     (e/client (dom/text "no matching route: " (pr-str page)))))))

(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))

(e/defn SupplierPage []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % read-edn-str) [::main])]

            (history/router (history/HTML5-History.)
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                            (e/server
                              (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                (assert (some? conn))
                                (binding [db (dt/db conn)]
                                  (e/client
                                    (Page. history/route)))))))))
