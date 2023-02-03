// Body Düzenlemesi
const body = document.querySelector("body");
body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";
body.style.fontSize = "25px";
body.style.marginTop = "-2rem";
// h3 Düzenlemesi
const h3 = document.querySelector("h3");
h3.style.textAlign = "centre";
h3.style.color = "grey";
h3.style.width = "80rem";
h3.style.textShadow = "2px 2px 2px ";
h3.style.padding = "0.5rem";
// İnput Düzenlemesi
const input = document.querySelector("input");
input.style.padding = "0.5rem";
input.style.width = "200px";
input.style.marginTop = "-2rem";
// Select Düzenlemesi
const select = document.querySelector("select");
select.style.width = "150px";
select.style.padding = "0.5rem";
h3.style.padding = "0.3rem";
select.style.borderColor = "grey";
select.style.borderBlockEndWidth = "-1rem";
select.style.borderRadius = "5px";
select.style.marginTop = "-2rem";
// Button Düzenlemesi
const button = document.querySelector("button");
button.style.padding = "0.5rem";
button.style.borderRadius = "5px";
button.style.borderColor = "grey";
button.style.marginTop = "-2rem";
// İmage Düzenlemesi
const image = document.querySelector(".planet");
image.style.width = "400px";
image.style.marginTop = "2rem";
image.style.textAlign = "center";
image.style.padding = 'flex'
// Main Düzenlemesi
const main = document.querySelector('main')
const option = document.getElementById("option");
const flex = document.querySelector(".flex");
const description = document.querySelector(".description");
let circle = document.createElement("div");
description.appendChild(circle);
main.style.backgroundColor = 'grey'
main.style.opacity = '0.8'
main.style.margin = '20px'
main.style.display = 'grid'
let p = document.querySelector("p");
function answer() {
    flex.style.display = "flex";
    flex.style.justifyContent = "spaceBetween";
    description.style.backgroundColor = "rgba(81, 81, 80, 0.6)";
    description.style.width = "25rem";
    description.style.height = "3rem";
    description.style.textAlign = "center";
    if(input.value === "") {
        description.textContent = 'Değer giriniz';
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "1rem";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "";
    }  else if (option.value === "none") {
        description.textContent = "You did not choose a planet yet";
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "";
      } else if (option.value === "Venüs") {
        circle.textContent = ` Venüs Ağırlık : ${input.value * 8.87}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/venus.png";
        image.style.textAlign = 'center'
      }   else if (option.value === "Merkür") {
        circle.textContent = ` Merkür Ağırlık : ${input.value * 3.70}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/mercury.png";
      }  else if (option.value === "Dünya") {
        circle.textContent = `Dünya Ağırlık:${input.value}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/earth.png";
      }  else if (option.value === "Mars") {
        circle.textContent = ` Mars Ağırlık : ${input.value * 3.77}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/mars.png";
      }  else if (option.value === "Jüpiter") {
        circle.textContent = `Jüpiter Ağırlık : ${input.value * 23.30}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/jupiter.png";
      }  else if (option.value === "Satürn") {
        circle.textContent = ` Satürn Ağırlık : ${input.value * 9.2}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/saturn.png";
      }  else if (option.value === "Uranüs") {
        circle.textContent = `Uranüs Ağırlık : ${input.value * 8.69}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/uranus.png";
      }  else if (option.value === "Neptün") {
        circle.textContent = `Neptün Ağırlık : ${input.value * 11}`
        circle.style.backgroundColor = 'white'
        circle.style.borderRadius = '10px 10px 10px 10px'
        description.style.margin = "2rem auto";
        description.style.padding = "1rem";
        description.style.height = "auto";
        description.style.fontSize = "1.2rem";
        document.querySelector(".planet").src = "img/neptune.png";
      } 
  }
