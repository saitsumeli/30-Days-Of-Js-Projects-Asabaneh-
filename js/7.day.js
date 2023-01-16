// Egzersiz Seviye 1

//1-köpek adında boş bir nesne oluşturun
let dog = {}
//2-Köpek nesnesini konsolda yazdır
console.log(dog)
//3-Köpek nesnesi için ad, bacaklar, renk, yaş ve kabuk özelliklerini ekleyin. bark özelliği, woof woof döndüren bir yöntemdir.
let dog2 = {
    name: 'Quaresma',
    bacak: 'Uzun',
    renk: 'Siyah',
    yaş: 4,
    tüy: 'Yumuşak'
}
//4-Köpek nesnesinden isim, bacak, renk, yaş ve kabuk değeri alın
console.log(dog2)
//5-Köpek nesnesinin yeni özelliklerini ayarlayın: cins, getDogInfo
dog2.cins = 'Tekir'
console.log(dog2)

// Egzersiz Seviye 2

//1-Oturum açmış kullanıcıları sayın, aşağıdaki nesneden 50'ye eşit puana sahip kullanıcıları sayın.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  console.log(users)
//3-users nesnesinden MERN yığın geliştiricisi olan kişileri bulun
//4-Orijinal users nesnesini değiştirmeden kullanıcılar nesnesinde adınızı ayarlayın
