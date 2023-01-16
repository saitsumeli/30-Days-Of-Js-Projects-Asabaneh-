// Egzersiz Seviye 1

//1-Bir işlev fullName bildirin ve tam adınızı yazdırın.
function printFullName() {
  let fullName = "Sait Sumeli";
  console.log(fullName);
}
printFullName();
//2-Bir işlev fullName bildirin ve şimdi firstName, lastName'i parametre olarak alır ve tam adınızı döndürür.
function printFullName() {
  let firstName = "Sait";
  let lastName = "Sumeli";
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
printFullName();
//3-Bir işlev addNumbers bildirin ve iki iki parametre alır ve toplamı döndürür.
function printAddNumbers() {
  let numOne = 15;
  let numTwo = 20;
  let addNumbers = numOne + numTwo;
  console.log(addNumbers);
}
printAddNumbers();
//4-Bir dikdörtgenin alanı şu şekilde hesaplanır: alan = uzunluk x genişlik . areaOfRectangle değerini hesaplayan bir fonksiyon yazın .
function areaOfRectangle() {
  let uzunluk = 10;
  let genişlik = 5.6;
  let alan = uzunluk * genişlik;
  console.log(alan);
}
areaOfRectangle();
//5-Bir dikdörtgenin çevresi şu şekilde hesaplanır: çevre= 2x(uzunluk + genişlik) . perimeterOfRectangle değerini hesaplayan bir işlev yazın .
function perimeterOfRectangle() {
  let uzunluk = 10;
  let genişlik = 5;
  let çevre = 2 * (uzunluk + genişlik);
  console.log(çevre);
}
perimeterOfRectangle();
//6-Dikdörtgenler prizmasının hacmi şu şekilde hesaplanır: hacim = uzunluk x genişlik x yükseklik. volumeOfRectPrism'i hesaplayan bir fonksiyon yazın.
function volumeOfRectPrism() {
  let uzunluk = 10;
  let genişlik = 5;
  let yükseklik = 2;
  let hacim = uzunluk * yükseklik * genişlik;
  console.log(hacim);
}
volumeOfRectPrism();
//7-Dairenin alanı şu şekilde hesaplanır: alan = π xrxr . AreaOfCircle'ı hesaplayan bir fonksiyon yazın
function AreaOfCircle() {
  let r = 4;
  let alan = Math.PI * r * r;
  console.log(alan);
}
AreaOfCircle();
//8-Bir dairenin çevresi şu şekilde hesaplanır: çevre = 2πr . CircumOfCircle'ı hesaplayan bir fonksiyon yazın
function CircumOfCircle() {
  let r = 4;
  let çevre = 2 * Math.PI * r;
  console.log(çevre);
}
CircumOfCircle();
/*9-Vücut kitle indeksi (VKİ) şu şekilde hesaplanır: bmi = Kg cinsinden ağırlık / m2 cinsinden (boy x boy) .
Bmi'yi hesaplayan bir fonksiyon yazınız . 
BMI, 20 yaş ve üzerindeki yetişkinlerde farklı ağırlık gruplarını geniş bir şekilde tanımlamak için kullanılır .
Aşağıda verilen bilgilere göre bir kişinin zayıf, normal, fazla kilolu veya obez olup olmadığını kontrol edin.
Aynı gruplar hem erkekler hem de kadınlar için geçerlidir.

Zayıf : BMI 18.5'ten az
Normal ağırlık : BMI 18,5 ila 24,9
Fazla kilolu : BMI 25 ila 29.9
Obez : BMI 30 veya daha fazla*/
/* function vki() {
  let kilo = prompt("Kilonuzu Giriniz");
  let boy = prompt("Boyunuzu Giriniz");
  let kitle = kilo / (boy * boy);
  console.log(kitle);
  if (kitle <= 18.5) {
    return console.log("Zayıfsınız");
  } else if (kitle >= 18.5 && kitle <= 24.9) {
    return console.log("Ağırlığınız Normal");
  } else if (kitle >= 25 && kitle <= 29) {
    return console.log("Fazla Kilolusunuz");
  } else if (kitle >= 30) {
    return console.log("Obezsiniz");
  } else {
    return console.log("Bulunamadi");
  }
}
vki(); */ 
//10-Math.max en büyük bağımsız değişkenini döndürür. Math.max yöntemini kullanmadan üç bağımsız değişken alan ve bunların maksimum değerini döndüren bir findMax işlevi yazın.
function max() {
  let a = 10 
  let b = 11
  let c = 12 
  if(a> b && c ) {
    return console.log(a)
  } else if ( b > c && a) {
    return console.log(b)
  } else if (c > a && b) {
    return console.log(c)
  }
}
max()

// Egzersiz Seviye 2 

/* //1- Lineer denklem şu şekilde hesaplanır: ax + by + c = 0 . Bir lineer denklemin değerini hesaplayan bir fonksiyon yazın, solventLinEquation .
function solventLinEquation(a,b){
    let = ax + by + c 
    console.log(c) 
}
solventLinEquation(5,4)
//2-İkinci dereceden denklem şu şekilde hesaplanır: ax2 + bx + c = 0 . İkinci dereceden bir denklemin değerini veya değerlerini hesaplayan bir fonksiyon yazın, solventQuadEquation . */ 
/* console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0} */ 

//3- Bir işlev adı bildirin printArray . Diziyi parametre olarak alır ve dizinin her değerini yazdırır.
/* function printArray(){
    const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
    const newArr = []
    newArr.push(countries)
}
printArray() */

//4-Date nesnesini kullanarak zamanı şu biçimde gösteren showDateTime işlev adını yazın : 08/01/2020 04:08.
function showDateTime() {
    const now  = new Date
    console.log(now)
}
showDateTime()

//5- Bir işlev adı tanımlayın swapValues ​​. Bu işlev, x'in değerini y'ye değiştirir.
function swapValues(a,b) {
    let a = 5
    let b = 6
    
}

