 /// ilk olarak gerekli degiskenleri secelim ve html nesnelerini olusturalım
 "use strict";
 let hakSayisi = 0;
 let rastgeleSayi = 0;
 let _tahminEt = document.querySelector('#tahminEt')
 let _yeniOyun = document.querySelector('#yeniOyun')
 let _sonuc = document.querySelector('#sonuc')
 let _sayi = document.querySelector('#sayi')

 _tahminEt.onclick = tahmin;
 _yeniOyun.onclick = yeni;

 /// Oyun baslatma fonksiyoununu yazalım
 function randomInt(min, max){
     return Math.floor(Math.random()*(max-min +1) + min);
 }
 function yeni(){
     rastgeleSayi = randomInt(0,99);
     hakSayisi = 10;
     _sonuc.innerHTML = "";
     _sayi.value = "";
     _tahminEt.disabled = false;
     _yeniOyun.disabled = true;
 }
 ///// Son olarak tahmin fonksiyonunu yazalım
 function tahmin(){
     if(hakSayisi == 0) return;
     let girilenSayi  = parseInt(_sayi.value)
     let mesaj = "";
     if(isNaN(girilenSayi)){
          mesaj = "Lütfen sayi giriniz";
     }else if(rastgeleSayi > girilenSayi){
         mesaj = "Daha buyuk sayi deneyin";
     }else if (girilenSayi > rastgeleSayi){
         mesaj = "Daha kucuk sayi deneyin";
     }else {
         mesaj = "Tebrikler";
         _tahminEt.disabled = true;
         _yeniOyun.disabled = false;
     }
     hakSayisi --;
     _sonuc.innerHTML = mesaj + "<br>";
     // _sonuc.innerHTML += "<br>" 
     _sonuc.innerHTML += "Kalan Hak Sayisi: " + hakSayisi;
     if(hakSayisi == 0){
         _tahminEt.disabled = true;
         _yeniOyun.disabled = false;
     } 
 }

