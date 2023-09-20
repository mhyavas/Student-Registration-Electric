(ns db-test.t03
  (:require [datomic.client.api :as d]))

;;Bu scripte ornek datalar olusturulup db'ye gonderildi.

(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))


#_(d/create-database client {:db-name "SSP"})

(def conn (d/connect client {:db-name "SSP"}))

(def db (d/db conn))

(def sample-types [{:type/id 1
                    :type/name "SAP"}
                   {:type/id 2
                    :type/name "Automation"}])

(d/transact conn {:tx-data sample-types})
(def sample-supplier [{:supplier/id 1
                       :supplier/name "Sabanci Holding"
                       :supplier/types [74766790688876 74766790688875]}
                      {:supplier/id 2
                       :supplier/name "Koc Holding"
                       :supplier/types [74766790688876 74766790688875]}])

(d/transact conn {:tx-data sample-supplier})

(d/q '[:find ?name
       :where [87960930222190 :supplier/types ?name]] db)
;=> [[74766790688875] [74766790688876]]

(d/q '[:find ?v
       :where [74766790688875 _ ?v]]db)
;=> [[1] ["SAP"]]

(def sample-customer [{:customer/id 1
                       :customer/name "Microsoft Inc."}
                      {:customer/id 2
                       :customer/name "Tesla Inc."}])

(d/transact conn {:tx-data sample-customer})

(def sample-project-inactive [{:project/id 1
                               :project/title "Trade Automation"
                               :project/status :inactive
                               :project/create_date (new java.util.Date)
                               :project/description "Creating a Trading Bot. Lorem Ipsalum"
                               :project/types [74766790688875 74766790688875]
                               :project/customer 101155069755504}])
(d/transact conn {:tx-data sample-project-inactive})
;:tx-data [#datom[13194139533338 50 #inst"2023-09-18T14:59:36.336-00:00" 13194139533338 true]
;           #datom[74766790688881 83 1 13194139533338 true]
;           #datom[74766790688881 84 "Trade Automation" 13194139533338 true]
;           #datom[74766790688881 85 :inactive 13194139533338 true]
;           #datom[74766790688881 86 #inst"2023-09-18T14:59:34.601-00:00" 13194139533338 true]
;           #datom[74766790688881 89 "Creating a Trading Bot. Lorem Ipsalum" 13194139533338 true]
;           #datom[74766790688881 92 74766790688875 13194139533338 true]
;           #datom[74766790688881 93 101155069755504 13194139533338 true]]
(def sample-proposal [{:proposal/id 1
                       :proposal/supplier 87960930222189
                       :proposal/price 1000.90
                       :proposal/timestamp (new java.util.Date)
                       :proposal/project 74766790688881}])
(d/transact conn {:tx-data sample-proposal})
;:tx-data [#datom[13194139533339 50 #inst"2023-09-18T15:00:59.482-00:00" 13194139533339 true]
;           #datom[87960930222194 78 1 13194139533339 true]
;           #datom[87960930222194 79 87960930222189 13194139533339 true]
;           #datom[87960930222194 80 1000.9 13194139533339 true]
;           #datom[87960930222194 82 #inst"2023-09-18T15:00:52.366-00:00" 13194139533339 true]
;           #datom[87960930222194 81 74766790688881 13194139533339 true]]
