const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// Egzersiz Seviye 1
//1-Fetch kullanarak countriesAPI'sini okuyun ve country, capital, languages, population ve area adını yazdırın.
fetch(countriesAPI)
.then(reponse => reponse.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))
// Egzersiz Seviye 2
//1-Tüm kedi adlarını catNames değişkenine yazdırın.
const catNames = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      console.log(cats)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  catNames()

// Egzersiz Seviye 3
//1-catsAPI'sini okuyun ve kedinin ortalama ağırlığını metrik birimde bulun.
fetch(catsAPI)
    .then((response) => response.json())
    .then((json) => json.forEach((item) => {
        let metric0 = item.weight.metric[0]
        let metric1 = item.weight.metric[4]
        let toplam = metric0 + metric1
        console.log(toplam)
        let ortalama = toplam/2
        console.log(ortalama)
    }))
    .catch((err) => console.log(err))
//2-countriesAPI'sini okuyun ve en büyük(largest) 10 ülkeyi bulun.
fetch(countriesAPI)
    .then((response) => response.json())
    .then((json) => json.forEach((item) => {
        if(item.name.length>=33) {
            console.log(item.name)
        }
    }))
    .catch((err) => console.log(err))
//3-countriesAPI'sini okuyun ve dünyada resmi olarak kullanılan toplam dil sayısını bulun.
fetch(countriesAPI)
    .then((response) => response.json())
    .then((json) => json.forEach((item) => console.log(item.languages)))
    .catch((err) => console.log(err))
