(ns app.function-test)


(def state (atom {:keys {:name "name" :status true}
                  {:name "department" :status true}
                  {:name "class"  :status true}
                  {:name "gpa" :status true}}))

(get-in @state [:name])

(keys @state)

(defn set-mat! [v]
  (identity v))

((eval (read-string (str "set-" (str "mat" "!")))) "test")

(read-string (str "set-" (str "mat" "!")))


(comment
  #_#?(:clj ((eval (read-string (str "set-" (str field-name "!")))) v))

  #_(ui/input ((keyword field-name) stage) (e/fn [v]
                                                 (set-name! v)
                                                 #_(-> (str "set-" (str field-name "!"))
                                                       read-string
                                                       eval)
                                                 #_((resolve (symbol (str "set-" (str field-name "!")))) v)
                                                 #_(#?(:clj (resolve (symbol (str "set-" (str field-name "!"))))) v)
                                                 #?(:clj ((eval (read-string (str "set-" (str field-name "!")))) v))
                                                 #_(e/server ((load-string (str "set-" (str field-name "!"))) . v)))))