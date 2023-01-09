// Seviye 1 Egzersizler

//1-boş bir dizi yaratın;
let boş = []
console.log(boş)
//2-Eleman sayısı 5'ten fazla olan bir dizi yaratın.
let beş = ['bir', 'iki', 'üç', 'dört', 'beş']
console.log(beş)
//3-Yarattığınız dizinin uzunluğunu bulun ( length ).
console.log(beş.length)
//4-Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun.
console.log(beş[0]) // ilk
console.log(beş[2]) // orta 
let lastİndex = beş.length - 1
lastBeş = beş[lastİndex] // son elemanı bulma
console.log(lastBeş)
//5-mixedDataTypes adında bir dizi yaratın,dizinin içine farklı veri tiplerinde elemanlar koyun ve bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır.
let mixedDataTypes = ['CSS','JS','C#','Jas','Python']
console.log(mixedDataTypes)
//6-ItCompanies adlı bir dizi değişkeni oluşturun ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç değerleri atayın.
let ItCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
//7-console.log() kullanarak dizinizi yazdırın.
console.log(ItCompanies)
//8-Dizinin içindeki şirketlerin sayısın yazdırın.
console.log(ItCompanies.length)
//9-Dizinin içindeki ilk, ortadaki ve son elemanı yazdırın.
console.log(ItCompanies[0]) // ilk
console.log(ItCompanies[4]) // orta
lastIndexCompanies = ItCompanies.length - 1 
lastCompanies = ItCompanies[lastIndexCompanies] // son 
console.log(lastCompanies)
//10-Dizideki her şirketi yazdırın.
console.log(ItCompanies[0])
console.log(ItCompanies[1])
console.log(ItCompanies[2])
console.log(ItCompanies[3])
console.log(ItCompanies[4])
console.log(ItCompanies[5])
console.log(ItCompanies[6])
//11-Her bir şirketin adını tek tek büyük harfleri ile değişterin ( ör: facebook -> FACEBOOK) ve her birini yazdırın.
for(let i = 0; i<ItCompanies.length; i++) {
    console.log(ItCompanies[i].toUpperCase())
}
//12-Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(ItCompanies.toString())
//13-itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin. Varsa şirketi geri döndürün, aksi takdirde not found geri döndürün.
for(let i = 0; i<ItCompanies.length; i++) {
    console.log(ItCompanies[i].indexOf('Facebook'))
}
//14-Birden fazla 'o' harfi içeren şirketleri filter metodunu kullanmadan filtreleyin.
//??
//15-sort() metodunu kullanarak diziyi sıralayın.
console.log(ItCompanies.sort())
//16-reverse() metodunu kullanarak diziyi tersine çevirin.
console.log(ItCompanies.reverse())
//17-Diziden ilk 3 şirketi dilimleyin ( Slice edin ).
console.log(ItCompanies.slice(0,3))
//18-Diziden son 3 şirketi dilimleyin ( Slice edin ).
console.log(ItCompanies.slice(4,7))
//19-Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin ).
console.log(ItCompanies.slice(4,6))
//20-İlk IT şirketini diziden kaldırın.
ItCompanies.shift()
console.log(ItCompanies)
//21-Ortadaki IT şirketini ya da şirketlerini diziden kaldırın.
ItCompanies.splice(3)
console.log(ItCompanies)
//22-Sondaki IT şirketini diziden kaldırın.
ItCompanies.pop()
console.log(ItCompanies)
//23-Bütün IT şirketlerini kaldırın.
console.log(ItCompanies.splice()) 

// Egzersiz Seviye 2 

//1-Önce bütün noktalama işaretlerini kaldırın ve ve string ifadeyi dizi olarak değiştirin ve dizideki kelime sayısını sayın.
let  text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
function istenmeyenKarakterler() {
    const boş = [];
    const istenmeyen = ". , , ";
    for (const char of text) {
      if (!istenmeyen.includes(char)) {
        boş.push(char);
      }
      } return boş.join('')
  }
  console.log(istenmeyenKarakterler(text))

let textArray = text.split(',') // Diziye çevirmek..
console.log(textArray)
console.log(textArray.length)


const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//1-Eğer alışveriş sepetine zaten 'Meat' eklenmemişse en başa ekleyin.
shoppingCart.unshift('Meat')
console.log(shoppingCart)
//2-Eğer alışveriş sepetine zaten 'Sugar' eklenmemişse en sona ekleyin.
shoppingCart.push('Sugar')
console.log(shoppingCart)
//3-Eğer bala alerjiniz varsa 'Honey' elemanını diziden silin.
//??
//4-'Tea' elemanını 'Green Tea' olarak güncelleyin.
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)



const  countries = [
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

// 1-countries dizisinde 'Ethiopia' olup olmadığını kontrol edin. Eğer varsa 'ETHIOPIA' yazdırın. eğer yoksa bunu countries dizisine ekleyin.
console.log(countries.indexOf('Ethiopia'))

    const  webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]
    
//2- webTechs dizisinde Sass olup olmadığını kontrol edin eğer varsa 'Sass is a CSS preprocess' yazdırın. Eğer yoksa diziye Sass elemanını ekleyip diziyi yazdırın
console.log(webTechs.indexOf('Sass'))
webTechs.unshift('Sass')
console.log(webTechs)

//3- Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde atayın. (concat ile yapıyoruz)
const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const  backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Egzersiz Seviye 3 


const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//1-Diziyi sıralayın ve en küçük ve en büyük yaşı bulun.
ages.sort()
console.log(ages)
//2-Medyan yaşı bulun(dizinin ortasındaki eleman ama ortada iki eleman varsa elemanlar ikiye bölünür)
console.log(ages[4])
//3-Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)
let sum = 0
for(let i = 0; i<ages.length; i++) {
    sum = sum + ages[i]
    console.log(sum)
    console.log(sum/10)
} 
//4-Yaş aralığını bulun (maks - min)
let a = ages[0]
let b = ages[9]
let yasAraliği = (`${a}-${b}`)
console.log(yasAraliği)
//5-abs() metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın,
// ??

//1-countries array dizisinden ilk 10 ülkeyi dilimleyin ( Slice edin )
console.log(countries.slice(0,10))
//2-countries array dizisinden ortadaki ülkeleri bulun.
// Ortadakileri bulmak için farklı bir şey var mı?? 