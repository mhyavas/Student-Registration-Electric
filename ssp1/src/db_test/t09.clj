(ns db-test.t09
  (:require [datomic.client.api :as d]))

;Formating Project detail map

(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))



(def conn (d/connect client {:db-name "SSP"}))
(def db (d/db conn))

(def detail-data [{:project/title         "Trade Automation 2",
                   :project/types         [{:db/id 101155069755499} {:db/id 101155069755500}],
                   :project/tender_winner [{:db/id 79164837199981}],
                   :project/create_date   1697627269031, :db/id 74766790688884,
                   :project/author        {:db/id 74766790688881}, :project/customer [{:db/id 74766790688880}],
                   :project/description   "Trade Automation Description",
                   :project/id            2,
                   :project/status        :active}]

  (into [] (map (fn [m] {:title       (:project/title m)
                         :status      (:project/status m)
                         :create-date (if (and
                                            (and
                                              (= (.getMonth (java.util.Date.)) (.getMonth (java.util.Date. (:project/create_date m))))
                                              (= (.getYear (java.util.Date.)) (.getYear (java.util.Date. (:project/create_date m)))))
                                            (= (.getDate (java.util.Date.)) (.getDate (java.util.Date. (:project/create_date m)))))
                                        (.format (java.text.SimpleDateFormat. "HH:mm:ss") (java.util.Date. (:project/create_date m)))
                                        (.format (java.text.SimpleDateFormat. "MM/dd/yyyy") (java.util.Date. (:project/create_date m))))
                         :description (:project/description m)
                         :types       (flatten (map (fn [mt] (flatten (d/q '[:find ?name
                                                                             :in $ ?e
                                                                             :where [?e :type/name ?name]] db (:db/id mt)))) (:project/types m)))}) detail-data)))

