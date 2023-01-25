// Egzersiz Seviye 1
//1-index.html dosyası oluşturun ve yukarıdaki gibi dört p elemanı koyun: Etiket adını kullanarak document.querySelector(tagname) ile ilk paragrafı alın
const firstTitle = document.querySelector('h1')
console.log(firstTitle)
const firstTitle2 = document.querySelector('.title')
console.log(firstTitle2)
//2-id'lerine göre document.querySelector('#id') kullanarak her bir paragrafı alın
const firstTitle3 = document.querySelector('#first-title')
console.log(firstTitle3)
//3-Etiket adlarına göre document.querySelectorAll(tagname) kullanarak tüm p elemanlarını nodeList olarak alın
const allTitles = document.querySelectorAll('h1')
for(let i=0; i<allTitles.length; i++) {
    console.log(allTitles[i])
}
allTitles.forEach((title) => console.log(title))
const allTitles2 = document.querySelector('.title')
console.log(allTitles2)
//4-nodeList içinde dolaşın ve her paragrafın metin içeriğini alın.
const allParagraf = document.querySelector('h1')
for(let i=0; i<allTitles.length; i++) {
    console.log(allTitles[i].textContent)
}
//5-Dördüncü paragrafta metin içeriği olarak Fourth Paragraph yerleştirin.
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
titles[3].textContent = 'Fourth Title'
//6-Farklı özellik ayarlama yöntemlerini kullanarak tüm paragraflar için id ve sınıf özelliklerini ayarlayın
titles[2].className = 'newTitle'
titles[2].id = 'New-third-title'
titles[2].textContent = 'New-third-title'

// Egzersiz Seviye 2 
//1-JavaScript kullanarak her paragrafın stilini değiştirin (örn. renk, arka plan, sınır, yazı tipi boyutu, yazı tipi ailesi)
/* const titleStil = document.querySelectorAll('h1')
titleStil.forEach((title,i) => {
    title.style.fontSize = '24px'
    if(i % 2 == 0) {
        title.style.color = 'green'
    } else {
        title.style.color = 'red'
    }
}) */
//2-Tüm paragrafları seçin ve her elemanın içinde dolaşın ve ilk ve üçüncü paragrafı yeşil, ikinci ve dördüncü paragrafı kırmızı renkte verin
const titleColor = document.querySelectorAll('h1')
titleColor.forEach((title,i) => {
    title.style.fontSize = '24px'
    if(title.textContent.length % 2 == 1) {
        title.style.color = 'green'
    } else {
        title.style.color = 'red'
    }
})  
