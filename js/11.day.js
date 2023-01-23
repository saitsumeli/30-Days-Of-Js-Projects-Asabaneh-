// Egzersiz Seviye 1 
//1-Aşağıdaki metinden kişinin toplam yıllık gelirini hesaplayınız. 'Aylık maaşından 4000 euro, yıllık 10000 euro ikramiye, ayda 5500 euro online kurs kazanıyor.
let maaş = 4000
let yillik = 10000
let kurs = 5500
let toplam = maaş + yillik + kurs
console.log(toplam)
//2-Bazı parçacıkların yatay x ekseni üzerindeki konumu -12, -4, -3 ve -1 negatif yönde, 0 orijinde, 4 ve 8 pozitif yönde. Bu sayıları çıkarın ve en uzak iki parçacık arasındaki mesafeyi bulun.
let x = [-12,-4,-3,-1,0,4,8]
let mesafe = [ x[6]-x[0]]
console.log(mesafe)

// Egzersiz Seviye 2

//1-Bir dizgeden en sık kullanılan on kelimeyi alan tenMostFrequentWords adlı bir işlev yazın ?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(paragraph)
// Egzersiz Seviye 3
//1-Metni temizleyen bir işlev yazın. Aşağıdaki metni temizleyin. Temizledikten sonra, dizide en sık kullanılan üç kelimeyi sayın.
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
matches = sentence.replace(/[%,@,$,#,&]/g, '')
console.log(matches)