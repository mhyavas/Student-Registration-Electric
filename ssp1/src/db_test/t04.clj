(ns db-test.t04
  (:require [datomic.client.api :as d]))

(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))


(def conn (d/connect client {:db-name "SSP"}))

(def db (d/db conn))



(d/q '[:find ?name
       :where [?e :project/id 1]
              [?e :project/customer ?customer]
              [?customer :customer/name ?name]] db)
;=> [["Tesla Inc."]]


(into [] (flatten (d/q '[:find ?e
                         :in $ ?name
                         :where [?e :type/name ?name]] db "Automation")))