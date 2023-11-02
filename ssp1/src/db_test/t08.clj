(ns db-test.t08
  (:require [datomic.client.api :as d]))
;Creating Password Schema
(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                       :system      "ci"}))



(def conn (d/connect client {:db-name "SSP"}))
(def db (d/db conn))


(def password-schema [{:db/ident :password/id
                       :db/valueType :db.type/long
                       :db/unique :db.unique/identity
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :password/user
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one}
                      {:db/ident :password/password
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one}])

(d/transact conn {:tx-data password-schema})


(d/q '[:find (pull ?e [*])
       :where [?e :author/id _]] db)


(def huseyin-password [{:password/id 1
                        :password/user 74766790688881
                        :password/password "123456"}])

(d/transact conn {:tx-data huseyin-password})


(def seha-password [{:password/id       2
                     :password/user     92358976733307
                     :password/password "123456"}])


(d/transact conn {:tx-data seha-password})

(d/q '[:find (pull ?e [*])
       :where [?e supplier/name]])
(d/q '[:find (pull ?e [*])
       :in $ ?company
       :where [?e :author/name _]
       [?e :author/company ?c]
       [?c :supplier/name ?company]]
      db "Sabanci Holding")

(d/transact conn {:tx-data [{:password/id       15
                             :password/user     101155069755527
                             :password/password "123456"}]})
