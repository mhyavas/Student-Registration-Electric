## Student Registration App with Electric and Datascript
Student Registration App iki farklı veri kaydı tutuyor. Bunlar öğrencilerin listesi ve derslerin listesidir.
Öğrenciler sadece tek bir departmana kayıtlı olabilirler ve öğrencilerin kayıtları db'de 
```clojure
[:student/id :student/name :student/department]
```
yukarıdaki şekilde "student" namespace'i altında tutuluyor.
Derslerin kayıtları ise 
```clojure
[:course/id :course/code :course/name :course/department]
```
"course" namespace'i altında tutuluyor. Bir ders birden fazla departmanda verilebileceğinden derslerin departman kayıtları collection şeklinde tutuluyor.
DB'den query ile departman filtrelemesi yaptığımız zaman datomic ile datascript arasındaki farklılıklardan dolayı hatalar oluştu. Bu hataları input ve hatalarıyla beraber  /src/notebooks/e01.clj 
dosyasında tutuyorum.

Bu projede fonksiyonların server tarafında mı yoksa client tarafında mı çalışacağını ayırt etmek başlangıçta zorladı. Sonrasında DB fonksiyonu ise server diğer tüm fonksiyonlar client tarafında çalışır dedim.
Bu düşünce başlangıçta hayat kurtardı.

Bu projede hyperfiddle'ın CRUD scriptini temel alarak kodladım.

[Hyperfiddle reposu](https://github.com/hyperfiddle/electric/blob/master/src-docs/user/tutorial_7guis_5_crud.cljc)

CRUD atom db kullanılarak oluşturulmuş. Bunun yanına datascript ile memory based db oluşturdum.

Projenin başlangıcında datomic ile çalışmayı hedeflemiştim. Ama DB bağlantılarını robust şekilde kuramadım.
Hyperfiddle'ın diğer repolarında datascript ile kurulan db modellerini CRUD'a ekledim.
En basit datascript implemantasyonu [todos_simple](https://github.com/hyperfiddle/electric/blob/master/src-docs/user/demo_todos_simple.cljc) projesinde buldum.


Projedeki en temel hatalardan bir tanesi Stale Output hatasıdır. Configuration ya da RAM hatalarından kaynaklandığını buldum.
Geçici çözüm olarak bilgisayarı yeniden başlatarak projeyi tekrardan çalıştırıyorum. ![Örnek hata görüntüsü](https://i.stack.imgur.com/NQvVn.png)

