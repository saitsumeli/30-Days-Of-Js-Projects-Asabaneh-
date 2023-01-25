// Egzersiz Seviye 1
//1-Bir inner(iç) fonksiyonu olan closure yapısı oluşturun.
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count ++ 
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// Egzersiz Seviye 2
//1-Üç tane inner(iç) fonksiyonu olan closure yapısı oluşturun.
function dişFunction() {
    let count = 0;
    function plusOne() {
        count ++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function againPlus() {
        count ++
        return count
    }
    return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        againPlus:againPlus()
    }
}
const içFuncs = dişFunction()
console.log(içFuncs.plusOne)
console.log(içFuncs.minusOne)
console.log(içFuncs.againPlus)

// Bu tamam