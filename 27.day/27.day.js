// cvDiv Düzenlemesi 
const content = document.querySelector('marquee')
const a = [' <i class="fa-solid fa-fire-flame-simple"></i> Girişimci', ' <i class="fa-solid fa-book"></i> Öğrenmeye Açık', ' <i class="fa-solid fa-person-praying"></i> Sürekli Çalışan']
let i = 0
setInterval(function(){
    if (i >= a.length)
    {
        i = 0
    }
    content.innerHTML = a[i++]
}, 1000)


// Öğretmeler Düzenlemesi
const p2 = document.querySelector("p2")
p2.innerHTML = `Öğrendiğim Teknolojiler <b><span id="year"></span> </b> `
let year = document.querySelector('#year')
const randomColor = () =>{
    let renk1 = Math.floor(Math.random()*255)
    let renk2 = Math.floor(Math.random()*255)
    let renk3 = Math.floor(Math.random()*255)
    color = `rgb(${renk1},${renk2},${renk3})`
    year.style.color = color
    year.style.fontSize = '35px'
    const a = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT']
    let i = 0
    setInterval(function(){
    if (i >= a.length)
    {
        i = 0
    }
    year.innerHTML = a[i++]
}, 1000)
}
setInterval(randomColor,1000)

