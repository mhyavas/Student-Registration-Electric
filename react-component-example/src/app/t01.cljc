(ns app.t01
  #?(:cljs (:import [goog.math Long]))
  #?(:cljs (:require-macros [app.t01 :refer [with-reagent]]))
  (:require clojure.edn
            contrib.ednish
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            #?(:cljs ["react" :as react])
            #?(:cljs ["reactive-button" :as ReactiveButton])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-data-table-component$default" :as DataTable])
            #?(:cljs ["react-csv" :refer [CSVLink CSVDownload]])))

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

(def !state (atom {:clicker {:column "" :click false}
                   :button false}))
#?(:cljs (defn reactive-btn []
           [:> ReactiveButton {:color "green" :idleText "Button1" :onClick (fn [] (swap! !state assoc-in [:button] true))}]))

(def table-data [{:col1 1 :col2 2 :col3 3} {:col1 3 :col2 4 :col3 5}])

#?(:cljs (defn react-table [table-data]
           [:> DataTable {:allowRowEvents true
                          :responsive true
                          :theme         "dark"
                          :highlightOnHover true
                          :pagination true
                          :onRowClicked (fn [v]
                                          (swap! !state assoc-in [:clicker] {:column (.-col1 v) :click true})
                                          #_(swap! !state assoc-in [:clicker :column] (.-col1 v))
                                          #_(swap! !state assoc-in [:clicker :click] true))
                          :columns [{:name :Col1 :selector (fn [row] (.-col1 row))}
                                    {:name :Col2 :selector (fn [row] (.-col2 row))}
                                    {:name :Col3 :selector (fn [row] (.-col3 row))}]
                          :data table-data}]))


#?(:cljs (defn csv-downloader []
           [:> CSVDownload {:headers [
                                      { :label "First Name", :key "firstname" },
                                      { :label "Last Name", :key "lastname" },
                                      { :label "Email", :key "email"}]
                            :data [
                                   { :firstname "Ahmed", :lastname "Tomi", :email "ah@smthing.co.com" },
                                   { :firstname "Raed", :lastname "Labes", :email "rl@smthing.co.com" },
                                   { :firstname "Yezzi", :lastname "Min l3b", :email "ymin@cocococo.com"}]}]))


(e/defn MainPage []
  (e/client
    (let [state (e/watch !state)]
      (if (:button state)
        (history/navigate! history/!history [::test1]))
      (dom/text "This is the main page!")
      (with-reagent csv-downloader)
      (dom/div
        (dom/text "Page 2:")
        (with-reagent reactive-btn)
        (with-reagent react-table table-data)))))


(e/defn Test1 []
  (e/client
    (let [state (e/watch !state)]
      (swap! !state assoc-in [:button] false)
      (if (:click (:clicker state))
        (history/navigate! history/!history [::test2 (:column (:clicker state))]))
      (dom/text "Page 2: Hello World")

      (with-reagent react-table table-data))))


(e/defn Test2 [data]
  (e/client
    (swap! !state assoc-in [:clicker :click] false)
    (dom/text "Data is " data)
    (dom/div
      (history/link [::main] (dom/text "Home")))))
(e/defn Page [[page x]]
  (case page
    ::main (history/router 1 (e/server (MainPage.)))
    ::test1 (history/router 1 (e/server (Test1.)))
    ::test2 (history/router 2 (e/server (Test2. x)))))
(def read-edn-str (partial clojure.edn/read-string
                           {:readers #?(:cljs {'goog.math/Long goog.math.Long/fromString} ; datomic cloud long ids
                                        :clj {})}))
(e/defn Test []
  (e/client
    (binding [dom/node js/document.body
              history/encode contrib.ednish/encode-uri
              history/decode #(or (contrib.ednish/decode-path % clojure.edn/read-string) [::main])]
      (history/router (history/HTML5-History.)
                      #_(set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))))
                              " - Datomic Browser")
                      (dom/pre (dom/text (contrib.str/pprint-str history/route)))

                      (Page. history/route)))))

