Movie Explorer - Vue.js Web Application
Proje Açıklaması
Movie Explorer, Vue.js kullanılarak geliştirilmiş bir dinamik film keşif ve detaylandırma web uygulamasıdır. Bu proje, modern web teknolojileriyle film ve oyuncu bilgilerini kullanıcı dostu bir şekilde sunmayı amaçlamaktadır. Uygulama, JSON tabanlı veri kaynağından aldığı bilgilerle, dinamik olarak film ve oyuncu detaylarını görüntüler ve kullanıcıların farklı bileşenler arasında sorunsuz bir şekilde gezinmesini sağlar.

Proje Özellikleri
Dinamik Film ve Oyuncu Detayları:

JSON dosyasından alınan verilerle film ve oyuncu bilgilerini dinamik olarak yükler.
Kullanıcılar, filmlere tıklayarak detay sayfasına, oyuncu detaylarına tıklayarak ilgili oyuncunun bilgilerine ulaşabilir.
Vue.js Kullanımı:

Vue Router sayesinde kullanıcı, sayfa yenilenmeden farklı bileşenler arasında geçiş yapabilir.
Vue.js'nin reaktif özellikleriyle veri değişimlerini anında yansıtarak kullanıcıya hızlı bir deneyim sunar.
CSS ile Özelleştirilmiş Arayüz:

style.css ile kullanıcı dostu ve modern bir arayüz tasarlanmıştır.
Film detaylarında, arka plan resimleri dinamik olarak ayarlanır.
Tekrar Kullanılabilir Kod:

utils.js dosyası ile tekrar eden fonksiyonlar (örneğin, yıldız derecelendirme) bir kez tanımlanmış ve farklı bileşenlerde kullanılmıştır.
Kullanılan Teknolojiler
Vue.js:

Kullanıcı arayüzü geliştirmek için kullanılan JavaScript framework'ü.
Reaktif veri yönetimi ve bileşen tabanlı mimari ile hızlı ve dinamik uygulamalar geliştirilmesini sağlar.
Vue Router:

Tek sayfa uygulamalarda (SPA) dinamik yönlendirme işlemleri için kullanılır.
Kullanıcının sayfa yenilenmeden farklı içeriklere erişmesini sağlar.
JavaScript (ES6):
Modern JavaScript özellikleri (ör. fetch, arrow functions) kullanılarak veri işleme ve bileşenler arası iletişim sağlanmıştır.

CSS:
Web sitesinin modern ve kullanıcı dostu bir görünüme sahip olması için özelleştirilmiş stiller yazılmıştır.

JSON:
Film ve oyuncu verileri, movie.json dosyasından alınır ve uygulama bu dosyayı bir veri kaynağı olarak kullanır.

Proje Yapısı
index.html:
Web uygulamasının ana yapısını ve genel navigasyonu tanımlar.
Vue.js ve Vue Router CDN bağlantılarını içerir.
<router-view> ile dinamik içerik görüntüleme sağlanır.

app.js:
Vue Router yapılandırması ve uygulama başlangıç ayarlarını içerir.
Bileşenlerin rotalarını (Home, MovieDetail, ActorDetail) tanımlar.

Home.js:
Ana sayfayı oluşturur ve JSON dosyasındaki film bilgilerini dinamik olarak listeler.
Filmlere tıklanıldığında, detay sayfasına yönlendirme sağlar.

MovieDetail.js:
Filmin detay bilgilerini (ör. isim, puan, açıklama) görüntüler.
Film oyuncularını listeleyerek her oyuncunun detayına erişim sunar.

ActorDetail.js:
Oyuncu bilgilerini görüntüler (ör. isim, doğum tarihi, oynadığı karakter).
Home sayfasına geri dönüş için bir navigasyon butonu içerir.

utils.js:
Tekrar eden işlemleri yöneten yardımcı fonksiyonları içerir (ör. yıldız derecelendirme fonksiyonu).

style.css:
Web sitesinin görsel tasarımını ve düzenini sağlar.
Film kartları ve detay sayfalarına özel CSS stilleri içerir.

movie.json:
Film ve oyuncu bilgilerini içeren veri dosyası.

images/:
Film ve oyuncu görsellerinin saklandığı klasör.


Kurulum ve Kullanım
Projeyi Klonlayın:

Kodu kopyala
git clone https://github.com/username/movie-explorer.git
cd movie-explorer
Gerekli Bağımlılıkları Kurun: Bu proje herhangi bir build sürecine ihtiyaç duymaz. Tarayıcınızda çalıştırabilirsiniz.

JSON ve Görselleri Yerleştirin:

movie.json dosyasını doğru bir dizine yerleştirin.
Görsellerinizi images klasörüne ekleyin.
Projeyi Çalıştırın: Bir yerel sunucu başlatın. Örneğin:


Kodu kopyala
npx serve .
Uygulamayı Tarayıcıda Açın:


Kodu kopyala
http://localhost:5000

Örnek Kullanım
Ana Sayfa: Tüm filmler listelenir ve her biri tıklanabilir.
Film Detay Sayfası: Film bilgileri ve oyuncu listesi görüntülenir.
Oyuncu Detay Sayfası: Seçilen oyuncunun detay bilgileri ve oynadığı film bilgileri yer alır.

Gelecekteki Geliştirmeler
Kullanıcı giriş/çıkış sistemi eklenebilir.
Gerçek bir API ile dinamik veri entegrasyonu sağlanabilir.
Daha gelişmiş bir tasarım ve responsive özellikler eklenebilir.
