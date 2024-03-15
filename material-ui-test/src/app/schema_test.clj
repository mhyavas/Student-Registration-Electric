(ns app.schema-test)



(def client (d/client {:server-type :dev-local
                       :storage-dir "/Users/ahmetoguzhanengin/Desktop/Student-Registration-Electric/form-template/form-db"
                       :system      "ci"}))

#_(d/create-database client {:db-name "form"})

(def conn (d/connect client {:db-name "form"}))

(def db (d/db conn))

;;veri-tipleri
(def data-types [{:db/ident :user/id
                  :db/unique :db.unique/identity
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Kullanıcı kimliği"}
                 {:db/id #db/id[:db.part/db]
                  :db/ident :user/username
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Kullanıcı adı"}
                 {:db/ident :user/password
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Şifre"}
                 {:db/ident :user/email
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Email"}
                 {:db/ident :category/id
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Kategori kimliği"}
                 {:db/ident :category/name
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Kategori adı"}
                 {:db/ident :brand/id
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Marka kimliği"}
                 {:db/ident :brand/name
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Marka adı"}
                 {:db/ident :ranking/id
                  :db/valueType :db.type/string
                  :db/cardinality :db.cardinality/one
                  :db/doc "Sıralama kimliği"}
                 {:db/ident :ranking/position
                  :db/valueType :db.type/long
                  :db/cardinality :db.cardinality/one
                  :db/doc "Sıralama pozisyonu"}])


;; Relationships
(def relationships [{:db/ident :user/rankings
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/many
                     :db/doc "Kullanıcının sıralamaları"}])


;; Örnek Veri
(def ornek-veri [{:user/id "user1"
                  :user/username "kullanici1"
                  :user/password "sifre1"
                  :user/email "user1@example.com"
                  :user/rankings [{:db/id #db/id[:db.part/user]
                                   :category/id "category1"
                                   :brand/id "brand1"
                                   :ranking/id "ranking1"
                                   :ranking/position 1}
                                  {:db/id #db/id[:db.part/user]
                                   :category/id "category2"
                                   :brand/id "brand2"
                                   :ranking/id "ranking2"
                                   :ranking/position 2}]}])
                                  ;; Diğer sıralamalar...



(d/transact conn {:tx-data data-types})
(d/transact conn {:tx-data relationships})
(d/transact conn {:tx-data ornek-veri})
