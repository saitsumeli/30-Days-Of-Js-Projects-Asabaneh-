try {
  // hata verilebilicek kod
} catch (err) {
  // bir hata oluşursa çalıştırılacak kod
} finally {
  // bir hatanın oluşup oluşmadığına bakılmaksızın yürütülecek kod
}

/*try: try bloğunda hata oluşturabilecek kodu yazın. try ifadesi, 
yürütülürken hatalar için test edilecek bir kod bloğu tanımlamamızı sağlar.

catch: Bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. 
Catch bloğu, size hata bilgisi verecek parametrelere sahip olabilir. 
Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.

finally: finally bloğu, bir hata oluşmasından bağımsız olarak her zaman yürütülür. 
finally bloğu, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş 
olabilecek değişkenleri sıfırlamak için kullanılabilir. */

try {
  let lastName = "Sumeli";
  let fullName = firstName + " " + lastName;
} catch (err) {
  console.log(err);
}

try {
  let lastName = "Sumeli";
  let fullName = firstName + " " + lastName;
} catch (err) {
  console.error(err); // hem error hem log kullanabiliriz
} finally {
  console.log("In any case I will be executed");
}

try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log("Hatanın adı", err.name);
  console.log("Hata Mesajı", err.message);
} finally {
  console.log("In any case I will be executed");
}

/* throw: throw ifadesi özel bir hata oluşturmamıza izin verir. 
Bir dize, sayı, boolean veya bir nesne aracılığıyla yapabiliriz. 
Bir istisna atmak için throw ifadesini kullanın. Bir throw exception yazdığınızda, 
expression specifies değerini belirtir. */

const throwErrorExampleFun = () => {
    let message
    let x =prompt('Bir numara giriniz')
    try {
        if(x=='') throw 'boş'
        if (isNaN(x)) throw 'bir numara değil'
        x = Number(x)
        if (x<5) throw 'çok düşük'
        if (x>5) throw 'çok yüksek'
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()
