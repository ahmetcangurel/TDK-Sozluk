# TDK - Türkçe Sözlük

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/your-project/blob/master/LICENSE) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> İlk olarak uygulamanın her yaş ve cinsiyet tarafından kullanılacağından hedef kitlenin “Genel” olduğunu kabul ettik. Bu nedenle, uygulamanın genel tasarım stilinde beyaz ve vurgu rengini kullanmaya karar verdik. Örneğin, mevcut uygulamanın Sözlük’te Ara ve Anasayfa navigasyonlarında ilişkisel olarak bir problem vardı. Biz Anasayfaya TDK’nın web sayfasında bulunan Bir Deyim ve Atasözü kartları konumlandırdık. Bu sayede bu problemin önüne geçmiş, uygulama anasayfası olarak burayı belirlemiş olduk. Mevcut uygulamanın Geçmiş ve Favori sayfalarına eklenmiş içeriklerin hangi türe (Atasözü, Birleşik Kelime ve Sözcük) ait oldukları belli değildi, bu nedenle altına kategorileri konumlandırdık.

>Diğer çözümlerle birlikte tasarımın son haline ulaştık. 



## Tasarımcılar / Designers

[Feyza Nur Demirci](https://twitter.com/corbieofthesoul) - UI/UX Designer
[Şahin Abut](https://twitter.com/sahinabut) - UI/UX Designer
## Klasör Yapısı / Folder structure 

- `src`: Bu klasör tüm uygulamanın kodlarını barındırır.
  - `assets`: Vektör vb dosyaların depolandığı klasör.
  - `Components`:Uygulamada kullanılan tüm bileşenler burada saklanmaktadır.
  - `hooks`: Veri çekme vb. fonksiyonların tutulduğu klasör.
  - `Navigation`: Uygulama içi navigasyon ve stilinin bulunduğu klasör.
  - `Redux`:Bu klasör uygulama içi veri yönetimi için oluşturulan `State`,`Reducers`ve `Store` dosyalarını içermektedir.
  - `Screens`: Ekranların ana dosyalarının bulunduğu ve oluşturulduğu klasör.
    - `AboutScreen`
    - `ContactScreen`
    - `DetailScreen`
    - `FavoriteScreen`
    - `HistoryScreen`
    - `InfoScreen`
    - `SearchDetailScreen`
    - `SearchScreen`
  - `utils`: Uygulamayla ilgili stil dosyalarının bulunduğu klasör.
  - `App.js`: Tüm uygulamayı başlatan ana bileşen.
- `index.js`: React-Native standartlarına göre uygulamanın giriş noktası.

## Gereklilikler / Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Bağımlılıklar / Base Dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [react-native-async-storage](https://redux.js.org/) for state management.
- [react-native-reanimated](https://redux.js.org/) for state management.
- [react-native-svg](https://redux.js.org/) for state management.
- [gorhom/bottom-sheet](https://redux.js.org/) for state management.

## Kurulum / Installation 

```bash
# Install dependencies
npm install

# If you are using a Mac and have issues with install, try:
brew install watchman

# Link native dependencies
react-native link

# Run the project on iOS
react-native run-ios

# Run the project on Android
react-native run-android
````

## Ekran Görüntüleri / Screenshots
>Proje daha bitmediği için tasarıma tam olarak uygun değil.
>Since the project is not finished yet, it does not fully comply with the design.

<div>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/home-screen.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230109_233909.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230101_003347.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230109_233943.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230105_210416.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230105_210536.png" width="200px"</img> 
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230101_003445.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230101_003453.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230101_003512.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230101_023135.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230101_023302.png" width="200px"</img>
    <img src="https://raw.githubusercontent.com/ahmetcangurel/TDK-Sozluk/main/screenshots/Screenshot_20230109_233610.png" width="200px"</img> 
</div>