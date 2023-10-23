(ns app.datomic-browser
  "must have datomic on classpath, and must load 'test ns"
  #?(:cljs (:import [goog.math Long])) ; only this require syntax passes shadow in this file, why?
  (:require clojure.edn
            contrib.ednish
            app.supplier
            [contrib.str :refer [any-matches?]]
            [hyperfiddle.electric-ui4 :as ui4]
            #?(:clj [contrib.datomic-contrib :as dx])
            #?(:cljs contrib.datomic-cloud-contrib)
            [contrib.gridsheet :as gridsheet :refer [Explorer]]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            [missionary.core :as m]
            #?(:clj [datomic.client.api :as dt])))



(e/def conn)

(e/def db)

(e/defn CreateSupplier []
        (e/client
          (dom/text "Create Supplier Page")))

(e/defn CreateCustomer []
        (e/client
          (dom/text "Create Customer Page")))


(e/defn MainPage []
        (e/client
          (dom/h1 (dom/text "Select the Sub Page"))
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



(e/defn DatomicBrowser []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % read-edn-str) [::summary])]

            (history/router (history/HTML5-History.)
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                            (e/server
                              (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                (assert (some? conn))
                                (binding [db (dt/db conn)]
                                  (e/client
                                    (Page. history/route)))))))))





(comment


  ;end
  ,)