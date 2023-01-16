// Egzersiz Seviye 1
//1-while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.
let i = 0 
while(i<=10) {
    console.log(i)
    i++
}
//2-while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.
let i2 = 10
while (i2 >= 0) {
    console.log(i2)
    i2--
}
//3-0'dan n' e kadar giden bir for döngüsü kurun.
for(let i3 = 0; i3<=5; i3++) {
console.log(i3)
}
//4-Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.
/* for(let i4 = 1; i4<=10; i4*1) {
    console.log(`${i4*10}`)
} */ 

//5- Aşağıdaki çıktıyı almak için bir döngü kurun:
/* 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */ 

for (let i5=0; i5<=10; i5++) {
    console.log(`${i5}*${i5}=${i5*i5}`)
}

//6-Aşağıdaki çıktıyı almak için bir döngü kurun:
/*  i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */ 

for (let i6=0; i6<=10; i6++) {
    console.log(`${i6} ${i6*i6} ${i6*i6*i6}`)
}

//7- 0'dan 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.
for(let i7 = 0; i7<=50; i7++) {
    console.log(`${i7*2}`)
}

//8- 0'dan 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın
for(let i8 = 1; i8<=50; i8=i8+2) {
    console.log(i8)
}

//9- 0'dan 100'e kadar olan asal sayıları bir döngü yardımı ile ekrana yazdırın
//??

//10-0 ile 100 arasındaki tüm sayıların toplamını ekrana yazıdırn
let sum = 0 
for(let i10=0; i10<=100; i10++){
    sum = sum + i10
    console.log(sum)
}

//11-0 ile 100 arasındaki tek ve çift sayıların toplamını bulun
let sum2 = 0
for ( let i11=1; i11<=100; i11+=2) {
    console.log(sum2=sum2+i11) // tek sayıların toplamı
}
let sum3 = 0
for ( let i12=0; i12<=100; i12+=2) {
    console.log(sum3=sum3+i12) // çift sayıların toplamı
}

// Egzersiz Seviye 2 
/* 1-Herhangi bir sayıda rastgele id numarası atayan bir fonksiyon yazın
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
2-Rastgele hexadecimal sayı üreten bir fonksiyon yazın.
'#ee33df'
3-Rastgele bir rgb renk numarası oluşturan fonksiyon yazın.
rgb(240,180,80) */ 

let ülkeler = ["ALBANIA", "BOLİVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//4- Yukarıdaki array'i kullanarak rastgele yeni bir dizi oluşturun.
//??
//5-Yukarıdaki array'i kullanarak ülkelerin harf uzunluklarını içeren bir dizi olşturun'.
const newArr = []
for (let i13=0; i13<=ülkeler.length-1; i13++) {
    newArr.push(ülkeler[i13].length)
}
console.log(newArr)

//6-Yukarıdaki diziyi kullanarak aşağıdaki diziyi oluşturun:
const newArr2=[]
for(let i14=0; i14<=ülkeler.length-1; i14++){
    newArr2.push(ülkeler[i14], ülkeler[i14].slice(0,3), ülkeler[i14].length)
}
console.log(newArr2)
/*   [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */ // Bir şey tam olmadı sor onu

// 7- Yukarıdaki ülkeler dizisinde "land" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "land" içeren ülkeler varsa bunu dizi halinde yazdırın.
  const newArr6 = ülkeler.filter(country => {
   if(country.includes('LAND')){
    return country
   }
})
console.log(newArr6) 

const newArrr = []
for(let i = 0; i<ülkeler.length -1; i++ ) {
    if(ülkeler[i].includes('LAND')) {
        newArrr.push(ülkeler[i])
    }
}
console.log(newArrr)
//8-Yukarıdaki ülkeler dizisinde "ia" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "ia" içeren ülkeler varsa bunu dizi halinde yazdırın..
const newAr = []
for(let i =0; i<ülkeler.length -1; i++) {
    if(ülkeler[i].includes('IA')) {
        newAr.push(ülkeler[i])
    }
}
console.log(newAr)
//9-Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.
//(5 tek gibi uzunluklarını bulur sonrasında çekerim.) -Farklı bir şeyi varsa sor
//10-Yukarıdaki ülkeler dizisini kullanarak, yalnızca 5 karakter içeren ülkeyi bulun.
//(5 tek gibi uzunluklarını bulur sonrasında çekerim.) -Farklı bir şeyi varsa sor

// Egzersiz Seviye 3
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

//1-countries array inden en uzun karakterli ülkeyi bulun
let newString = ''
for(let i = 0; i<ülkeler.length -1; i++) {
    if(ülkeler[i].length>newString.length) {
        newString = ülkeler[i]
    }
}
console.log(newString)
//2-countries array inde 4 karakterli ülkeleri yazdırın
const newAr2 = []
for(let i=0; i<ülkeler.length; i++) {
    if(ülkeler[i].length===5) {
        newAr2.push(ülkeler[i])
    }
}
console.log(newAr2)

const newAr3 = ülkeler.filter(country => {
    return country.length===5
})
console.log(newAr3)
//3-countries array i ters çevirin ve ülkelerin tüm harflerini büyük hale gertirin
const newArr5 = []
for(let i16=0; i16<=ülkeler.length-1; i16++) {
    newArr5.push(countries[i16].toUpperCase())
}
console.log(newArr5)


