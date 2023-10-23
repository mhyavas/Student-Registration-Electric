(ns clerk-case.t01
  (:require [nextjournal.clerk :as clerk]
            [datomic.client.api :as dt]
            [datascript.core :as ds]))


^{::clerk/visibility {:code :hide}}
(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ci"}))

^{::clerk/visibility {:code :hide}}
(def conn (dt/connect client {:db-name "SSP"}))
^{::clerk/visibility {:code :hide}}
(def datomic-db (dt/db conn))


; For customer creation, next-customer-id function finds the available id
(defn next-customer-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :customer/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :customer/id ?id]] db)))))

;For supplier creation, next-supplier-id function finds the available id
(defn next-supplier-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :supplier/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :supplier/id ?id]] db)))))
;Type finder function finds the software types in the database
(defn type-finder [v db]
  (into [] (flatten (map (fn [s] (into [] (flatten (dt/q '[:find ?e
                                                           :in $ ?name :where [?e :type/name ?name]] db s)))) v))))

(type-finder ["SAP" "Automation"] datomic-db)

(def sample-customer [{:customer/id (next-customer-id datomic-db)
                       :customer/name "Apple Inc."}])
;=>[{:customer/id 3}
;    :customer/name "Apple Inc."}]


(dt/transact conn {:tx-data sample-customer})


(dt/q '[:find (pull ?e [*])
        :where [?e :customer/id 3]] datomic-db)

;=> [[{:db/id 96757023244429, :customer/id 3, :customer/name "Apple Inc."}]]

(def sample-supplier [{:supplier/id (next-supplier-id datomic-db)
                       :supplier/name "Zorlu Holding"
                       :supplier/types (type-finder ["SAP" "Automation"] datomic-db)}])



; In customer side, we can get a few options to do after selecting customer company. These are customer page, creating project page, page of creating author who can create new projects, and message page

;For creating authors, next-author-id finds function finds the available id

(defn next-author-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :author/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :author/id ?id]] db)))))

;This query finds the entity id of Apple Inc.
#_(ffirst (dt/q '[:find ?e :where [?e :customer/name "Apple Inc."]] datomic-db))
#_(def sample-author-Zorlu [{:author/id (next-author-id datomic-db)
                             :author/name "Taner Guzel"
                             :author/company (ffirst (dt/q '[:find ?e :where [?e :customer/name "Apple Inc."]]))}])



