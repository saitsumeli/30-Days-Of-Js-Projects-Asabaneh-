// Egzersiz Seviye 1
//1-Ülkeler dizisini tablo olarak göster
const countries = ['Finland' ,'Sweden','Norway']
console.table(countries)
//2-Ülkeler nesnesini tablo olarak göster
const country = {
    countries: ['Finland' ,'Sweden','Norway'],
  }
  console.table(country)

// Egzersiz Seviye 2
//1-10 > 2 * 10 console.assert() işlevini kullanın
console.log(10 > 2 * 10, '10 küçüktür 2*10 dan')
//2-console.warn() kullanarak bir uyarı mesajı yazın
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
//3-console.error() kullanarak bir hata mesajı yazın
console.error('Bu bir hata mesajıdır')
// Egzersiz Seviye 3
//1-Şu döngüler arasındaki hız farkını kontrol edin: while, for, for of, forEach
