(ns db-test.t17)


(def sample [{"title" "test13", "status" "inactive", "create_date" "10/26/2023", "description" "test123 description", "types" ["Automation"]} {"title" "Trade Automation 2", "status" "active", "create_date" "10/18/2023", "description" "Trade Automation Description", "types" ["SAP" "Automation"]}])

(map identity sample)

(:title (clojure.walk/keywordize-keys (first sample)))
(vec (map (fn [m]
            {:title (:title (clojure.walk/keywordize-keys m))
             :status (:status (clojure.walk/keywordize-keys m))
             :create_date (:create_date (clojure.walk/keywordize-keys m))
             :description (:description (clojure.walk/keywordize-keys m))
             :type (:types (clojure.walk/keywordize-keys m))})
          sample))