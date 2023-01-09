// Egzersiz Seviye 1

//1-Challenge adında bir değişken tanımlayın ve '30 Days Of JavaScript' başlangıç ​​değerine atayın.
let challenge = "30 Days Of JavaScript";
//2-console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,
console.log(challenge);
//3-console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın,
console.log(challenge.length);
//4-toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,
console.log(challenge.toLocaleUpperCase());
//5-toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,
console.log(challenge.toLowerCase());
//6-substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)
console.log(challenge.substring(0, 3));
//7-Days Of JavaScript ifadesini 30 Days Of JavaScript'ten ayırın.
console.log(challenge.substring(3, 21));
//8-includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin
console.log(challenge.includes("Script"));
//9-split() yöntemini kullanarak string öğesini bir array'ye bölün
console.log(challenge.split());
//10-30 Days Of JavaScript dizesini split() yöntemini kullanarak boşlukta bölün
console.log(challenge.split(" "));
//11-'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.
let markalar = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(markalar.split(" "));
//12-replace() yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin.
console.log(challenge.replace("JavaScript", "Python"));
//13-'JavaScript'in 30 Günü' dizesinde dizin 15'teki karakter nedir? charAt() yöntemini kullanın.
console.log(challenge.charAt(15));
//14-charCodeAt() kullanan 'JavaScript'in 30 Günü' dizesindeki J karakter kodu nedir?
console.log(challenge.charCodeAt("J"));
//15-30 Days of JavaScript'te a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın
console.log(challenge.indexOf("30"));
//16-30 Days of JavaScript'te a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın.
console.log(challenge.lastIndexOf("JavaScript"));
//17-Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın:
let çünkü = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtir";
console.log(çünkü.indexOf("çünkü"));
//18-Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın:
let çünkü2 = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtir";
console.log(çünkü2.lastIndexOf("çünkü"));
//19-Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın:
let search = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtir";
console.log(search.search("çünkü"));
//20-Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '30 Days Of JavaScript'.
console.log(challenge.trim());
//21-30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
console.log(challenge.startsWith("30"));
//22-30 Days Of JavaScript dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın
console.log(challenge.endsWith("JavaScript"));
//23-JavaScript'in 30 Günü'ndeki tüm a'leri bulmak için match() yöntemini kullanın
console.log(challenge.match("a"));
//24-concat() kullanın ve '30 Days of' ve 'JavaScript'i tek bir dize olan '30 Days of JavaScript' ile birleştirin
let concat = "30";
console.log(concat.concat(" Days", " Of", " JavaScript"));
//25-30 Gün JavaScript'i 2 kez yazdırmak için repeat() yöntemini kullanın
console.log(challenge.repeat(2));

// Egzersiz Seviye 2

//1-console.log() kullanarak aşağıdaki ifadeyi yazdırın:
console.log(
  "The quote There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another."
);
//2-console.log()'u kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın:
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
//3-'10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
let num = 10;
console.log(num == 10);
//4-parseFloat('9.8') 10'a tam olarak eşit değilse, 10'a eşit olup olmadığını kontrol edin.
let num2 = "9.81";
let numFloat = parseFloat(num);
console.log(numFloat);
//5-Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
let python = "python";
let jargon = "jargonda";
console.log(python.match("on"), jargon.match("on")); // indexOf da olabilir
//6-Umarım bu kurs jargonla dolu değildir. Cümlede jargon olup olmadığını kontrol edin.
let jargon2 = "Umarim bu kurs jargonla dolu değildir.";
console.log(jargon2.search("jargon"));
//7-0 ile 100 arasında rastgele bir sayı üretin.
const num3 = Math.floor(Math.random() * 101);
console.log(num3);
//8-50 ile 100 arasında rastgele bir sayı üretin.
const num4 = Math.floor(Math.random() * 51 + 50); // ** Bu örnek güzel
console.log(num4);
//9-Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
const num5 = Math.floor(Math.random() * 256);
console.log(num5);
//10-Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
let JS = "JavaScript";
const num6 = Math.floor(Math.random() * 11);
console.log(num6);
console.log(JS[num6]); // Yapamamıştın sonra yaptın..
//11-Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın.
/* 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
//??
//12-substr kullanarak çünkü çünkü ifadesini aşağıdaki cümleden ayırın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
let ayirmak = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtir";
console.log(ayirmak.substr(12, 5));

// Egzersiz Seviye 3

//Bu cümledeki aşk kelimesini söyle.
let aşk =
  "Aşk bu ilerlemeyi en iyi şekilde sağlamak. bazı aşkları bulundu ve bazı hala aşkları aranıyor.";
console.log(aşk.match());
//Aşağıdaki cümledeki tüm çünkü zorlama saymak için match() kullanın:
let match = "Bir cümleyi çünkü ile bitiremezsiniz çünkü bir bağlaçtır";
console.log(match.match("çünkü"));
// Aşağıdaki temizleme metni ve en sık kullanılan kelimeyi bulun (ipucu, değiştirme ve normal ifadeleri kullanın).
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
function istenmeyenKarakterler() {
  const boş = [];
  const istenmeyen = "%, $, @, &, !, #";
  for (const char of sentence) {
    if (!istenmeyen.includes(char)) {
      boş.push(char);
    }
    } return boş.join('')
}
console.log(istenmeyenKarakterler(sentence))

// Aşağıdaki metinden çıkararak kişinin yıllık toplam gelirini hesaplayın.
let gelir =
  "Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.";

let a = 5000;
let b = 10000;
let c = 15000;

let toplam = `Aylık maaşından ${a} euro, yıllık ${b} euro ikramiye, ayda ${c} euro online kurstan kazanıyor.
toplam : ${a + b + c}`;
console.log(toplam);