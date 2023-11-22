(ns db-test.db-setup
  (:require [datomic.client.api :as dt]))

(def client (dt/client {:server-type :dev-local
                        :storage-dir "C:\\Users\\amibroker\\Desktop\\clj-study\\study-electric\\datomic-template\\db"
                        :system      "ci"}))


(dt/create-database client {:db-name "test"})
(def conn (dt/connect client {:db-name "test"}))
