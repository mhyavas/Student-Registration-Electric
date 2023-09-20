(ns app.customer
  #?(:cljs (:import [goog.math Long]
                    goog.date.DateTime))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    #?(:clj [datomic.client.api :as dt])
    #?(:cljs [cljs-time.core :as ct])))




(e/def conn)
(e/def db)

#?(:cljs (defn getTime []
           (ct/now)))

(def !state-project (atom {:project {:title       ""
                                     :status      :inactive
                                     :create-date ""
                                     :description ""
                                     :types       ""
                                     :customer    ""}}))

(e/defn Main []
        (e/client
          (e/server
            (binding [conn @(requiring-resolve 'user/datomic-conn)]
              (binding [db (dt/db conn)]
                (e/client
                  (dom/h2 (dom/text "Please Select Your Company"))
                  #_(dom/text (str (.toLocaleDateString (js/Date.))))
                  (dom/text (str (getTime)))
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
                (dom/div))))))


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
