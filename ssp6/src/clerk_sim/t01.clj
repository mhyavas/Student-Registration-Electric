^{::clerk/visibility {:code :hide}}
(ns clerk-sim.t01
  (:require [nextjournal.clerk :as clerk]
            [datomic.client.api :as dt]
            [datascript.core :as ds]))

;# Modal of Customer Side


^{::clerk/visibility {:code :hide :result :hide}}
(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ci"}))

^{::clerk/visibility {:code :hide :result :hide}}
(def conn (dt/connect client {:db-name "SSP"}))
^{::clerk/visibility {:code :hide :result :hide}}
(def datomic-db (dt/db conn))

; For customer creation, next-customer-id function finds the available id
^{::clerk/visibility {:result :hide}}
(defn next-customer-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :customer/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :customer/id ?id]] db)))))

;For supplier creation, next-supplier-id function finds the available id
^{::clerk/visibility {:result :hide}}
(defn next-supplier-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :supplier/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :supplier/id ?id]] db)))))
;Type finder function finds the software types in the database
^{::clerk/visibility {:result :hide}}
(defn type-finder [v db]
  (into [] (flatten (map (fn [s] (into [] (flatten (dt/q '[:find ?e
                                                           :in $ ?name :where [?e :type/name ?name]] db s)))) v))))

(type-finder ["SAP" "Automation"] datomic-db)

^{::clerk/visibility {:result :hide}}
(def sample-customer [{:customer/id (next-customer-id datomic-db)
                       :customer/name "Apple Inc."}])
;=>[{:customer/id 3}
;    :customer/name "Apple Inc."}]
^{::clerk/visibility {:result :hide}}
(dt/transact conn {:tx-data sample-customer})

(def customer3 (dt/q '[:find (pull ?e [*])
                       :where [?e :customer/id 4]] datomic-db))
;=> [[{:db/id 96757023244429, :customer/id 3, :customer/name "Apple Inc."}]]

;With table format:
^{::clerk/visibility {:code :hide}}
(clerk/table
  {:customer/id [(:customer/id (ffirst customer3))]
   :customer/name [(:customer/name (ffirst customer3))]})


; In customer side, we can get a few options to do after selecting customer company. These are customer page, creating project page, page of creating author who can create new projects, and message page

;For creating authors, next-author-id finds function finds the available id

(defn next-author-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :author/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :author/id ?id]] db)))))

;Schema of author has 3 different entities which are id, name, and company. Let's create a new auhtor for Apple Inc.
(def sample-author [{:author/id (next-author-id datomic-db)
                     :author/name "Taner Adiguzel"
                     :author/company 96757023244429}])

(dt/transact conn {:tx-data sample-author})

;:tx-data [#datom[13194139533393 50 #inst"2023-10-31T12:33:46.375-00:00" 13194139533393 true]
;           #datom[79164837200027 98 10 13194139533393 true]
;           #datom[79164837200027 99 "Taner Adiguzel" 13194139533393 true]
;           #datom[79164837200027 100 96757023244429 13194139533393 true]],

;We create Taner Adiguzel but we need to set a password for Taner. For that,
(defn next-password-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :password/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :password/id ?id]] db)))))
(def taner-password [{:password/id (next-password-id datomic-db)
                      :password/password "123456"
                      :password/user 79164837200027}])

(dt/transact conn {:tx-data taner-password})
;:tx-data [#datom[13194139533395 50 #inst"2023-10-31T14:10:38.192-00:00" 13194139533395 true]
;           #datom[101155069755548 107 16 13194139533395 true]
;           #datom[101155069755548 109 "123456" 13194139533395 true]
;           #datom[101155069755548 108 79164837200027 13194139533395 true]],
;


;The case that Taner opens a new project for his company
(defn project-next-id [db]
  (if (empty? (dt/q '[:find (max ?id)
                      :where [_ :project/id ?id]] db))
    1
    (inc (ffirst (dt/q '[:find (max ?id)
                         :where [_ :project/id ?id]] db)))))
(def sample-project-taner [{:project/id (project-next-id datomic-db)
                            :project/title "Clerk Demo"
                            :project/status :inactive
                            :project/create_date (System/currentTimeMillis)
                            :project/description "Creating project for clerk demo"
                            :project/types [101155069755499]
                            :project/customer 96757023244429
                            :project/author 79164837200027}])

(dt/transact conn {:tx-data sample-project-taner})
;:tx-data [#datom[13194139533397 50 #inst"2023-10-31T14:16:58.645-00:00" 13194139533397 true]
;           #datom[83562883711133 83 6 13194139533397 true]
;           #datom[83562883711133 84 "Clerk Demo" 13194139533397 true]
;           #datom[83562883711133 85 :inactive 13194139533397 true]
;           #datom[83562883711133 86 1698761805796 13194139533397 true]
;           #datom[83562883711133 89 "Creating project for clerk demo" 13194139533397 true]
;           #datom[83562883711133 92 101155069755499 13194139533397 true]
;           #datom[83562883711133 93 96757023244429 13194139533397 true]
;           #datom[83562883711133 95 79164837200027 13194139533397 true]],
;



(clerk/table
  {:datomic [[13194139533397 50 #inst"2023-10-31T14:16:58.645-00:00" 13194139533397 true
                  [83562883711133 83 6 13194139533397 true]
                  [83562883711133 84 "Clerk Demo" 13194139533397 true]
                  [83562883711133 85 :inactive 13194139533397 true]
                  [83562883711133 86 1698761805796 13194139533397 true]
                  [83562883711133 89 "Creating project for clerk demo" 13194139533397 true]
                  [83562883711133 92 101155069755499 13194139533397 true]
                  [83562883711133 93 96757023244429 13194139533397 true]
                  [83562883711133 95 79164837200027 13194139533397 true]]]})



