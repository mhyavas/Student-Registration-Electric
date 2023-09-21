(ns app.customer
  #?(:cljs (:import [goog.math Long]
                    goog.date.DateTime))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    [hyperfiddle.electric-ui4 :as ui4]
    #?(:clj [datomic.client.api :as dt])
    #?(:cljs [cljs-time.core :as ct])))




(e/def conn)
(e/def db)

#?(:cljs (defn getTime []
           (ct/now)))

(def !state-project (atom {:project {:title       ""
                                     :status      :inactive
                                     :create-date (getTime)
                                     :description ""
                                     :types       ""
                                     :customer    ""}}))

#?(:clj (defn project-next-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :project/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :project/id ?id]] db))))))

#?(:clj (defn CreateProject [id title status create-date description types customer db]
          (dt/transact db {:tx-data [{:project/id id
                                      :project/title title
                                      :project/status status
                                      :project/create_date create-date
                                      :project/description description
                                      :project/types types
                                      :project/customer customer}]})))

(defn set-project-title! [title]
  (swap! !state-project assoc-in [:project :title] title))

(defn set-project-create_date! []
  (swap! !state-project assoc-in [:project :create-date] (getTime)))

(defn set-project-description! [desc]
  (swap! !state-project assoc-in [:project :description] desc))

(defn set-project-types! [str_types]
  (swap! !state-project assoc-in [:project :types] str_types))

(defn set-project-customer! [customer]
  (swap! !state-project assoc-in [:project :customer] customer))

(e/defn Main []
        (e/client
          (e/server
            (binding [conn @(requiring-resolve 'user/datomic-conn)]
              (binding [db (dt/db conn)]
                (e/client
                  (dom/h2 (dom/text "Please Select Your Company"))
                  #_(dom/text (str (.toLocaleDateString (js/Date.))))
                  (dom/div
                    (dom/table
                      (dom/th (dom/text "Name"))
                      (e/for [value (e/server (dt/q '[:find (pull ?e [*])
                                                      :where [?e :customer/id _]] db))]
                             (dom/tr
                               (dom/td (history/link [::customer (:customer/name (first value))] (dom/text (:customer/name (first value)))))))))))))))



(e/defn Create-Project [name]
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (dt/db conn)]
              (e/client
                (dom/h2 (dom/text "Creating New Project for " name))
                (let [state (e/watch !state-project)]
                  (let [project (:project state)]
                    (dom/div
                      (dom/span (dom/text "title:"))
                      (ui4/input (:title project) (e/fn [v] (set-project-title! v)))
                      (dom/span (dom/text "description:"))
                      (ui4/input (:description project) (e/fn [v] (set-project-description! v)))
                      (dom/span (dom/text "type:"))
                      (e/server (ui4/select (:types project)
                                            (e/fn V! [v] (e/client (set-project-types! v)))
                                            (e/fn Options [] (for [k (e/server (flatten (dt/q '[:find ?type
                                                                                                :where [_ :type/name ?type]] db)))]
                                                               k))
                                            (e/fn OptionLabel [x] x)))
                      (dom/div (ui4/button (e/fn []
                                                 (set-project-customer! name)
                                                 (set-project-create_date!)

                                                 (e/server (CreateProject (project-next-id db)
                                                                          (:title stage)
                                                                          (:status stage)
                                                                          (:create-date stage)
                                                                          (:description stage)
                                                                          (e/server (into [] (flatten (d/q '[:find ?e
                                                                                                             :in $ ?name
                                                                                                             :where [?e :type/name ?name]] db (:types stage)))))
                                                                          (e/server (into [] (flatten (d/q '[:find ?e
                                                                                                             :in $ ?name
                                                                                                             :where [?e :customer/name ?name]] db (:customer stage)))))
                                                                          !conn)))

                                           (dom/text "Create Instructor")))))))))))



(e/defn CustomerPage [name]
        (e/server
         (e/client
           (dom/div (dom/text "Nav: ")
                    (history/link [::create-project name] (dom/text "Create-Project")) (dom/text " "))

           (dom/text "Customer Page" name))))



(e/defn Page [[page x]]
        (e/client
          (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
          (dom/div (dom/props {:class "user-gridsheet-demo"})
                   (dom/div (dom/text "Nav: ")
                            (history/link [::main] (dom/text "Customer Home")) (dom/text " "))


                   (case page
                     ::customer (history/router 2 (e/server (CustomerPage. x)))
                     ::main (history/router 1 (e/server (Main.)))
                     ::create-project (history/router 2 (e/server (Create-Project. x)))
                     (e/client (dom/text "no matching route: " (pr-str page)))))))



(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))


(e/defn Customer []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % read-edn-str) [::main])]

            (history/router (history/HTML5-History.)
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                            (e/server
                              (e/client
                                (Page. history/route)))))))
