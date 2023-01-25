// Egzersiz Seviye 1
//1-Bir Animal sınıfı oluşturun. Sınıf, isim, yaş, renk, ayak sayısı özelliklerine sahip olacak ve farklı yöntemler oluşturacaktır
//2-Animal sınıfına Dog ve Cat adı altında alt sınıflar oluşturun
class animal {
    constructor(Sınıf,isim,yaş,renk,ayakSayisi) {
    console.log(this)
    this.Sınıf = Sınıf
    this.isim = isim
    this.yaş = yaş
    this.renk = renk
    this.ayakSayisi = ayakSayisi
    }
}
const animal1 = new animal('Köpek','Golden','4','Siyah','4')
const animal2 = new animal('Kedi','Maviş','3','Beyaz','4')
console.log(animal1)
console.log(animal2)
// Egzersiz Seviye 2
//1-Oluşturduğunuz Animal sınıfını override methoduyla yazın.

class Cins extends animal {
    constructor(Sınıf,isim,yaş,renk,ayakSayisi,gender) {
        super(Sınıf,isim,yaş,renk,ayakSayisi)
        this.gender = gender
    }
    saySomething() {
        console.log('Ben bir hayvanım')
    }
}

const animal3 = new Cins(
    'Fare',
    'Hamster',
    '1',
    'Gri',
    '4',
    'Erkek'
)

// Egzersiz Seviye 3
/*1-Bir örneğin merkezi eğilim ölçüsünü (ortalama, medyan, mod) ve değişkenlik ölçüsünü 
(aralık, varyans, standart sapma) hesaplayan bir program geliştirmeye çalışalım. 
Bu ölçülere ek olarak, numunenin min, maks, sayım, yüzdelik ve frekans dağılımını bulun. 
İstatistikler adlı bir sınıf oluşturabilir ve İstatistik sınıfı için yöntem olarak istatistiksel 
hesaplamalar yapan tüm işlevleri oluşturabilirsiniz. Aşağıdaki çıktıyı kontrol edin.*/
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]