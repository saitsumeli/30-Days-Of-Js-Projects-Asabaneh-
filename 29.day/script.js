function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }
    loadText.textContent = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0) // görünürden kaybolmaya gittiği için ilk 1 sonra 0 
    body.style.filter = `blur(${scale(load, 0, 40, 30, 0)}px)`
}

// Her değiştiğinde nasıl blurlucaz 

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }  

let spanList = document.querySelectorAll('span')

// Renk Oluşumu
function randomColor() {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for ( let i = 0; i < 6 ; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

// Renk Değişimi
function changeTextColor() {
    spanList.forEach((li) => {
        li.style.color = randomColor()
    })
}
changeTextColor()
setInterval(changeTextColor,1700)
// Arka Plan Renginin Değişmesi 

function changeBackground() {
    const body = document.querySelector("body");
    body.style.backgroundColor = randomColor();
  }
  changeBackground();
  setInterval(changeBackground, 1700);

  function changeText() {
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");
    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
    setTimeout(function () {
      second.style.display = "block";
      third.style.display = "none";
      first.style.display = "none";
    }, 3400);
    setTimeout(function () {
      second.style.display = "none";
      third.style.display = "block";
      first.style.display = "none";
    }, 6800);
  }
  changeText();
  setInterval(changeText, 10200);



const loadText = document.querySelector('.loading-text')
let load = 0 
let int = setInterval(blurring,30)

