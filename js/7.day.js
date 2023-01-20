// Egzersiz Seviye 1

//1-köpek adında boş bir nesne oluşturun
let dog = {};
//2-Köpek nesnesini konsolda yazdır
console.log(dog);
//3-Köpek nesnesi için ad, bacaklar, renk, yaş ve kabuk özelliklerini ekleyin. bark özelliği, woof woof döndüren bir yöntemdir.
let dog2 = {
  name: "Quaresma",
  bacak: "Uzun",
  renk: "Siyah",
  yaş: 4,
  tüy: "Yumuşak",
};
//4-Köpek nesnesinden isim, bacak, renk, yaş ve kabuk değeri alın
console.log(dog2);
//5-Köpek nesnesinin yeni özelliklerini ayarlayın: cins, getDogInfo
dog2.cins = "Tekir";
console.log(dog2);

// Egzersiz Seviye 2

//1-Oturum açmış kullanıcıları sayın, aşağıdaki nesneden 50'ye eşit puana sahip kullanıcıları sayın.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
console.log(users);

if (users.Alex.points === 50) {
  console.log(users.Alex);
}
if (users.Asab.points === 50) {
  console.log(users.Asab);
}
if (users.Brook.points === 50) {
  console.log(users.Brook);
}
if (users.Daniel.points === 50) {
  console.log(users.Daniel);
}
if (users.John.points === 50) {
  console.log(users.John);
}
if (users.Paul.points === 50) {
  console.log(users.Paul);
}
if (users.Thomas.points === 50) {
  console.log(users.Thomas);
}
//3-Orijinal users nesnesini değiştirmeden kullanıcılar nesnesinde adınızı ayarlayın
users.Sait = {
  email: "saitsumeli",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "Node",
  ],
  age: 24,
  isLoggedIn: false,
  points: 56,
}
//5-Kullanıcılar nesnesinin tüm anahtarlarını veya özelliklerini alın
const key = Object.keys(users)
console.log(key)
//6-Kullanıcı nesnesinin tüm değerlerini al
const keyUsers = Object.keys(users.Alex)
console.log(keyUsers)

// Egzersiz Seviye 3

//1-personAccount adlı bir değişmez nesne oluşturun . FirstName , lastName, gelirler, giderler özelliklerine sahiptir ve totalIncome

let personAccount = {
  firstName: 'Sait',
  lastName: 'Sumeli',
  Gelir: 18000,
  Gider:12000,
  getKalan : function() {
    return `${this.Gelir}${this.Gider}`
  }
}
console.log(personAccount)
console.log(personAccount.Gelir-personAccount.Gider)

//Sorular:2, 3 ve 4 şu iki diziye dayalıdır:kullanıcılar ve ürünler ()
const users2 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

/*1-Yukarıdaki kullanıcı koleksiyonunu bir MongoDB veritabanından aldığınızı hayal edin. 
a. Kullanıcının koleksiyona ekleme yapmasına izin veren, signUp adlı bir işlev oluşturun. Kullanıcı varsa, kullanıcıya zaten bir hesabı olduğunu bildirin.
b. Kullanıcının uygulamada oturum açmasına izin veren signIn adlı bir işlev oluşturun.
2-Products dizisinin üç öğesi vardır ve her birinin altı özelliği vardır. a. Ürünü derecelendiren rateProduct adlı bir işlev oluşturun b. Bir ürünün ortalama puanını hesaplayan averajRating adında bir işlev oluşturun.
3-likeProduct adlı bir işlev oluşturun. Bu işlev, ürünü beğenmezseniz beğenmenize, beğendiyseniz beğenmeyi kaldırmanıza yardımcı olur. */ 
