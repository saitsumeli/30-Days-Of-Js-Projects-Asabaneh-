// Egzersiz Seviye 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//1-E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
let [E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp] = constants
console.log(E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp)
//2-fin, est, sw, den veya nor olarak ülkeler dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)
//3-Dikdörtgen nesnesini özelliklerine veya anahtarlarına göre destructuring işlemi uygulayın.
let {width,height,area,perimeter} = rectangle
console.log(width,height,area,perimeter)

// Egzersiz Seviye 2 
//1-Kullanıcılar dizisini Iterator ve destructuring kullanarak nesnenin tüm anahtarlarını alın.
for (const {name, score, skills, age} of users) {
    console.log(name, score, skills, age)
}
//2-İkiden az beceriye sahip kişileri bulun.
for (const {name, score, skills, age} of users) {
    if(skills.length<= 2) {
        console.log(name, score, skills, age)
    }
}

// Egzersiz Seviye 3 
//1-Tüm ülkelerin adını, sermayesini, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın
const countriesAll = [['Finland','Fince','5.4M'], ['Estonia','Estonca','6M'], ['Sweden','İsveççe','9M'], ['Denmark','Danimarkaca','15M'], ['Norway','Norveççe','14M']]
const [fin2, est2, sw2, den2, nor2] = countriesAll
console.log(fin2, est2, sw2, den2, nor2)
//2-Küçük bir geliştirici, öğrenci adını, becerilerini ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır.Aşağıdaki dizi adını ada, beceriler dizisini becerilere, puan dizisini puanlara, JavaScript puanını jsScore'a ve React puanını React değişkenine tek bir satırda destructuring işlemi uygulayın.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name,skills,jsScore] = student
console.log(name,skills,jsScore)
//3-Diziyi bir structure nesnesine dönüştürebilen convertArrayToObject adlı bir fonksiyon yazın.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
const newStudents = new Set(students)
console.log(newStudents)

const {namess,skilss,score} = {newStudents}
console.log(namess,skilss,score)
