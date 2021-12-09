
//nav
function sakri() {
    var x = document.getElementById("meni");
    if (x.className === "navigacija") {
      x.className += " responsive";
    } else {
      x.className = "navigacija";
    }
  }

//slajder
var timer;
var slajdIndeks = 1;
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
  
  clearTimeout(timer);
  timer = setTimeout(() => plusSlides(1), 4000);
 
}


//pretraga
function dohvatiSadrzaj(){
  var nizK=["a game of thrones","a clash of kings","a strom of swords","chamber of secrets","goblet of fire","order of the pheonix","half-blood prince","twilight","new moon","eclipse","breaking dawn","the fellowsip of the ring","it","ready player two","the mistery knight", "zamalek", "znakovi pored puta","konstantinovo raskrsce", "austrijanka"];
  var nizA=["#got","#clash of kings","#strom of swords","#chamber of secrets","#goblet of fire","#order of the pheonix","#half-blood prince","#twilight","#new moon","#eclipse","","#the fellowsip of the ring","#it","#ready player two","#the mistery knight","#zamalek", "#znakovi", "#konstantinovo", "#austrijanka"];
  var sadrzaj=document.querySelector("#trazenaKnjiga").value.toLowerCase();
  var sadrzi=nizK.includes(sadrzaj,0);
  if(sadrzi){
    document.querySelector("#pretragaKnjiga > p").innerHTML="Knjiga je nadjena, link ka knjizi:";
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
      document.querySelector("#pretragaKnjiga > p").innerHTML="Knjiga nije nadjena, unesite ponovo ";
      document.querySelector("#pretragaKnjiga > p").classList.remove("sakriP");
      document.querySelector("#pretragaKnjiga > p").style.color="red";
  }
  
}
function nesto(){
  document.querySelector("#pretragaKnjiga > p").classList.add("sakriP");
  document.querySelector("#linkKnjige > a").classList.add("sakriP");
}

//korpa

$(document).ready(function(){
  
  $('#korpa').click(function(){
    
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

var korpa=document.querySelector("#korpa");

//forma

let taster=document.querySelector("#poruci");
 taster.addEventListener("click", function(){
  let imePolje=doucment.querySelector("#ime");
  let imeVrednost=imePolje.value;
  let prezimePolje=doucment.querySelector("#prezime");
  let mejlPolje=doucment.querySelector("#mejl");

  let reIme=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}(\s [A-ZČĆŠĐŽ]{1}[a-zčćšđž])+$/;

  if(reIme.test(imeVrednost)){
     imePolje.nextElementSibling.innerHTML="Uneli ste ispravno ime";
  }
  else{
    imePolje.nextElementSibling.innerHTML="Niste uneli ispravno ime";
  }
})























