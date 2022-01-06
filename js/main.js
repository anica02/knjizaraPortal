
//nav

let meniHref = ["#naslovna", "#strani", "#domaci", "#autor", "#kontakt"];
let meniTekst = ["Naslovna", "Strani", "Domaći", "Autor", "Kontakt"];
let divMeni = document.querySelector("#meni");
let ispisMeni = "<ul>";
for(let i=0; i<meniHref.length; i++){
  ispisMeni += `<li><a href="${meniHref[i]}">${meniTekst[i]}</a></li>`;
}      
ispisMeni += `<li><i class="fas fa-bars" id="ikonicaHamburger"></i></li>`;
ispisMeni += "</ul>";
divMeni.innerHTML = ispisMeni;

$(document).ready(function(){
  
  $('#meni ul li i').click(function(){
      $('#meni ul li a').slideToggle('fast');
      $('#meni ul li').addClass('aLinkoviMenia');
    })
});

//PRETRAGA

function dohvatiSadrzaj(){

  var nizK=["the fellowsip of the ring","it","ready player two","the mistery knight", "zamalek", "znakovi pored puta","konstantinovo raskrsce", "austrijanka"];
  var nizA=["#the fellowsip of the ring","#it","#ready player two","#the mistery knight","#zamalek", "#znakovi", "#konstantinovo", "#austrijanka"];
  var sadrzaj = document.querySelector("#trazenaKnjiga").value.toLowerCase();
  var sadrzi = nizK.includes(sadrzaj,0);

  if(sadrzi){
    document.querySelector("#pretragaKnjiga > p").innerHTML = "Knjiga je nađena, link ka knjizi:";
    document.querySelector("#pretragaKnjiga > p").classList.remove("sakriP");
    document.querySelector("#pretragaKnjiga > p").style.color = "green";
    for(let i=0;i<nizK.length;i++){
      for(let j=0;i<nizA.length;i++){
         if(sadrzaj==nizK[i])
            var link=`<a href="${nizA[i]}">${nizK[i]}</a>`;
            document.querySelector("#linkKnjige").innerHTML = link;
           
        }
      }
    }
  else if(!sadrzi){
        document.querySelector("#pretragaKnjiga > p").innerHTML = "Knjiga nije nađena, unesite ponovo ";
      document.querySelector("#pretragaKnjiga > p").classList.remove("sakriP");
      document.querySelector("#pretragaKnjiga > p").style.color = "red";
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

//slajder



let ulTag = document.querySelector("#autoWidth");
let nizAlt = ["korica-od-knjige-sa-glavom-zmaja","korica-od-knjige-sa-krunom","korica-od-knjige-sa-viteškim-šlemom","korica-od-knjige-sa-štitom","korica-od-knjige-sa-metaforom",
              "korica-od-knjige-sa-peharom","korica-od-knjige-sa-feniksom","korica-od-knjige-sa-metaforom2", "korica-od-knjige-sa-crvenom-jabukom","korica-od-knjige-sa-cvetom",
              "korica-od-knjige-sa-pokidanom-mašnom","korica-od-knjige-sa-šahovskim-figurama"];
let nizSrc=["img/knjiga.png", "img/knjiga3.png","img/knjiga2.png", "img/knjiga4.png", "img/harry4.png", "img/harry3.png", "img/harry1.png", "img/harry2.png", "img/tw1.png",
            "img/tw2.png", "img/tw3.png", "img/tw4.png"];
for(let l=0; l<nizAlt.length; l++){
  let liTag = document.createElement("li");
  liTag.setAttribute("class", "iteam-a");

  let divSaKnjigom = document.createElement("div");
  divSaKnjigom.setAttribute("class", "box");

  let slika = document.createElement("img");
  slika.setAttribute("src", `${nizSrc[l]}`);
  slika.setAttribute("alt", `${nizAlt[l]}`);

  divSaKnjigom.appendChild(slika);
  liTag.appendChild(divSaKnjigom);

  ulTag.appendChild(liTag);
}

$(document).ready(function(){
  $('#autoWidth').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad:function(){
      $('#autoWidth').removeClass('cs-hidden');
    }
  });

})


//knjige

let nizKnjiga = ["img/lord.png", "img/it.png", "img/player.png", "img/MysteryKnight.png"];
let nizKnjiga2 = ["img/zamalek.png","img/andric.png","img/konstantinovo.png","img/austrijanka.png"];
let nizKnjigaAlt = ["korica-od-knjige-sa-prstenima","korica-od-knjige-sa-dečakom-u-žutoj-kabanici","korica-od-knjige-sa-naslovom","korica-od-knjige-sa-viteškim-štitom"];
let nizKnjigaAlt2 = ["korica-od knjige-sa-balegarom","korica-od knjige-sa-zlatnim-slovima","korica-od knjige-sa-mačem","korica-od knjige-sa-devojkom"];
let nizNaslova = ["The fellowsip of the ring", "IT", "Ready player two", "The mistery knight"];
let nizNaslova2 = ["Zamalek","Znakovi pored","Konstantinovo raskršće","Austrijanka"];
let linkoviKaKnjigama = ["the fellowsip of the ring","it","ready player two","the mistery knight"];
let linkoviKaKnjigama2 = ["zamalek", "znakovi", "konstantinovo", "austrijanka"];
let nizAutori = ["J.R.R. TOLKIEN", "STEPHEN KING", "ERNEST CLINE", "GEORGE R.R MARTIN"];
let nizAutori2 = ["DEJAN STANKOVIĆ","IVO ANDRIĆ","DEJAN STOJILJKOVIĆ","ZORAN MILEKIĆ"];
let nizCena = ["1.282 din", "1.300 din","1.100 din","2.500 din"];
let nizCena2 = ["900 din","1.300 din","800 din","900 din"];


let regionKnjiga = document.querySelector("#prvi");
let regionKnjiga2 = document.querySelector("#drugi");

for(let k=0; k<nizAutori.length; k++){

  let artikl = document.createElement("div");
  artikl.setAttribute("class", "artikl");

  let novaKnjiga = document.createElement("img");
  novaKnjiga.setAttribute("alt", `${nizKnjigaAlt[k]}`);
  novaKnjiga.setAttribute("src", `${nizKnjiga[k]}`);

  let linkoviKnjiga = document.createElement('a');
  linkoviKnjiga.appendChild(novaKnjiga);
  linkoviKnjiga.setAttribute("name", `${linkoviKaKnjigama[k]}`);

  let noviNaslov = document.createElement("h3");
  noviNaslov.innerHTML = nizNaslova[k];

  let noviAutor = document.createElement("h4");
  noviAutor.innerHTML = nizAutori[k];

  let noveCene = document.createElement("p");
  noveCene.innerHTML = nizCena[k];

  let spanCene = document.createElement("span");
  spanCene.appendChild(noveCene); 

  let poruciDugme = document.createElement("button");
  poruciDugme.setAttribute("class", "dugme");
  poruciDugme.innerHTML = "DODAJ U KORPU";

  
  artikl.appendChild(linkoviKnjiga);
  artikl.appendChild(noviNaslov);
  artikl.appendChild(noviAutor);
  artikl.appendChild(spanCene);
  artikl.appendChild(poruciDugme);

  regionKnjiga.appendChild(artikl);
}

for(let p=0; p<nizAutori2.length; p++){

  let artikl2 = document.createElement("div");
  artikl2.setAttribute("class", "artikl");

  let novaKnjiga2 = document.createElement("img");
  novaKnjiga2.setAttribute("alt", `${nizKnjigaAlt2[p]}`);
  novaKnjiga2.setAttribute("src", `${nizKnjiga2[p]}`);

  let linkoviKnjiga2 = document.createElement('a');
  linkoviKnjiga2.appendChild(novaKnjiga2);
  linkoviKnjiga2.setAttribute("name", `${linkoviKaKnjigama2[p]}`);

  let noviNaslov2 = document.createElement("h3");
  noviNaslov2.innerHTML = nizNaslova2[p];

  let noviAutor2  =document.createElement("h4");
  noviAutor2.innerHTML = nizAutori2[p];

  let noveCene2 = document.createElement("p");
  noveCene2.innerHTML = nizCena2[p];

  let spanCene2 = document.createElement("span");
  spanCene2.appendChild(noveCene2); 

  let poruciDugme = document.createElement("button");
  poruciDugme.setAttribute("class", "dugme");
  poruciDugme.innerHTML = "DODAJ U KORPU";

  artikl2.appendChild(linkoviKnjiga2);
  artikl2.appendChild(noviNaslov2);
  artikl2.appendChild(noviAutor2);
  artikl2.appendChild(spanCene2);
  artikl2.appendChild(poruciDugme);

  regionKnjiga2.appendChild(artikl2);
}


//OBRADA FORME

function provera(){

  var imePrezime,adresa, brojTelefona, placanje, isporuka, nizPodaci;
  var vrednostImePrezime, vrednostAdresa;
  nizTacnih = [];
  imePrezime = document.querySelector("#imePrezime");
  vrednostImePrezime = imePrezime.value;
  adresa = document.querySelector("#adresa");
  vrednostAdresa = adresa.value;
  brojTelefona = document.querySelector("#brojTelefona");
  vrednostTelefon = brojTelefona.value;
  placanje = document.querySelector("#placanje");
  isporuka = document.getElementsByName("isporuka");

  //proveri ime i prezime

  let reImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;

  if(reImePrezime.test(vrednostImePrezime)){
    document.querySelector("#poljeImePrezime > p").innerHTML = `<i class="far fa-check-circle"></i>`;
    document.querySelector("#poljeImePrezime > p").style.color = "green";
  }
  else{
    document.querySelector("#poljeImePrezime > p").innerHTML = `<i class="fas fa-exclamation-circle"></i> Ime i prezime nije ispravno uneto`;
    document.querySelector("#poljeImePrezime > p").style.color = "red";
    
  }
  
  //proveri adresu

  let reAdresa=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[\d]{1,5}$/;

  if(reAdresa.test(vrednostAdresa)){
    document.querySelector("#poljeAdresa > p").innerHTML = `<i class="far fa-check-circle"></i>`;
    document.querySelector("#poljeAdresa > p").style.color = "green";
  }
  else{
    document.querySelector("#poljeAdresa > p").innerHTML = `<i class="fas fa-exclamation-circle"></i> Adresa nije ispravno uneta`;
    document.querySelector("#poljeAdresa > p").style.color = "red";

  }
   //proveri telefon

   let reTelefon=/^06[0-689]\s[\d]{2}\s[\d]{2}\s[\d]{2,3}$/;
   if(reTelefon.test(vrednostTelefon)){
    document.querySelector("#telefon > p").innerHTML = `<i class="far fa-check-circle"></i>`;
    document.querySelector("#telefon > p").style.color = "green";
   }
   else{
     document.querySelector("#telefon > p").innerHTML = `<i class="fas fa-exclamation-circle"> Telefon nije unet u ispravnom formatu`;
     document.querySelector("#telefon > p").style.color = "red";
     
   }

   //provera padajuce

  if(placanje.options[placanje.options.selectedIndex].value=="0"){
    document.querySelector("#plati > p").innerHTML = `<i class="fas fa-exclamation-circle"> Morate izabrati način plaćanja`;
    document.querySelector("#plati > p").style.color = "red";
  }
  else{
    document.querySelector("#plati > p").innerHTML = `<i class="far fa-check-circle"></i>`;
    document.querySelector("#plati > p").style.color = "green";
  }

  //provera radio 

  var vrednostIsporuka=" ";
  for(let i=0;i<isporuka.length;i++){
    if(isporuka[i].checked){
      vrednostIsporuka = isporuka[i].value;
      break;
    }
  }
  if(vrednostIsporuka==" "){
    document.querySelector("#isporuci > p").innerHTML = `<i class="fas fa-exclamation-circle"> Morate izabrati način isporuke`;
    document.querySelector("#isporuci > p").style.color = "red";
  }
  else{
    document.querySelector("#isporuci > p").innerHTML = `<i class="far fa-check-circle"></i>`;
    document.querySelector("#isporuci > p").style.color = "green";
    
  }
  let pTagoviPoruci=document.querySelectorAll("#porudzbina p")

  
}


function provera2(){
  var imePrezime2, email, poruka;
  var vrednostImePrezime2, vrednotEmail, vrednostPoruka;

  imePrezime2 = document.querySelector("#imePrezime2");
  vrednostImePrezime2 = imePrezime2.value;
  email = document.querySelector("#mejl");
  vrednotEmail = email.value;
  poruka = document.querySelector("#vasaPoruka");
  vrednostPoruka = poruka.value;

  //proveri ime i prezime

  let reImePrezime2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  if(reImePrezime2.test(vrednostImePrezime2)){
    document.querySelector("#poljeImePrezime2 > p").innerHTML = "Ime i prezime je prosleđeno";
    document.querySelector("#poljeImePrezime2 > p").style.color = "green";
  }
  else{
    document.querySelector("#poljeImePrezime2 > p").innerHTML = "Ime i prezime nije ispravno uneto";
    document.querySelector("#poljeImePrezime2 > p").style.color = "red";
    
  }
  //provera email-a

  let reEmail=/^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if(reEmail.test(vrednotEmail)){
    document.querySelector("#poljeEmail > p").innerHTML = "Email je prosleđen";
    document.querySelector("#poljeEmail > p").style.color = "green";
  }
  else{
    document.querySelector("#poljeEmail > p").innerHTML = "Email nije unet u ispravnom formatu";
    document.querySelector("#poljeEmail > p").style.color = "red";
    
  }

  //proveri poruku

  if(vrednostPoruka.length<=0){
    document.querySelector("#poljePoruka > p").innerHTML = "Niste uneli poruku";
    document.querySelector("#poljePoruka > p").style.color = "red";
  }
  else{
    document.querySelector("#poljePoruka > p").innerHTML = " ";
  }
}



//DODAVANJE U KORPU

let korpaDugme = document.getElementsByClassName("dugme");
console.log(korpaDugme);

$(document).ready(function(){
  var brojKnjiga=0;
  $('.dugme').click(function() {
    if ($(this).text() == "DODAJ U KORPU") {
       $(this).text("DODATO");
       brojKnjiga++;
    }
    else if($(this).text() == "DODATO"){
      alert("Knjiga je uklonjena iz korpe");
      brojKnjiga--;
      $(this).text("DODAJ U KORPU")
    }
    let dodajUKorpu = document.querySelector("#stanje >p");
    dodajUKorpu.innerHTML = "Broj knjiga:"+brojKnjiga;
    let porudzbinaKorpa = document.querySelector(".forma > p");
    porudzbinaKorpa.innerHTML = "Broj poručenih knjiga: "+ brojKnjiga;
 });
});




//footer

let deoFuter = document.querySelector("#dodat");

let nizLinkovaKaDM = ["https://www.instagram.com/_sweetheart55_/","https://twitter.com/anika99black","https://www.linkedin.com/in/anica-radenkovi%C4%87-9519b3206/",
                    "https://www.facebook.com/anica.radenkovic96/","https://github.com/anica02"];
let nizoviKlasa = ["fab fa-instagram", "fab fa-twitter-square","fab fa-linkedin","fab fa-facebook-square","fab fa-github-square"];

let divSaLinkovima=document.createElement("div");

  for(let a=0;a<nizLinkovaKaDM.length;a++){
    
    let aLink = document.createElement("a");
    let iIkonica = document.createElement("i");

    aLink.setAttribute("href", `${nizLinkovaKaDM[a]}`);
    aLink.setAttribute("target", "_blank");

    iIkonica.setAttribute("class", `${nizoviKlasa[a]}`);
    aLink.appendChild(iIkonica);

    divSaLinkovima.appendChild(aLink);
  }
  deoFuter.appendChild(divSaLinkovima);


                    



















