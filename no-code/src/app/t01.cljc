(ns app.t01
  (:require contrib.str
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            #?(:clj [datascript.core :as d])))

#?(:clj (defonce !conn (d/create-conn {}))) ; database on server
(e/def db)

(e/defn Item [id]
        (e/server
          (let [e (d/entity db id)
                status (:task/status e)]
            (e/client
              (dom/div
                (ui/checkbox
                  (case status :active false, :done true)
                  (e/fn [v]
                        (e/server
                          (d/transact! !conn [{:db/id id}]
                                       :task/status (if v :done :active)))

                        nil)
                  (dom/props {:id id}))
                (dom/label (dom/props {:for id}) (dom/text (e/server (:task/description e)))))))))

(e/defn T01 []
        (e/server
          (binding [db (e/watch !conn)]
            (e/server (d/transact! db [{:item/name "name" :item/status :active}
                                       {:item/name "department" :item/status :deactive}
                                       {:item/name "class" :item/status :deactive}
                                       {:item/name "gpa" :item/status :deactive}]))
            (e/client
              (dom/text "Checkbox Test")))))

