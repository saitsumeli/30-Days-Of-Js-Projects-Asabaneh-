// Egzersiz Seviye 1 

//1-boş bir küme oluştur
const boş = new Set()
console.log(boş)
//2-Döngü kullanarak 0 ila 10 içeren bir küme oluşturun
const numbers = [0,1,2,3,4,5,6,7,8,9,10]
const newNumbers = new Set(numbers)
console.log(newNumbers)
//3-Bir kümeden bir öğeyi kaldırma
console.log(newNumbers.delete(4))
console.log(newNumbers.size)
//4-Bir grubu temizle
newNumbers.clear()
console.log(newNumbers)
//5-Diziden 5 dize öğesinden oluşan bir dizi oluşturun
const countries = ['Finland', 'Sweden','Norway','Turkey','German','Berlin']
const newCountries = new Set(countries)
console.log(newCountries)
//6-Bir ülke haritası ve bir ülkenin karakter sayısını oluşturun (Create a map of countries and number of characters of a country)
countries2 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries2)
  console.log(map)
  console.log(map.size)

// Egzersiz Seviye 2
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

//1-Find a union b
let c = [...a,...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)
//2-Find a intersection b
let d = a.filter((num) => B.has(num))
let D = new Set(d)
console.log(D)
//3-Find a with b
let A1 = new Set(a)
let B1 = new Set(b)
let C1 = new Set(c)
console.log(C1)

// Egzersiz Seviye 3
//1-Ülkeler nesne dosyasında kaç tane dil var?
const language = ['English:91','French:45','Arabic:25','Spanish:24','Russian:9','Portuguese:9','Dutch:8','German:7','Chinese:5','Swahili:4','Serbian:4']
const SpokenLanguage = new Set(language)
console.log(SpokenLanguage.size)
//2-En çok konuşulan 10 dili bulmak için ülke verilerini kullanın:
for(let i = 0; i<language.length; i++) {
    console.log(language[i-1])
}
  /* // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]*/ 

