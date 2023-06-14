(ns demo.demo-student
  (:require
    contrib.str
    [clojure.string :as str]
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.electric-ui4 :as ui]
    [missionary.core :as m]
    [clojure.string :as str]))


(def db
  [{:id 1
    :name "Can Ali"
    :department :department/matematik}
   {:id 2
    :name "Ali Deniz"
    :department :department/fizik}
   ])

#?(:clj
   (defn student-filter [?s]
     (->> db
          (filter (fn [m] (str/includes? (m :name) (str ?s))))
          (into []))))
(e/defn Student []
        (e/client
          (dom/h1 (dom/text "Student Registration"))
          (let [!search (atom "")
                search (e/watch !search)]
            (e/server
              (let [system-props (into [] (student-filter search))]
                (e/client
                  (dom/div (dom/props {:style {:color "gray"}}))
                  (ui/input search (e/fn [name] (reset! !search name))
                            (dom/props {:type "search" :placeholder "name"}))
                  (dom/h2 (dom/text "Student List"))
                  (dom/table
                    (e/server
                      (e/for [{:keys [id name department]} system-props]
                                (e/client
                                  (dom/tr
                                    ((dom/td (dom/text id))
                                     (dom/td (dom/text name))
                                     (dom/td (dom/props {:style {:white-space :nowrap}}) (dom/text department))))))))))))))


(comment
(student-filter "Can")
(defn student-filter [?s]
  (->> db
       (filter (fn [m] (str/includes? (m :name) (str ?s))))
       (into [])))
(student-filter "Can")
)
