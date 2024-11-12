// 3 farklı sayı tanımlıyoruz
var sayi1 = 29;
var sayi2 = 30;
var sayi3 = 2;

// En büyük sayıyı bulmak için başlangıçta en büyük olarak sayi1'i seçiyoruz
var enBuyuk = sayi1;

// sayi2'yi kontrol ediyoruz
if (enBuyuk < sayi2) {
    enBuyuk = sayi2;
}

// sayi3'ü kontrol ediyoruz
if (enBuyuk < sayi3) {
    enBuyuk = sayi3;
}

console.log("Bu sayılar içinde en büyük = " + enBuyuk);
