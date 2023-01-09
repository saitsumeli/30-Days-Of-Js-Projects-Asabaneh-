// Egzersiz Seviye 1

/*1-prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, 
geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 
18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin. */

let yaşiniz = prompt("Yaşinizi Giriniz(Ehliyet)");
if (yaşiniz >= 18) {
  console.log("Ehliyet alabilirsiniz");
} else {
  console.log(`${18 - yaşiniz} yil beklemelisiniz`);
}

/*2- if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. 
Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. 
Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın. */

let myAge = 24;
let yourAge = prompt("Yaşinizi Giriniz(Yaş Karşilaştirmasi)");

if (myAge > yourAge) {
  console.log(`${myAge - yourAge} yaş sizden büyüğüm`);
} else {
  console.log(`${yourAge - myAge} yaş benden büyüksünüz`);
}

//3- a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın

let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a},${b}'den büyüktür`);
} else {
  console.log(`${a},${b}'den küçüktür`);
}

//4-Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığın bulunuz.

let numara = prompt("bir sayi giriniz(Tek Çift)");
if (numara % 2 == 0) {
  console.log(`${numara} bir çift sayidir`);
} else {
  console.log(`${numara} bir tek sayidir`);
}

// Egzersiz Seviye 2

/* 1- 
Öğrencilere puanlarına göre not verebilecek bir kod yazın:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F  */

let puaniniz = prompt("Puaninizi Giriniz");
if (puaniniz >= 80 && puaniniz <= 100) {
  console.log("A");
} else if (puaniniz >= 70 && puaniniz <= 89) {
  console.log("B");
} else if (puaniniz >= 60 && puaniniz <= 69) {
  console.log("C");
} else if (puaniniz >= 50 && puaniniz <= 59) {
  console.log("D");
} else if (puaniniz >= 0 && puaniniz <= 49) {
  console.log("F");
} else {
  console.log("Sayi Giriniz");
}

/* Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Değerler :

Eylül, Ekim veya Kasım, mevsim sonbahardır.
Aralık, Ocak veya Şubat, mevsim kıştır.
Mart, Nisan veya Mayıs mevsimi bahardır
Haziran, Temmuz veya Ağustos, mevsim yazdır */

let mevsim = prompt("Bir Ay Giriniz");
let mevsimBulmak = mevsim.toLowerCase();
switch (mevsim) {
  case "Aralik":
  case "Ocak":
  case "Şubat":
    console.log("Kiş");
    break;
  case "Mart":
  case "Nisan":
  case "Mayis":
    console.log("Bahar");
    break;
  case "Haziran":
  case "Temmuz":
  case "Ağustos":
    console.log("Yaz");
    break;
  case "Eylül":
  case "Ekim":
  case "Kasim":
    console.log("Sonbahar");
    break;
  default:
    console.log("Mevsim Giriniz");
}

// Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.

let günler = prompt("bir gün giriniz");
switch (günler) {
  case "Pazartesi":
  case "Sali":
  case "Çarşamba":
  case "Perşembe":
  case "Cuma":
    console.log("haftaiçi");
    break;
  case "Cumartesi":
  case "Pazar":
    console.log("haftasonu");
    break;
  default:
    console.log("Bir gün girin");
}

// Bir aydaki gün sayısını söyleyen bir program yazın.

let ayGünSayisi = prompt("Bir Ay Giriniz(Gün Sayisi)");
switch (ayGünSayisi) {
  case "Ocak":
  case "Mart":
  case "Mayis":
  case "Temmuz":
  case "Eylül":
  case "Kasim":
    console.log("Bu Ay 31 Gündür");
    break;
  case "Nisan":
  case "Haziran":
  case "Ağustos":
  case "Ekim":
    console.log("Bu Ay 30 Gündür");
    break;
  case "Şubat":
    console.log("Bu Ay 28 Gündür");
 default:
    console.log('Bir Ay Giriniz')
}