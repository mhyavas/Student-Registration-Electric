(ns app.pickyn-schema)



(def user-schema
  [{:db/ident :user/id
    :db/unique :db.unique/identity
    :db/valueType :db.valueType/long
    :db/cardinality :db.cardinality/one}
   {:db/ident :user/username
    :db/unique :db.unique/identity
    :db/valueType :db.valueType/string
    :db/cardinality :db.cardinality/one}])


(def point-schema
  [{:db/ident :point/id
    :db/unique :db.unique/identity
    :db/valueType :db.valueType/long
    :db/cardinality :db.cardinality/one}
   {:db/ident :point/point
    :db/unique :db.unique/identity
    :db/valueType :db.valueType/long
    :db/cardinality :db.cardinality/one}])

(def score-schema
  [{:db/ident :score/id
    :db/unique :db.unique/identity
    :db/valueType :db.valueType/long
    :db/cardinality :db.cardinality/one}
   {:db/ident :score/point_id
    :db/valueType :db.valueType/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :score/user_id
    :db/valueType :db.valueType/ref
    :db/cardinality :db.cardinality/one}])

(def sample-point
  [{:point/id 1
    :point/point 1}])
(d/transact conn {:tx-data sample-point})
(def sample-score
  [{:score/id 1
    :score/point_id :db/id
    :score/user_id :db/id}])