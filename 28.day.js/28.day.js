// Yazi gelmesi için
var yazi = document.querySelector(".yazi");
var inputs = document.querySelectorAll("#input");
var h2 = document.createElement("h2");
h2.className = "h2";
yazi.appendChild(h2);

// Ekleyeceğimiz İtemler İçin;

var items = ["Name1", "Name2", "Name3"];

// liste elemanlarını oluşturmak için

var list = document.querySelector("#myList");

// Listeye Click Ekleme

list.addEventListener("click", function (item) {
  if (item.target.tagName == "LI") {
    item.target.classList.toggle("checked");
  }
});

// Add tıklayınca listenin sonuna eklenmesi

document.querySelector("#btnCreate").onclick = function () {
  var item = document.querySelector("#input").value;
  inputs.forEach((input) => {
    if (input.value === "") {
      h2.textContent = "Lütfen tüm istenilenleri doldurunuz..";
    }
  });

  var li = document.createElement("li");
  var t = document.createTextNode(item);

  li.className = "list-group-item";
  li.appendChild(t);
  list.appendChild(li);

  var span = document.createElement("span");
  var text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
  

  span.onclick = function () {
    var li = this.parentElement;
    li.style.display = "none";
    // x bastığımızda artık itemın classı checked olmayacak
    li.classList.remove("checked");
  };
};

// Listenin Düzenlenmesi;
items.forEach(function (item) {
  var li = document.createElement("li");
  var t = document.createTextNode(item);
  li.className = "list-group-item";
  li.appendChild(t);
  list.appendChild(li);

  var span = document.createElement("span");
  var text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
  // x basınca silmek
  span.onclick = function () {
    var li = this.parentElement;
    li.style.display = "none";
    // x bastığımızda artık itemın classı checked olmayacak
    li.classList.remove("checked");
  };
});
