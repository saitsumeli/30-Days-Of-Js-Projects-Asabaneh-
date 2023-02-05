var population = document.getElementById("population");
const languages = document.getElementById("languages");
const main = document.getElementById("main");
const değeryazisi = document.getElementById('değeryazisi')
// Popülasyona göre çoktan aza sıralanması;
var sortPopulation = countries_data.sort(function (a, b) {
  return b.population - a.population;
});
var ilkOnNüfus = sortPopulation.slice(0, 10);
console.log(ilkOnNüfus);
// Toplam Nüfus
var toplamNüfus = countries_data.reduce((acc, curr) => {
  return acc + curr.population;
}, 0);
console.log(toplamNüfus);
// Toplam Konuşulan Dil Sayısını Bulmak
const toplamDilSayisi = [];
countries_data.forEach((country) => {
  toplamDilSayisi.push(...country.languages);
});
console.log(toplamDilSayisi);
// Dıl ve sayılarını bır nesne de topladık
let languageCount = {};
toplamDilSayisi.forEach((language) => {
  if (languageCount[language]) {
    languageCount[language]++;
  } else {
    languageCount[language] = 1;
  }
});
console.log(languageCount);
let sortLanguagesCount = Object.entries(languageCount).sort(function (a, b) {
  return b[1] - a[1];
});
let topTenLang = sortLanguagesCount.slice(0, 10);
console.log(topTenLang);
// Nüfus Tablosu Oluşturulması
const populationTable = () => {
  let worldRow = document.createElement("div");
  let worldPop = document.createElement("span");
  let worldProgres = document.createElement("div");
  let worldPopCount = document.createElement("span");
  worldRow.setAttribute("class", "Row");

  worldPop.innerHTML = "World";
  worldPop.setAttribute("class", "name");
  worldRow.appendChild(worldPop);

  worldProgres.setAttribute('max',100)
  worldProgres.setAttribute('value',100)
  worldProgres.setAttribute("class", "progress");
  worldRow.appendChild(worldProgres);

  worldPopCount.innerHTML = toplamNüfus;
  worldPopCount.setAttribute("class", "name");
  worldRow.appendChild(worldPopCount);

  main.appendChild(worldRow);

  ///

  ilkOnNüfus.forEach((country) => {
    let countryRow = document.createElement("div");
    let countryPop = document.createElement("span");
    let countryProgres = document.createElement("div");
    let countryName = document.createElement("span");
    countryRow.setAttribute("class", "Row");

    countryName.innerHTML = country.name;
    countryName.setAttribute("class", "name");
    countryRow.appendChild(countryName);

    countryProgres.setAttribute("class", "progress");
    countryProgres.setAttribute('max',40)
    countryProgres.setAttribute('value', Math.round(((country.population / toplamNüfus) * 100)))
    countryRow.appendChild(countryProgres);

    countryPop.innerHTML = country.population;
    countryPop.setAttribute("class", "name");
    countryRow.appendChild(countryPop);

    main.appendChild(countryRow);
  });
};
//shor Language table
const languageTable = () => {
topTenLang.forEach(lang=>{
    let rowLang = document.createElement('div')
    let langName = document.createElement('span')
    let langProgress = document.createElement('div')
    let langCount = document.createElement('span')

    rowLang.setAttribute('class','Row')

    langName.innerHTML = lang[0];
    langName.setAttribute('class','name')
    rowLang.appendChild(langName)
    
    langProgress.setAttribute('max',40)
    langProgress.setAttribute('value',(lang[1] ))
    langProgress.setAttribute('class','progress')
    rowLang.appendChild(langProgress)

    langCount.innerHTML=lang[1]
    langCount.setAttribute('class','name')
    rowLang.appendChild(langCount)

    main.appendChild(rowLang)
})
};

const clearData = (e)=>{
  main.innerHTML="";
}
population.addEventListener('click',(e)=>{
  clearData()
  e.preventDefault()
  populationTable()
})
languages.addEventListener('click',(e)=>{
  e.preventDefault()
  clearData()
  languageTable()
})