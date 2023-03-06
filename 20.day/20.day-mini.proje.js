//Yılın rengi her 1 saniyede değişiyor.
const h1 = document.querySelector("h1")
h1.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020</span>`
let year = document.querySelector('#year')
const randomColor = () =>{
    let renk1 = Math.floor(Math.random()*255)
    let renk2 = Math.floor(Math.random()*255)
    let renk3 = Math.floor(Math.random()*255)
    color = `rgb(${renk1},${renk2},${renk3})`
    year.style.color = color
    year.style.fontSize = '100px'
}
setInterval(randomColor,1000)
//Tarih ve saat arka plan rengi saniyede bir değişiyor.
function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR'); // tarih saati al
    document.getElementById("zaman").innerHTML = date; // zaman id'li elemente yazdır
    var colors = ['green', 'orange', 'blue'];
    var active = 0;
    setInterval(function(){
    document.getElementById("zaman").style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 1000);
}
tarihSaat()

//Tamamlanan meydan okuma arka planı yeşil.
const titleStil = document.querySelectorAll('li')
titleStil.forEach((ul,li) => {
    ul.style.fontSize = '24px'
    if(ul.textContent.includes('Done')) {
        ul.style.backgroundColor = 'green'
    } else {
        ul.style.backgroundColor = 'red'
    }
})
//Devam eden meydan okuma arka planı sarı.
const titleStil2 = document.querySelectorAll('li')
titleStil2.forEach((ul,li) => {
    ul.style.fontSize = '24px'
    ul.style.textAlign = 'center'
    if(ul.textContent.includes('Ongoing')) {
        ul.style.backgroundColor = 'yellow'
    }
    else if(ul.textContent.includes('Done')) {
        ul.style.backgroundColor = 'green'
    } else {
        ul.style.backgroundColor = 'red'
    }
})
// listeye ve zamana border verdik..
const lists = document.querySelectorAll("li")
lists.forEach((li)=>{
    li.style.listStyle ="none"
    li.style.border ="solid"
    li.style.borderColor = "white"
    li.style.margin = "0 auto"
    li.style.width= "650px"
    li.style.height = "40px"
})

const date = document.querySelector("h3")
date.style.border = "solid"
date.style.width = "250px"
date.style.margin = "0 auto"
