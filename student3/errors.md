## Öğrenci kayıt sistemindeki DB bağlantı hatası

Datascript ile oluşturduğum memory db'sine data gönderemiyor ve query çalıştıramıyordum.
Electric içerinden server tarafındaki fonksiyonlar undeclared oluyordu.

Bu hatayı çıkaran kod:
```clojure
#?(:clj (defonce !conn (d/create-conn schema-dept)))
```
Connection'ı oluşutururken schemayı create-conn fonksiyonu input olarak alabildiği için göndermeyi denedim.

Kod bu yüzden bir türlü düzgün çalışmadı.

```clojure
#?(:clj (defonce !conn (d/create-conn {})))
```

Schemayı kaldırıp boş bir map ile connection kurduğumda ve sonrasında transact! fonksiyonu ile schemayı aktardığımda herhangi bir problem olmadı.