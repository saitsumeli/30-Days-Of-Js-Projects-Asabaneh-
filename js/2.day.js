// Egzersiz Seviye 1

//1-firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturma ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
let firstName = 'Sait'
let lastName = 'Sumeli'
let country = 'Türkiye'
let city = 'İstanbul'
let age = '24'
let isMarried = 

console.log(typeof firstName)
console.log(typeof 'Sait')
console.log(typeof country)
console.log(typeof city)
console.log(typeof '24')
console.log(typeof isMarried)
console.log(typeof 24)
//2-'10' modellemenin 10'a eşit olup olmadığını kontrol edin
let num = 10
console.log(num==10) // true
//3-parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
let num2 = 9.8
let numFloat = parseInt(num2)
console.log(numFloat)
console.log(numFloat==10) // false
//4-Boole değeri, doğru veya yanlıştır.
//-Doğruluk değeri sağlayan üç JavaScript anlatım yazın.
//-Yanlış değer sağlayan üç JavaScript anlatım yazın.
console.log(Boolean('sait'))
console.log(Boolean('24'))
console.log(Boolean('.'))
console.log(Boolean(''))
//5-console.log() kullanmadan önce aşağıdaki karşılaştırmanın özelliklerini bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
console.log(4 > 3) //t
console.log(4 >= 3) //t
console.log(4 < 3) //f
console.log(4 <= 3) //f
console.log(4 == 4) //t
console.log(4 === 4) //t
console.log(4 != 4) //f
console.log(4 !== 4) //f
console.log(4 != '4') //f
console.log(4 == '4') //t
console.log (4 === '4') //f

let python = 'python'
let jargon = 'jargon'
console.log(python.length)
console.log(jargon.length)
console.log(python==jargon)

//6-console.log() kullanmadan önce aşağıdaki ifadelerin bileşenlerini bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.

console.log(4 > 3 && 10 < 12) // t t t 
console.log(4 > 3 && 10 > 12) // t f f
console.log(4 > 3 || 10 < 12) // t t t 
console.log(4 > 3 || 10 > 12) // t f t
console.log(!(4 > 3)) // f
console.log(!(4 < 3)) // t 
console.log(!(4 > 3 && 10 < 12)) // t f f
console.log(!(4 > 3 && 10 > 12)) // t t t 
console.log(!(4 === '4')) // t

//Hem dragon hem de python'da 'on' yoktur. ??

//7-Aşağıdakileri yapmak için Date nesnesini kullanın.
//Bugün yıl nedir?
const now = new Date()
console.log(now.getFullYear())
//Bugünün ayı rakam olarak nedir?
const ay = new Date()
console.log(ay.getMonth())
//Bugünün tarihi nedir?
const tarih = new Date()
console.log(tarih)
//Bugün sayı olarak gün nedir?
const tarih2 = new Date()
console.log(tarih2.getDate())
//Şimdi saat kaç?
const saat = new Date()
console.log(saat.getHours())
//Dakikalar kaç şimdi?
const dakika = new Date()
console.log(dakika.getMinutes())
//1 Ocak 1970'den bugüne kadar geçen saniyeyi hak ediyor.
const süre = new Date()
console.log(süre.getTime()) 

//Egzersiz Seviye 2 
//1-Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin genişliğini hesaplamasını isteyen bir komut çalıştırma yazın 
let a = 20
let b = 10
let üçgenAlan = (a*b*0.5)
console.log(üçgenAlan)

//2-Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın 
let c = 20
let d = 10
let f = 5
let çevre = (c+d+f)
console.log(çevre)

//3-Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın

let a1 = 10
let b1 = 20
let dikdörtgenAlan = (a1*b1)
console.log(dikdörtgenAlan)

//4-Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.

let r = 5
let pi = 3.14
let daireAlan = (pi*r*r)
let daireÇevre = (2*pi*r)
console.log(daireAlan)
console.log(daireÇevre)

/* y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın

Eğim m = (y2-y1)/(x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
*/ 

//9-Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?
let saatBaşı = 40
let çalışmaSaati = 8
let maaş = (saatBaşı*çalışmaSaati)
console.log(maaş)

//10-Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.

let name = 'Sait'
name.length > 0
? console.log('Adınız 7 harften az')
: console.log('Adınız 7 harften çok')

//11-Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

let isim = 'sait'
let soyİsim = 'sumeli'
isim.length < soyİsim.length
? console.log('isminiz soy isminizden azdır')
: console.log('isminiz soy isminizden fazladır')

//12-İki değişken myAge ve yourAge bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.
let myAge = 250
let yourAge = 25
const fark = `benim yaşım ${250} senin yaşından ${myAge-yourAge} fazladır`
console.log(fark) // bunda sor..
//13-İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
let ageInput = prompt('yaşınızı giriniz')
switch(true) {
    case ageInput >= 18 : 
    console.log('Araba Sürebilirsiniz')
    break
    case ageInput < 18 : 
    console.log( 18-ageInput , ' yıl daha beklemelisiniz ')
    break
    default :
    console.log('Yaşınızı Giriniz')
}
//14-Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

let yaşHesaplama = prompt('yaşını gir')
let x = 100 - yaşHesaplama
let y = x*60*60
console.log(y)