(ns db-test.t05
  (:require [datomic.client.api :as d]))


(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))


(def conn (d/connect client {:db-name "SSP"}))

(def db (d/db conn))

(d/transact conn {:tx-data [{:author/id 2
                             :author/name "Mehmet Karaca"
                             :author/customer 101155069755504}]})

(d/q '[:find ?name
       :in $ ?company-name
       :where [?c :customer/name ?company-name]
              [?e :author/customer ?c]
              [?e :author/name ?name]] db "Tesla Inc.")


(def sample-pro (d/q '[:find (pull ?p [*])
                       :in $ ?supplier-name
                       :where [?s :supplier/name ?supplier-name]
                       [?p :proposal/supplier ?s]] db "Sabanci Holding"))


(:proposal/project (ffirst sample-pro))