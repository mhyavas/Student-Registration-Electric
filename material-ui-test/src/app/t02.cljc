(ns app.t02
  #?(:cljs (:require-macros [app.t01 :refer [with-reagent]]))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]
    [reagent-mui.material.button :refer [button]]
    [reagent-mui.material.text-field :refer [text-field]]
    [reagent-mui.material.menu-item :refer [menu-item]]
    [reagent-mui.material.grid :refer [grid]]
    [reagent-mui.material.box :refer [box]]
    [reagent-mui.material.checkbox :refer [checkbox]]
    [reagent-mui.material.form-group :refer [form-group]]
    [reagent-mui.material.form-control-label :refer [form-control-label]]
    [reagent-mui.x.localization-provider :refer [localization-provider]]
    [reagent-mui.x.date-picker :refer [date-picker]]
    [reagent-mui.cljs-time-adapter :refer [cljs-time-adapter]]))


(def select-state (atom ""))

#?(:cljs (defn ui-test []
           [button "Click Me"]
           [text-field
            {:value       ""
             :label       "Select"
             :placeholder "Placeholder"
             :helper-text "Helper text"
             :on-change   (fn [e]
                            (apply (.-log js/console) [e]))
             :select      true}

            [menu-item
             {:value 1}
             "Item 1"]
            [menu-item
             {:value 2}
             "Item 2"]]

           [text-field
            {:id        :textarea-autosize
             :label     "Autosized textarea"
             :on-change (fn [e]
                          (reset! select-state (js->clj (.. e -target -value)))
                          (apply (.-log js/console) (.. e -target -value)))

             :multiline true
             :min-rows  2
             :max-rows  10}]))

#?(:cljs (defn grid-test []
           [box {:flex-grow 1}
            [grid {:container       true
                   :spacing         4
                   :direction       "column"
                   :justify-content "center"
                   :align-items     "center"}
             [grid {:item true :xs 8 :md 4} "xs=8"]
             [grid {:item true :xs 4} "xs=4"]]]))

(def date-atom (atom nil))
#?(:cljs (defn date-picker-test []
           [localization-provider {:dateAdapter cljs-time-adapter}
            [date-picker {
                          :on-change (fn [value]
                                       (reset! select-state (js->clj (.. value -target -value)))
                                       (apply (.-log js/console) value))
                          :format    "MM/dd/yyyy"
                          :label     "Date picker"}]]))





(e/defn Test []
  (e/client
    (let [state (e/watch select-state)]
      (dom/text state)
      (with-reagent ui-test)
      (with-reagent grid-test)
      (with-reagent date-picker-test))))

