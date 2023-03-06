let background = document.querySelector('.background')
let title = document.querySelector('.title')
let skills = document.querySelector('.skills')
let qly = document.querySelector('.qualifications')
let descriptions = document.querySelectorAll('.descriptions')
let descimgs = document.querySelectorAll('.descImgs')
let image = document.querySelectorAll('img')
let author = document.querySelector('.authorDescription')
let details = document.querySelectorAll('details')
let lis = document.querySelectorAll('li')
let parDetails = document.querySelectorAll('.detailsP')
let parDetailsJS = document.querySelectorAll('.detailsJS')
let parDetailsReact = document.querySelectorAll('.detailsReact')
let footer = document.querySelector('.footer')
let keywords = document.querySelector('.keywords')
let keyword = document.querySelectorAll('.keyword')
let headings =document.querySelectorAll('h2')
let links = document.querySelectorAll('.link')
let p = document.querySelectorAll('p')


// 2020 Hareketleri İçin
const h12020 = document.querySelector("h1")
h12020.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020</span>`
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

// Dakikanın Hareketleri için
function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("zaman").innerHTML = date;
    var colors = ['green', 'orange', 'blue'];
    var active = 0;
    setInterval(function(){
    document.getElementById("zaman").style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 1000);
}
tarihSaat()
// Body
const body = document.querySelector('body')
body.style.fontFamily = 'sans-serif';
body.style.textAlign = 'center';
//h1
const h1 = document.querySelector('h1')
h1.style.marginTop = '2rem';
//Zaman Kutucuğunu ayarlama
const zaman = document.querySelector('h3')
zaman.style.border = 'solid'
zaman.style.listStyle ="none"
zaman.style.border ="solid"
zaman.style.margin = "0 auto"
zaman.style.width= "200px"
zaman.style.height = "20px"
zaman.style.textAlign = 'center'
// Liste düzenlemesi
const lists = document.querySelectorAll("li")
lists.forEach((li)=>{
    li.style.listStyle ="none"
    li.style.border ="solid"
    li.style.borderColor = "black"
    li.style.margin = "0 auto"
    li.style.width= "650px"
    li.style.height = "60px"
    li.style.marginTop = '1rem'
    li.style.textAlign = 'left'
})
lis.forEach((ul) => {
    ul.style.fontSize = '17px'
    ul.style.textAlign = 'left'
    if(ul.textContent.includes('Ongoing')) {
        ul.style.backgroundColor = 'yellow'
    }
    else if(ul.textContent.includes('Done')) {
        ul.style.backgroundColor = 'green'
    } else {
        ul.style.backgroundColor = 'red'
    }
})

for( let i = 0; i<lis.length; i++) {
    lis[i].style.display = 'flex'
    lis[i].style.flexWrap='wrap'
    lis[i].style.justifyContent='space-between'
}
for(let i = 0; i<lis.length; i++){
    if(lis[i].innerHTML.includes('Coming')){
        links[i].style.textDecoration='none'
        details[i].innerHTML ='Comiing soon!'
    }
}
// Author Düzenlemesi
author.style.width='470px'
author.style.display ='flex'
author.style.margin ='50px auto'
author.style.textAlign='center'
author.style.textAlign='justify'
author.style.marginTop = '1rem'
// Author img Düzenlemesi
for(const img of image){
    img.style.width= '40px'
    img.style.height ='40px'
}
// Background Div Düzenleme

background.style.display='flex'
background.style.alignItems='center'
background.style.justifyContent='center'
background.style.margin='0 auto'
background.style.width='800px'


//Title, Skills, Qualifications Düzenlemesi
title.style.width='200px'
title.style.height='300px'

skills.style.width='200px'
skills.style.height='300px'

qly.style.width='350px'
qly.style.height='300px'

for(let i = 0; i<descriptions.length; i++){
    descriptions[i].style.display='flex'
    descriptions[i].style.flexWrap='wrap'
}

for(let i = 0 ; i<descimgs.length; i++){
    descimgs[i].style.width = '25px'
    descimgs[i].style.height = '25px'
    descimgs[i].style.marginLeft = '10px'
    descimgs[i].style.marginRight = '10px'
}
console.log(headings)
// Links Düzenlemesi
for (const pstyle of p) {
    pstyle.style.fontSize = '10px'
}
// Footer Düzenlemesi
