(ns app.supplier
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    #?(:clj [datomic.client.api :as dt])
    app.customer
    ))


;todo projeler eklenecek
;todo aktif ve inaktif projeler olarak filtereleme olacak
;todo Proje isimlerine tikladigimizda proje detaylarina gidecek bir sayfaya yonlendirelecek
;todo Mesaj sayfasina yonlendirme olacak
;todo Customerlarin actigi ilanlari gezebilecegi bir sayfaya yonlendirme

(e/def conn)
(e/def db)

(e/defn Main []
        (e/client (dom/text "Supplier Test")))
(e/defn Page [[page x]]
        (dom/h1 (dom/text "Datomic browser"))
        (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"}))
        (dom/div (dom/props {:class "user-gridsheet-demo"})
                 (dom/div (dom/text "Nav: ")
                          (history/link [::customer] (dom/text "home")) (dom/text " ")
                          )

                       (case page
                         ::main (history/router 1 (e/server (Main.)))
                         ::customer (history/router 1 (e/server (app.customer/Customer.))))
                         (e/client (dom/text "no matching route: " (pr-str page)))))


(e/defn Supplier []
        (e/client
          (binding [dom/node js/document.body
                    history/encode contrib.ednish/encode-uri
                    history/decode #(or (contrib.ednish/decode-path % read-edn-str) [::main])]

            (history/router (history/HTML5-History.)
                            (dom/pre (dom/text (contrib.str/pprint-str history/route)))

                            (e/server
                              (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                (binding [db (dt/db conn)]
                                  (e/client
                                    (Page. history/route)))))))))
