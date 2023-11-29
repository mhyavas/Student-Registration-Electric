(ns db-test.t15
  (:require [datomic.client.api :as dt]))

(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ti"}))



(def conn (dt/connect client {:db-name "SSP"}))
(def db (dt/db conn))



(dt/q '[:find (pull ?e [*])
        :where [?c :customer/name "Tesla Inc."]
              [?e :author/company ?c]] db)

(dt/transact conn {:tx-data [{:db/id 101155069755522
                              :author/admin false}]})

(dt/q '[:find (pull ?e [*]) :where [?e :project/create_date ?date]] db)

(dt/q '[:find (pull ?e [*])
        :in $ ?start ?end
        :where [?e :project/create_date ?date]
               [(and (> ?date ?start) (< ?date ?end))]] db)

