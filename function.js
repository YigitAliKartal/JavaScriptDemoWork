function sayiUret(ustLimit = 60) {
    return Math.ceil(Math.random() * ustLimit)
}
//function fonksiyon oluşturma.
//return = anahtar kelime.
// Math.ceil(Math.random()* 60) 1 ile 60 arası sayı oluşturmaya yarar math.ceil komudu yukarıdaki tam sayıya yuvarlar

var sayi1 = sayiUret()
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()

console.log('Kolon : '+ sayi1 + ' '+ sayi2 + ' ' + sayi3 + ' '
 + sayi4 + ' ' + sayi5 + ' ' + sayi6)
 