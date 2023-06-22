(ns demo.demo-student2
  (:require
    contrib.str
    [clojure.string :as str]
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [hyperfiddle.electric-ui4 :as ui]
    [missionary.core :as m]
    [clojure.string :as str]
    [clojure.walk :as wlk]))


(def db
  [{:id 1
    :name "Can Ali"
    :department :department/matematik}
   {:id 2
    :name "Ali Deniz"
    :department :department/fizik}])


(def course-list
  [{:id 201
    :code "MAT101"
    :name "Calculus 1"
    :department :department/matematik}
   {:id 301
    :code "BIL101"
    :name "MATLAB Giris"
    :department :department/matematik}
   {:id 301
    :code "BIL101"
    :name "MATLAB Giris"
    :department :department/fizik}])


#?(:clj
   (defn student-filter [db ?s]
     (->> db
          (filter (fn [m] (str/includes? (m :department) (str ?s))))
          (into []))))


(e/defn Student2 []
        (e/client
          (dom/h1 (dom/text "Student Registration"))
          (let [!search (atom "")
                search (e/watch !search)]
            (e/server
              (let [system-props (into [] (student-filter db search))]
                (e/client
                  (dom/div (dom/props {:style {:color "gray"}}))
                  (ui/input search (e/fn [name] (reset! !search name))
                            (dom/props {:type "search" :placeholder "department"}))
                  (dom/h3 (dom/text "Student List"))
                  (dom/table (dom/props {:style {:border-style :solid :border-collapse :collapse}})
                    (e/server
                      (e/for [{:keys [id name department]} system-props]
                             (e/client
                               (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})
                                 (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse}}) (dom/text id))
                                 (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse}}) (dom/text name))
                                 (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse :white-space :nowrap}}) (dom/text department)))))))))))

          (dom/h2 (dom/text  "Course Search"))
          (let [!course (atom "")
                course (e/watch !course)]
            (e/server
              (let [system-props (into [] (student-filter course-list course))]
                (e/client
                  (dom/div (dom/props {:style {:color "gray"}}))
                  (ui/input course (e/fn [name] (reset! !course name))
                            (dom/props {:type "search" :placeholder "department"}))
                  (dom/h3 (dom/text "Course List"))
                  (dom/table (dom/props {:style {:border-style :solid :border-collapse :collapse}})
                    (e/server
                      (e/for [{:keys [id name department]} system-props]
                             (e/client
                               (dom/tr (dom/props {:style {:border-style :solid :border-collapse :collapse}})
                                 (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse}}) (dom/text id))
                                 (dom/td (dom/props {:style {:border-style :solid :border-collapse :collapse}}) (dom/text name))
                                 (dom/td (dom/props {:style {:border-style :solid  :border-collapse :collapse}}) (dom/text department)))))))))))))

