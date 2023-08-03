# Student Registration App v2

Birinci versiyondan en baş farkı datascript yerine datomic kullanıldı.

Datomic bağlantısını yaparken [electric-datomic-browser](https://github.com/hyperfiddle/electric-datomic-browser/tree/main) reposunu örnek aldım.

Bir önceki versiyondan datomic bağlantısını kuramamın sebebi client ve server taraflarında yanlış fonksiyonları çalıştırmamdan kaynaklandığını gördüm.

Bu versiyonda da benzer bir hata ile karşılaştım.
```
[:dev] Build failure:
------ ERROR -------------------------------------------------------------------
 File: C:\Users\amibroker\Desktop\clj-study\study-electric\student4\src\user.cljs:9:3
--------------------------------------------------------------------------------
   6 |     hyperfiddle.electric-dom2))
   7 | 
   8 | (def electric-main
   9 |   (hyperfiddle.electric/boot ; Electric macroexpansion - Clojure to signals compiler
---------^----------------------------------------------------------------------
Encountered error when macroexpanding hyperfiddle.electric/boot.
Unable to resolve symbol: hyperfiddle.electric-dom2/new-node
{:file "app/demo_index.cljc", :in [hyperfiddle.electric-dom2/new-node]}
ExceptionInfo: Unable to resolve symbol: hyperfiddle.electric-dom2/new-node
```
Bu hatanın sebebi ana fonksiyonun içerisinde client ve server sıralamasının yanlış olmasındaydı.

Hata veren:
```clojure
(e/defn Index []
        (e/client
          (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              
                (dom/div
                  (dom/h2 (dom/text "Creating Student"))
                  (let [state (e/watch !state)]
                  ...
                  ...
```
Hatasız versiyon:
```clojure
(e/defn Index []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              (e/client
                (dom/div
                  (dom/h2 (dom/text "Creating Student"))
                  (let [state (e/watch !state)]
                  ...
                  ...
```


- `app/demo_index.cljc` içindeki `CreateData` fonksiyonu ya da `user_main.cljc` dosyasındaki `Pages` fonksiyonu 'Unable to resolve' hatası veriyordu.
```
Encountered error when macroexpanding hyperfiddle.electric/boot.
Unable to resolve symbol: Pages
{:file "user_main.cljc", :in [(Pages. page)]}
ExceptionInfo: Unable to resolve symbol: Pages
```

