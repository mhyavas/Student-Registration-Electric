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

(def !state-supplier (atom {:selected-supllier ""
                            :types []}))

(defn set-supplier [name]
  (swap! !state-supplier assoc-in [:selected-supplier] name))

(e/defn SendProposal [project]
        (e/client (dom/text project)))

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
                              (dom/td (dom/text (e/server (java.util.Date. (+ (* 7 86400 1000)  (:project/create_date (first value)))))))
                              (dom/td (history/link [::send-proposal (:db/id (first value))] (dom/text "Select")))))))))))))



(e/defn ProjectDetail [project-name]
        (e/client
          (dom/h2 (dom/text "Details of " project-name))
          (dom/table (dom/props {:border "1px" "solid" "black"})
                     (dom/th (dom/text "Title"))
                     (dom/th (dom/text "Status"))
                     (dom/th (dom/text "Author"))
                     (dom/th (dom/text "Description"))
                     (dom/th (dom/text "Deadline for Proposal"))
                     (dom/th (dom/text "Types"))
                     (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                     :in $ ?project-name
                                                     :where [?e :project/title ?project-name]] db project-name))]
                            (dom/tr
                              (dom/td (dom/text (:project/title (first value))))
                              (dom/td (dom/text (:project/status (first value))))
                              (dom/td (dom/text (e/server (ffirst (dt/q '[:find ?name
                                                                          :in $ ?id
                                                                          :where [?id :author/name ?name]] db (:db/id (:project/author (first value))))))))
                              (dom/td (dom/text (:project/description (first value))))
                              (dom/td (dom/text (e/server (java.util.Date. (+ (* 7 86400 1000)  (:project/create_date (first value)))))))
                              (dom/td (dom/text (e/server (map (fn [m]
                                                                 (ffirst (dt/q '[:find ?name
                                                                                 :in $ ?id
                                                                                 :where [?id :type/name ?name]] db (:db/id m)))) (:project/types (first value)))))))))))
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
                              (history/link [::main] (dom/text "Supplier Company Selection")) (dom/text " ")
                              (history/link [::find-project (:selected-supplier state)] (dom/text "Find Project")) (dom/text " ")))




                   (case page
                     ::main (history/router 1 (e/server (Main.)))
                     ::supplier (history/router 2 (e/server (SupplierMain. x)))
                     ::project-detail (history/router 2 (e/server (ProjectDetail. x)))
                     ::find-project (history/router 2 (e/server (FindProject. x)))
                     ::send-proposal (history/router 2 (e/server (SendProposal. x)))
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
