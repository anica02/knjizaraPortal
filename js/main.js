
//NAV HAMBURGER
var x = document.getElementById("meni");
function sakri() {
  var x = document.getElementById("meni");
    if (x.className == "navigacija") {
      x.className += " responsive";
    } else {
      x.className = "navigacija";
    }
  }

//SLAJDER
var timer;
var slajdIndeks = 1;
clearTimeout(timer);
timer = setTimeout(() => plusSlides(1), 4000);
function plusSlides(n) {
  showSlides(slajdIndeks += n);
}

function showSlides(n) {
  var i;
  var slajd = document.getElementsByClassName("slajdovi");
 
  if (n > slajd.length) {slajdIndeks = 1}
  if (n < 1) {slajdIndeks= slajd.length}
  for (i = 0; i < slajd.length; i++) {
      slajd[i].style.display = "none";
  }
  slajd[slajdIndeks-1].style.display = "block";
  timer = setTimeout(() => plusSlides(1), 4000);
}




//PRETRAGA
function dohvatiSadrzaj(){
  var nizK=["the fellowsip of the ring","it","ready player two","the mistery knight", "zamalek", "znakovi pored puta","konstantinovo raskrsce", "austrijanka"];
  var nizA=["#the fellowsip of the ring","#it","#ready player two","#the mistery knight","#zamalek", "#znakovi", "#konstantinovo", "#austrijanka"];
  var sadrzaj=document.querySelector("#trazenaKnjiga").value.toLowerCase();
  var sadrzi=nizK.includes(sadrzaj,0);
  if(sadrzi){
    document.querySelector("#pretragaKnjiga > p").innerHTML="Knjiga je nađena, link ka knjizi:";
    document.querySelector("#pretragaKnjiga > p").classList.remove("sakriP");
    document.querySelector("#pretragaKnjiga > p").style.color="green";
    for(let i=0;i<nizK.length;i++){
      for(let j=0;i<nizA.length;i++){
         if(sadrzaj==nizK[i])
            var link=`<a href="${nizA[i]}">${nizK[i]}</a>`;
            document.querySelector("#linkKnjige").innerHTML=link;
           
        }
      }
    }
  else if(!sadrzi){
        document.querySelector("#pretragaKnjiga > p").innerHTML="Knjiga nije nađena, unesite ponovo ";
      document.querySelector("#pretragaKnjiga > p").classList.remove("sakriP");
      document.querySelector("#pretragaKnjiga > p").style.color="red";
  }
  
}
function nestani(){
  document.querySelector("#pretragaKnjiga > p").classList.add("sakriP");
  document.querySelector("#linkKnjige > a").classList.add("sakriP");
}

//KORPA

$(document).ready(function(){
  
  $('#korpa1').click(function(){
    
      if($('#stanje').is(':visible')) {
        $('#stanje').hide();
      } else {
        $('#stanje').show();
      }
    });
});
$(document).ready(function(){
  
  $('#korpa2').click(function(){
    
      if($('#stanje2').is(':visible')) {
        $('#stanje2').hide();
      } else {
        $('#stanje2').show();
      }
    });
});

var korpa=document.querySelector("#korpa1");


//OBRADA FORME

function provera(){

  var imePrezime,adresa, brojTelefona, placanje, isporuka, nizPodaci;
  var vrednostImePrezime, vrednostAdresa;
  nizPodaci=[];
  imePrezime=document.querySelector("#imePrezime");
  vrednostImePrezime=imePrezime.value;
  adresa=document.querySelector("#adresa");
  vrednostAdresa=adresa.value;
  brojTelefona=document.querySelector("#brojTelefona");
  vrednostTelefon=brojTelefona.value;
  placanje=document.querySelector("#placanje");
  isporuka=document.getElementsByName("isporuka");

  //proveri ime i prezime
  let reImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  if(reImePrezime.test(vrednostImePrezime)){
    document.querySelector("#poljeImePrezime > p").innerHTML="";
    nizPodaci.push(vrednostImePrezime);
  }
  else{
    document.querySelector("#poljeImePrezime > p").innerHTML="Ime i prezime nije ispravno uneto";
    document.querySelector("#poljeImePrezime > p").style.color="red";
    
  }
  
  //proveri adresu
  let reAdresa=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[\d]{1,5}$/;
  if(reAdresa.test(vrednostAdresa)){
    document.querySelector("#poljeAdresa > p").innerHTML="";
    nizPodaci.push(vrednostAdresa);
  }
  else{
    document.querySelector("#poljeAdresa > p").innerHTML="Adresa nije ispravno uneta";
    document.querySelector("#poljeAdresa > p").style.color="red";

  }
   //proveri telefon
   let reTelefon=/^06[0-689]\s[\d]{2}\s[\d]{2}\s[\d]{2,3}$/;
   if(reTelefon.test(vrednostTelefon)){
    document.querySelector("#telefon > p").innerHTML="";
     nizPodaci.push(vrednostTelefon);
   }
   else{
     document.querySelector("#telefon > p").innerHTML="Telefon nije unet u ispravnom formatu";
     document.querySelector("#telefon > p").style.color="red";
     
   }

   //provera padajuce
  if(placanje.options[placanje.options.selectedIndex].value=="0"){
    document.querySelector("#plati > p").innerHTML="Morate izabrati način plaćanja";
    document.querySelector("#plati > p").style.color="red";
  }
  else{
    document.querySelector("#plati > p").innerHTML="";
    nizPodaci.push(placanje.options[placanje.options.selectedIndex].text);
  }
  //provera radio 
  var vrednostIsporuka=" ";
  for(let i=0;i<isporuka.length;i++){
    if(isporuka[i].checked){
      vrednostIsporuka=isporuka[i].value;
      break;
    }
  }
  if(vrednostIsporuka==" "){
    document.querySelector("#isporuci > p").innerHTML="Morate izabrati način isporuke";
    document.querySelector("#isporuci > p").style.color="red";
  }
  else{
    document.querySelector("#isporuci > p").innerHTML="";
    nizPodaci.push(vrednostIsporuka);
  }


  //ispisivanje podataka
  
  if(nizPodaci.length>0){
    var ispis="<p>Vaši podaci<p>";
    ispis+="<ul>";
  
    for(let podatak of nizPodaci){
        ispis+=`<li>${podatak}</li>`;
      }
    ispis+="</ul>"
    document.querySelector("#ispis").innerHTML=ispis;
  
  }
}

function provera2(){
  var imePrezime2, email, poruka;
  var vrednostImePrezime2, vrednotEmail, vrednostPoruka;

  imePrezime2=document.querySelector("#imePrezime2");
  vrednostImePrezime2=imePrezime2.value;
  email=document.querySelector("#mejl");
  vrednotEmail=email.value;
  poruka=document.querySelector("#vasaPoruka");
  vrednostPoruka=poruka.value;
  //proveri ime i prezime
  let reImePrezime2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  if(reImePrezime2.test(vrednostImePrezime2)){
    document.querySelector("#poljeImePrezime2 > p").innerHTML="Ime i prezime je prosleđeno";
    document.querySelector("#poljeImePrezime2 > p").style.color="green";


  }
  else{
    document.querySelector("#poljeImePrezime2 > p").innerHTML="Ime i prezime nije ispravno uneti";
    document.querySelector("#poljeImePrezime2 > p").style.color="red";
    
  }
  //provera email-a

  let reEmail=/^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if(reEmail.test(vrednotEmail)){
    document.querySelector("#poljeEmail > p").innerHTML="Email je prosleđen";
    document.querySelector("#poljeEmail > p").style.color="green";
  }
  else{
    document.querySelector("#poljeEmail > p").innerHTML="Email nije unet u ispravnom formatu";
    document.querySelector("#poljeEmail > p").style.color="red";
    
  }

  //proveri poruku
  if(vrednostPoruka.length<=0){
    document.querySelector("#poljePoruka > p").innerHTML="Niste uneli poruku";
    document.querySelector("#poljePoruka > p").style.color="red";
  }
  else{
    document.querySelector("#poljePoruka > p").innerHTML="Poruka je prosleđena";
    document.querySelector("#poljePoruka > p").style.color="green";
  }


}
//DODAVANJE U KORPU
let korpaDugme=document.getElementsByClassName("dugme");
console.log(korpaDugme);
var brojKnjiga=0;

function broji(){
  brojKnjiga++;
  let dodajUKorpu=document.querySelector("#stanje >p");
  dodajUKorpu.innerHTML="Broj knjiga:"+brojKnjiga;
  let dodajUKorpu2=document.querySelector("#stanje2 >p");
  dodajUKorpu2.innerHTML="Broj knjiga:"+brojKnjiga;
  let porudzbinaKorpa=document.querySelector(".forma > p");
  porudzbinaKorpa.innerHTML="Broj poručenih knjiga: "+brojKnjiga;
};

$(document).ready(function(){
  
  $('.dugme').click(function(){
    
      $(this).text("DODATO");
  });
});



















