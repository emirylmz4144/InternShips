## QA FİNAL CASE

#### Proje Detayı ve Ana Hatlar
 
Projede 'ebebek' adlı siteye girip birkaç adet test senaryosu 
oluşturacağız.
Oluşturulan Projede iki adet modul bulunmakta bir modul'de
girilen sitedeki her test aşamasında açılan sayfalar için sınıf
oluşturulmuştur bunun sebebi ise girilen her sayfa kendisine ait
bir nesnedir bu sebepten dolayı açılan her sayfa için bir sayfa oluşturulup
ve test aşamaları bu sayfalarda ayrı ayrı yapılır

---

---


### 1-main module
#### pages package

--- 
1) ```
   BasePage
   ```
   ```
   Bu sınıfımızda test işleminde yapacağımız tıklama doğrulama vs...
   gibi işlemlerimizin methodları oluşturulmuştur. bu metotları oluşturma
   sebebimiz ise daha kullanışlı Solid prensiplerine uyan sınıfların
   alakasız kodları kapsamayıp her sınıfın belli bir işlevi üstlenmesini
   sağlamaktır

   ```
   
---

2) ```
   HomePage-CardPage-MemberPage-SearchBox
   ProductDetailsPage-ProductPage
   ```
   ```
    Bu sınıflarımız ise test işleminde karşımıza çıkan her sayfanın
   sınıflarıdır OOP manatığı ve Solid kuralları gereğince zaten 
   her başlıca sayfanın kendisine ait özellikleri olduğundan
   açılan her sayfa bir sınıfa atanır ve yapılacak işlemler
   (metotlar) ilgili sayfaya tanımlanır 
   ```

---

#### logger package
1) ```
   Log Sınıfı ve Detayları
   ```
   ```
   Bu sınıfta ise loglama işleminde karşımıza çıkacak olan 
   testi geçme durumu,testin başarısız olma durumu gibi metotları
   oluşturuyoruz
   ```
---

--- 

### 2-test module

---

1) ```
   BaseTest Sınıfı ve detayları
   ```
   ```
   Bu sınıfımızda açılacak sitenin kurulumu , setUp'ı ve açılıp
   kapanması gibi kurulum aşamaları gerçekleştirilir
   ```
---

2) ```
   TestLogResult Sınıfı ve Detaylarlı
   ```
   ```
   Loglama işleminde testin başarılı olma durumu,başarısız olma durumu,
   atlanma gibi loglama işlemlerini gerçekleştireceğimiz metotlar
   ve bu metotların gerçekleşmesinde yani loglama işlemi yapıldığında
   karşımıza çıkacak mesajları oluştururuz
   
   ```
   
---

3) ```
   TestProductForCart Sınıfı ve Detayları
   ```
   ```
   Bizden istenen test senaryolarının metotlarını oluşturduğumuz 
   ve sırasıyla test senaryolarını gerçekleştirdiğimiz 
   Test'i çalıştıracağımız sınıfımızdır
   ```
---

---

---