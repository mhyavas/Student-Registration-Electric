(ns ^:dev/always user ; Electric currently needs to rebuild everything when any file changes. Will fix
  (:require
    user-main
    app.t01

    hyperfiddle.electric
    hyperfiddle.electric-dom2
    [stuffs.js-interop :as j]
    [reitit.core :as rr]
    [reitit.coercion :as rc]
    [reitit.frontend.easy :as rfe]
    [reitit.coercion.spec :as rss]))


;(def electric-main
;  (hyperfiddle.electric/boot ; Electric macroexpansion - Clojure to signals compiler
;    (binding [hyperfiddle.electric-dom2/node js/document.body]
;      ;(app.todo-list/App.)
;      (demo.demo-1-hello-world/HelloWorld.)
;      (demo.demo-1-hello-world/HelloWorld.)
;      ; end
;      ,)))





(hyperfiddle.electric/def re-router
  (->> (m/observe
         (fn [!]
           (rfe/start!
             router
             !
             {:use-fragment false})))
       (m/relieve {})
       new))

(def electric-main
  (hyperfiddle.electric/boot ; Electric macroexpansion - Clojure to signals compiler
    (binding [hyperfiddle.electric-dom2/node js/document.body]
      (app.t01/Test.))))

(defonce reactor nil)

(defn ^:dev/after-load ^:export start! []
  (assert (nil? reactor) "reactor already running")
  (set! reactor (electric-main
                  #(js/console.log "Reactor success:" %)
                  #(js/console.error "Reactor failure:" %))))

(defn ^:dev/before-load stop! []
  (when reactor (reactor)) ; teardown
  (set! reactor nil))