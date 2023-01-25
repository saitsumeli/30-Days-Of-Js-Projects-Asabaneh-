// Egzersiz Seviye 1
//1-Adınızı, soyadınızı, yaşınızı, ülkenizi, şehrinizi tarayıcınızın localStorage'ında saklayın.
localStorage.setItem('firstName', 'Sait') // değer string olduğundan onu stringleştirmeyiz
console.log(localStorage)
// Egzersiz Seviye 2
//1-Bir öğrenci nesnesi oluşturun. Öğrenci nesnesinin adı, soyadı, yaşı, becerileri, ülkesi, kayıtlı anahtarları ve anahtarların değerleri olacaktır. Öğrenci nesnesini tarayıcınızın localStorage'ında saklayın.
let student = {
    firstName : 'Sait',
    lastName : 'Sumeli',
    age : 24,
    skills : [
        'HTML',
        'CSS',
        'JS'
    ],
    country : 'Turkey'
}
const studentText = JSON.stringify(student,undefined,4)
localStorage.setItem('student', studentText)

// Bu tamam