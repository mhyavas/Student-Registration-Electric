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

(ffirst (d/q '[:find ?e
               :where [?e :customer/name "Microsoft Inc."]] db))
(d/q '[:find (pull ?e [*])
       :in $ ?name
       :where [?e :project/customer ?name]] db (ffirst (d/q '[:find ?e
                                                                   :where [?e :customer/name "Tesla Inc."]] db)))

(d/q '[:find (pull ?e [*])
       :where [?e :proposal/id _]] db)

(d/q '[:find (pull ?m [*])
       :where [?e :project/title "Trade Automation"]
              [?m :proposal/project ?e]] db)

(d/q '[:find (pull ?e [*])
       :in $ ?name
       :where [?e :project/customer ?name]] db (ffirst (d/q '[:find ?e :in $ ?name :where [?e :customer/name ?name]] db "Tesla Inc.")))



(d/q '[:find ?id
       :where [?e :db/ident ?id]]
     db)

(into [] (map (fn [s] (into [] (flatten (d/q '[:find ?e
                                               :in $ ?name
                                               :where [?e :type/name ?name]] db s)))) ["SAP" "Automation"]))