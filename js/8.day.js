// Egzersiz Seviye 1
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//1-Aralarındaki farkı açıklayın: forEach, map, filter, and reduce.
//2-Countries dizisindeki her ülkeyi console.log yapmak için forEach'i kullanın.
countries.forEach((element) => console.log(element));
//3-name dizisindeki her adı console.log için forEach kullanın.
names.forEach((element) => console.log(element));
numbers.forEach((element) => console.log(element));
//4-Ülkeler dizisindeki her ülkeyi büyük harfe çevirerek yeni bir dizi oluşturmak için map kullanın.
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);
//5-Ülkeler dizisinden bir ülke uzunluğu dizisi oluşturmak için map kullanın.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);
//6-İsimler dizisindeki her ismi büyük harfe çevirmek için map kullanın
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);
//7-Ürün dizisini ilgili fiyatlara eşlemek için map kullanın.
const productPrice = products.map((prices) => prices.price);
console.log(productPrice);
//8-Land içeren ülkeleri filtrelemek için filtreyi kullanın.
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);
//9-Altı karakterli ülkeleri filtrelemek için filtreyi kullanın
const sixKarakter = countries.filter((country) => country.length === 6);
console.log(sixKarakter);
//10-'E' ile başlayan ülkeyi filtrelemek için filtreyi kullanın;
const eIleBaşlayan = countries.filter((country) => country.length[0] === "E");
console.log(eIleBaşlayan);
//11-Yalnızca değerleri olan fiyatları filtrelemek için filtreyi kullanın.
const sadeceDeğeriOlanlar = products.filter((değer) => {
  if(değer.price!="") {
    return değer.price
} 
}
);
console.log(sadeceDeğeriOlanlar);
// hepsini nasıl yazdırıcam ?

//12-Sayılar dizisindeki tüm sayıları toplamak için reduce kullanın.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
//13-Tüm ülkeleri birleştirmek ve şu cümleyi oluşturmak için reduce kullanın: Estonya, Finlandiya, İsveç, Danimarka, Norveç ve İzlanda kuzey Avrupa ülkeleridir.
//??
//14-Some ve every arasındaki farkı açıklayın
//15-İsimler dizisinde bazı isimlerin uzunluğunun yediden büyük olup olmadığını kontrol etmek için some kullanın.
const yedidenFazla = names.some((name) => name.length >= 7);
console.log(yedidenFazla);
//16-Tüm ülkelerin land kelimesini içerip içermediğini kontrol etmek için every kullanın.
/* for(let i=0 ; i<countries.length -1; i++) {
  const landVarMı = countries.every((country) =>
  country[i].includes('land'))
}
 console.log(landVarMı) */
//17-find ve findIndex arasındaki farkı açıklayın.
//17-İsimlerde dizisinde yalnızca altı harf içeren ilk ülkeyi bulmak için find'i kullanın.
const result = names.find((name) => name.length === 7);
console.log(result);
//18-Names dizisinde yalnızca 7 harf içeren ilk ismin konumunu bulmak için findIndex'i kullanın.
const konum = names.findIndex((name) => name.length === 7);
console.log(konum);

// Egzersiz Seviye 2
//1-İki veya daha fazla dizi yineleyiciyi zincirleyerek ürünlerin toplam fiyatını bulun
const priceToplam = products.reduce((acc, cur) => {
  if(cur.price!="") {
    acc += cur.price
  } return acc
}, 0 );
console.log(priceToplam);
//2-Ürünlerin fiyatlarının toplamını sadece küçült azalt(callback) kullanarak bulun
//3-categorizeCountries adlı bir işlev tanımlayın ve bu işlev bazı ortak örüntülere sahip ülkelerin bir dizisini döndürür (ülkeler dizisini bu depoda country.js olarak bulabilirsiniz (örn. 'land', 'ia', 'ada', 'stan')).
//4-Bir ülke adıyla başlamak için harf ve harfin kullanım sayısı olan bir nesne dizisini döndüren bir işlev oluşturun
//5-Bir getFirstTenCountries işlevi bildirin ve on ülkeden oluşan bir dizi döndürün. Country.js dizisinde çalışmak için farklı işlevsel programlama kullanın
//6-Countries dizisindeki son on ülkeyi döndüren bir getLastTenCountries işlevi bildirin.
//7-Ülkeler dizisinden bir ülke adının baş harfi olarak birçok kez hangi harfin kullanıldığını öğrenin (örn. Finlandiya, Fiji, Fransa vb.)

// Egzersiz Seviye 3
