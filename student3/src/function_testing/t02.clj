(ns function-testing.t02
  (:require [datomic.client.api :as d]))


(def client (d/client {:server-type :dev-local
                       :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\datodb"
                       :system      "ci"}))

(def conn (d/connect client {:db-name "studentReg"}))

(def db (d/db conn))

(d/q '[:find (count ?e)
       :where [?e :student/id _]] db)

(d/q '[:find (count ?e)
       :where [?e :course/id _]] db)

(d/q '[:find (pull ?e [*])
       :where [?e :instructor/id _]] db)

(ffirst (d/q '[:find (pull ?e [*])
               :where [?e :instructor/id _]] db))
(last (ffirst (:instructor/department (ffirst (d/q '[:find (pull ?e [*])
                                                     :where [?e :instructor/id _]] db)))))

(d/q '[:find ?dept
       :in $ ?dept-id
       :where [?e :department/id ?dept-id]
              [?e :db/id ?dept]] db (last (ffirst (:instructor/department (ffirst (d/q '[:find (pull ?e [*])
                                                                                              :where [?e :instructor/id _]] db))))))

;=> []

(d/q '[:find ?name
       :in $ ?dept-id
       :where [?dept-id :department/name ?name]] db (last (ffirst (:instructor/department (ffirst (d/q '[:find (pull ?e [*])
                                                                                                              :where [?e :instructor/id _]] db))))))
;=> [["Matematik"]]
(d/q '[:find (pull ?e [*])
       :where [?e :department/name "Matematik" ]] db)