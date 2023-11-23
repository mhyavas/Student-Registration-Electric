(ns db-test.t13
  (:require [datomic.client.api :as dt]))

;Updating Author Schema
;Adding admin privileges

(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\ssp-db"
                        :system      "ci"}))



(def conn (dt/connect client {:db-name "SSP"}))
(def db (dt/db conn))

(dt/q '[:find ?id ?type
        :where [?id :db/ident :author/name]
               [?id :db/valueType ?type]] db)
;=> [[99 23]]

(dt/q '[:find (pull ?e [*])
        :in $ ?e
        :where [?e :db/ident _]] db 99)

(dt/transact conn {:tx-data [{:db/ident :author/admin
                              :db/valueType :db.type/boolean
                              :db/cardinality :db.cardinality/one}]})


(dt/q '[:find (pull ?e [*])
        :where [?e :author/name "Atakan Tatli"]] db)

(dt/transact conn {:tx-data [{:db/id 101155069755527
                              :author/admin true}]})

(dt/q '[:find (pull ?e [*])
        :where [?e :author/name "Atakan Tatli"]] db)


(vec (->>
       (dt/q
         '[:find ?id ?user ?password ?admin
           :in $ ?company
           :where
           [?e :supplier/name ?company]
           [?u :author/company ?e]
           [?u :author/id ?id]
           [?u :author/id ?id]
           [?u :author/name ?user]
           [?u :author/admin ?admin]
           [?p :password/user ?u]
           [?p :password/password ?password]]
         db "Sabanci Holding")))

(dt/transact conn {:tx-data [{:db/id 87960930222258
                              :author/admin false}
                             {:db/id 92358976733307
                              :author/admin false}]})


(dt/q '[:find (pull ?e [*])
        :in $ ?company
        :where [?c :supplier/name ?company]
              [?e :author/company ?c]] db "Sabanci Holding")


;Deleting value from datomic

(dt/transact conn {:tx-data [{:db/excise 92358976733307}]})