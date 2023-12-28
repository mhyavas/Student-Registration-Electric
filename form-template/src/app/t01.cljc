(ns app.t01
  #?(:cljs (:import [goog.math Long]))
  #?(:cljs (:require-macros [app.t01 :refer [with-reagent]]))
  #?(:cljs (:require-css ))
  (:require contrib.ednish
            contrib.str
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [contrib.str :refer [empty->nil]]
            [hyperfiddle.history :as history]
            #?(:clj [datomic.client.api :as dt])
            #?(:cljs ["react" :as react])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-dom/client" :as ReactDom])))


(def !state-form (atom {:credentials  {:username ""
                                       :password ""
                                       :login-message ""}
                        :login-button false}))

#?(:cljs (defn create-root
           "See https://reactjs.org/docs/react-dom-client.html#createroot"
           ([node] (create-root node (str (gensym))))
           ([node id-prefix]
            (ReactDom/createRoot node #js {:identifierPrefix id-prefix}))))

#?(:cljs (defn render [root & args]
           (.render root (r/as-element (into [:f>] args)))))

(defmacro with-reagent [& args]
  `(dom/div
     (let [root# (create-root dom/node)]
       (render root# ~@args)
       (e/on-unmount #(.unmount root#)))))
(e/def conn)

(e/def db)


#?(:clj (defn next-form-id [db]
          (if (empty? (dt/q '[:find (max ?id)
                              :where [_ :form/id ?id]] db))
            1
            (inc (ffirst (dt/q '[:find (max ?id)
                                 :where [_ :form/id ?id]] db))))))
#?(:cljs (defn test-form []
           [:link
            {:href "https://fonts.googleapis.com/css?family=Roboto&display=swap",
             :rel  "stylesheet"}]
           [:link
            {:href "https://fonts.googleapis.com/css?family=Inter&display=swap",
             :rel  "stylesheet"}]
           [:link {:href "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\material-ui-test\\src\\app\\main.css", :rel "stylesheet"}]
           [:title "Document"]
           [:div
            {:class "v2_4"}
            [:span {:class "v2_5"} "CMS"]
            [:div {:class "name"}]
            [:div {:class "name"}
             [:span {:class "v2_8"} "Username"]]

            [:span {:class "v2_9"} "Password"]
            [:div {:class "v2_10"}]
            [:div
             {:class "v2_11"}
             [:button {:class "v2_12" :onClick (fn [] (swap! !state-form assoc-in [:login-button] true))} "Login"]]
            [:div {:class "v2_14"}]
            [:input {:class "v2_14" :placeholder "username" :onChange (fn [v] (swap! !state-form assoc-in [:credentials :username] (empty->nil (.substr (.. v -target -value) 0 100))))}]

            [:div {:class "v2_16"}]
            [:input {:class "v2_16" :placeholder "* * * * * *" :onChange (fn [v] (swap! !state-form assoc-in [:credentials :password] (empty->nil (.substr (.. v -target -value) 0 100))))}]]))

(e/defn Login []
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (binding [db (dt/db conn)]
        (e/client
          (let [state (e/watch !state-form)]
            (let [login (:credentials state)]
              (dom/text (:login-message login))
              (if (:login-button state)
                (e/server
                  (if (empty? (dt/q '[:find ?e
                                      :in $ ?name
                                      :where [?e :form/username ?name]] db (:username login)))
                    (e/client (swap! !state-form assoc-in [:credentials :login-message] "Wrong username!"))
                    (e/client (swap! !state-form assoc-in [:credentials :login-message] "")
                              (e/server
                                (if (= (:password login) (ffirst (dt/q '[:find ?password
                                                                         :in $ ?user ?password
                                                                         :where [?e :form/username ?user]
                                                                         [?e :form/password ?password]] (dt/db conn) (:username login) (:password login))))
                                  (e/client
                                    (history/navigate! history/!history [::user-main (:username login)]))
                                  (e/client (swap! !state-form assoc-in [:credentials :login-message] "Wrong password!"))))))))

              (dom/element "style" (dom/text
                                     "* {\n  box-sizing: border-box;\n}
                                   body {\n  font-size: 14px;\n}
                                   .v2_4 {\n  width: 501px;\n
                                    height: 696px;\n
                                    background: rgba(243,243,243,1);
                                    \n  opacity: 1;\n  position: relative;
                                    \n  top: 0px;\n  left: 0px;
                                    \n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  overflow: hidden;\n}\n.v2_5 {\n  width: 210px;\n  color: rgba(0,94,162,1);\n  position: absolute;\n  top: 54px;\n  left: 155px;\n  font-family: Roboto;\n  font-weight: Regular;\n  font-size: 96px;\n  opacity: 1;\n  text-align: left;\n}\n.name {\n  color: #fff;\n}\n.name {\n  color: #fff;\n}\n.v2_8 {\n  width: 78px;\n  color: rgba(56,56,56,1);\n  position: absolute;\n  top: 264px;\n  left: 102px;\n  font-family: Inter;\n  font-weight: Regular;\n  font-size: 14px;\n  opacity: 1;\n  text-align: left;\n}\n.v2_9 {\n  width: 29px;\n  color: rgba(56,56,56,1);\n  position: absolute;\n  top: 339px;\n  left: 104px;\n  font-family: Inter;\n  font-weight: Regular;\n  font-size: 14px;\n  opacity: 1;\n  text-align: left;\n}\n.v2_10 {\n  width: 71px;\n  height: 8px;\n  background: url(\"../images/v2_10.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 483px;\n  left: 155px;\n  overflow: hidden;\n}\n.v2_11 {\n  width: 303px;\n  height: 37px;\n  background: url(\"../images/v2_11.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 487px;\n  left: 99px;\n  overflow: hidden;\n}\n.v2_12 { color: rgba(255,255,255,1);\n  width: 303px;\n  height: 37px;\n  background: rgba(0,94,162,1);\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border: 2px solid rgba(0,94,162,1);\n}\n.v2_13 {\n  width: 82px;\n  color: rgba(255,255,255,1);\n  position: absolute;\n  top: 9px;\n  left: 111px;\n  font-family: Inter;\n  font-weight: Bold;\n  font-size: 17px;\n  opacity: 1;\n  text-align: center;\n}\n.v2_14 {\n  width: 303px;\n  height: 37px;\n  background: rgba(255,255,255,1);\n  opacity: 1;\n  position: absolute;\n  top: 287px;\n  left: 99px;\n  border: 1px solid rgba(0,94,162,1);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  overflow: hidden;\n}\n.v2_15 {\n  width: 66px;\n  color: rgba(17,17,17,1);\n  position: absolute;\n  top: 297px;\n  left: 107px;\n  font-family: Inter;\n  font-weight: Regular;\n  font-size: 10px;\n  opacity: 1;\n  text-align: left;\n}\n.v2_16 {\n  width: 303px;\n  height: 37px;\n  background: rgba(255,255,255,1);\n  opacity: 1;\n  position: absolute;\n  top: 362px;\n  left: 99px;\n  border: 1px solid rgba(0,94,162,1);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  overflow: hidden;\n}\n.v2_17 {\n  width: 59px;\n  color: rgba(56,56,56,1);\n  position: absolute;\n  top: 374px;\n  left: 108px;\n  font-family: Roboto;\n  font-weight: Regular;\n  font-size: 14px;\n  opacity: 1;\n  text-align: left;\n}\n"))
              (with-reagent test-form))))))))


(e/defn UserMain [name]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (swap! !state-form assoc-in [:login-button] false)
        (dom/text (e/server (dt/q '[:find (pull ?e [*])
                                    :in $ ?username
                                    :where [?e :form/username ?username]] (dt/db conn) name)))))))

(e/defn Page [[page x]]
  (e/client
    (dom/h1 (dom/text "Form Template"))
    (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"})))


  (case page
    ::login (history/router 1 (e/server (Login.)))
    ::user-main (history/router 1 (e/server (UserMain. x)))
    (e/client (dom/text "no matching route: " (pr-str page)))))

(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))
(e/defn Test []
  (e/client
    (binding [dom/node js/document.body
              history/encode contrib.ednish/encode-uri
              history/decode #(or (contrib.ednish/decode-path % clojure.edn/read-string) [::login])]
      (history/router (history/HTML5-History.)
                      #_(set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))))
                              " - Datomic Browser")
                      (dom/pre (dom/text (contrib.str/pprint-str history/route)))

                      (e/server
                        (binding [conn @(requiring-resolve 'user/datomic-conn)]
                          (binding [db (dt/db conn)]
                            (e/client
                              (Page. history/route)))))))))
