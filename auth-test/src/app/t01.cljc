(ns app.t01
  #?(:cljs (:import [goog.math Long]))
  (:require
    clojure.edn
    contrib.ednish
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-ui4 :as ui]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.history :as history]
    #?(:clj [buddy.core.hash :as hash])
    #?(:clj [buddy.sign.jwt :as jwt])
    #?(:clj [datomic.client.api :as dt])
    #?(:cljs ["react" :as react])
    #?(:cljs ["slate" :refer [createEditor]])
    #?(:cljs [reagent.core :as r])
    #?(:cljs [reagent.dom :as rdom])
    #?(:cljs ["react-dom/client" :as ReactDom])))

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

(def !state (atom {:code ""
                   :login-credentials {:username "" :password "" :security-word "" :login-message "" :token ""}
                   :user-profile-page false
                   :mouse-move {:x 0 :y 0 :timelapse 0}}))




(e/defn LoginPage []
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !state)]
          (let [login (:login-credentials state)]
            (if (not (empty? (:token login)))
              (history/navigate! history/!history [::redirection (:token login)]))
            (dom/text login)
            (dom/div
              (dom/text (:login-message login))
              (dom/h2 (dom/text "Login Page")))
            (dom/div
              (dom/span (dom/text "Username: "))
              (ui/input (:username login) (e/fn [v] (swap! !state assoc-in [:login-credentials :username] v))))
            (dom/div
              (dom/span (dom/text "Password: "))
             (ui/input (:password login) (e/fn [v] (swap! !state assoc-in [:login-credentials :password] v))))

            (ui/button (e/fn []
                             (e/server
                               (if (empty? (dt/q '[:find ?e
                                                   :in $ ?name
                                                   :where [?e :user/username ?name]] (dt/db conn) (:username login)))
                                 (e/client (swap! !state assoc-in [:login-credentials :login-message] "Wrong username!"))
                                 (e/client
                                   (swap! !state assoc-in [:login-credentials :login-message] "")
                                   (e/server
                                     (if (= (:password login) (ffirst (dt/q '[:find ?password
                                                                              :in $ ?user
                                                                              :where [?e :user/username ?user]
                                                                                     [?e :user/password ?password]] (dt/db conn) (:username login))))
                                       (e/client
                                         (apply (.-log js/console) "Login Successful")
                                         (swap! !state assoc-in [:login-credentials :security-word] (e/server (ffirst (dt/q '[:find ?secure-word
                                                                                                                              :in $ ?user
                                                                                                                              :where [?e :user/username ?user]
                                                                                                                              [?e :user/security-word ?secure-word]] (dt/db conn) (:username login)))))
                                         (swap! !state assoc-in [:login-credentials :token] (e/server (jwt/encrypt {:username (:username login)} (buddy.core.hash/sha256 (:security-word login)) {:alg :dir :enc :a128cbc-hs256}))))

                                       (e/client
                                         (swap! !state assoc-in [:login-credentials :login-message] "Wrong password!")))))))) (dom/text "Login"))))))))

(e/defn Redirect [token]
  (e/client
    (let [state (e/watch !state)]
      (history/navigate! history/!history [::profile (:token (:login-credentials state))]))))
(e/defn UserProfile [token]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !state)]
          (let [[x y] (dom/on! js/document "mousemove"
                               (fn [e] [(.-clientX e) (.-clientY e)]))]
            (swap! !state assoc-in [:mouse-move :x] x)
            (swap! !state assoc-in [:mouse-move :y] y)
            (if (not (:user-profile-page state))
              (swap! !state assoc-in [:user-profile-page] true)
              #_(.reload js/window.location))
            (dom/text state)
            ;todo Burda bir gariplik var. Bu sayfaya gecis yaptigimizda Token Decryption bos donuyor.
            ;Bu yuzden redirection icin ara bir sayfa ekledim. Bu sekilde sayfa yenilenmis gibi datayi aliyoruz.
            ;Sayfa yenilenmedigi icinde state silinmemis oluyor. Best practice bulunanan kadar bu sekilde ilerleyabiliriz.
            (dom/div
              (dom/text "Token Decryption:"))
            (dom/text (e/server (jwt/decrypt token (e/server (buddy.core.hash/sha256 (:security-word (:login-credentials state)))))))
            (dom/div
              (dom/text "User Data From db:  ")
              (dom/text (e/server (dt/q '[:find (pull ?e [*])
                                          :in $ ?user
                                          :where [?e :user/username ?user]] (dt/db conn) (:username (jwt/decrypt token (e/server (buddy.core.hash/sha256 (:security-word (:login-credentials state))))))))))
            (history/link [::second token] (dom/text "Second Page"))))))))

(e/defn SecondPage [token]
  (e/server
    (binding [conn @(requiring-resolve 'user/datomic-conn)]
      (e/client
        (let [state (e/watch !state)]
          (let [[x y] (dom/on! js/document "mousemove"
                               (fn [e] [(.-clientX e) (.-clientY e)]))]
            (let [mouse (atom {:corr {:x 0 :y 0}})]
              (let [current-mouse (e/watch mouse)]
                (dom/text (e/client e/system-time-ms))
                (swap! mouse assoc-in [:corr] {:x x :y y})
                (if (and (not (nil? (:x (:corr current-mouse)))) (not= (:x (:corr current-mouse)) (:x (:mouse-move state))))
                  (do
                    (swap! !state assoc-in [:mouse-move :x] x)
                    (swap! !state assoc-in [:mouse-move :y] y)
                    (swap! !state assoc-in [:mouse-move :timelapse] (e/client e/system-time-ms)))
                  (if (> (- (e/client e/system-time-ms) (:timelapse (:mouse-move state))) 40000)
                    (do
                      (swap! !state assoc-in [:login-credentials] {:username "" :password "" :security-word "" :login-message "" :token ""})
                      (history/navigate! history/!history [::summary]))))


                  ;todo if condition ile kordinatlari kontrol et kordinatlar ayni ise timelapseleri kaydet)


                (dom/text current-mouse)))

            (dom/text (e/server (jwt/decrypt token (e/server (buddy.core.hash/sha256 (:security-word (:login-credentials state)))))))))))))


(e/defn Page [[page x]]
  (e/client
    (dom/h1 (dom/text "Auth Test App"))
    (dom/link (dom/props {:rel :stylesheet, :href "gridsheet-optional.css"})))


  (case page
    ::summary (history/router 1 (e/server (LoginPage.)))
    ::profile (history/router 2 (e/server (UserProfile. x)))
    ::second (history/router 2 (e/server (SecondPage. x)))
    ::redirection (history/router 2 (e/server (Redirect. x)))
    (e/client (dom/text "no matching route: " (pr-str page)))))

(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))

(e/defn Test []
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




