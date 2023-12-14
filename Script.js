function calcule(){

//Entrer brut
var brutH=document.getElementById("BrutH").value;
var brutM=document.getElementById("BrutM").value;
var brutA=document.getElementById("BrutA").value;

//Calcule net
var netH=brutH-(brutH*23/100);
var netM=brutM-(brutM*23/100);
var netA=brutA-(brutA*23/100);

//Resultat net
document.getElementById("NetH").value=netH;
document.getElementById("NetM").value=netM;
document.getElementById("NetA").value=netA;

//Jauge temps travail
var temps = document.getElementById("temps").value;
var resultemps = document.getElementById('resultemps')
resultemps.innerHTML=temps + "%";

//Jauge prélèvement source
var prelev = document.getElementById("prelev").value;
var resultprelev = document.getElementById('resultprelev')
resultprelev.innerHTML=prelev + "%";

//Statut
if(document.getElementById("noncadre").checked==true){ 
    var messtatu = document.getElementById('messtatu')
    messtatu.innerHTML="Non cadre";
  }

  if(document.getElementById("cadre").checked==true){ 
    var messtatu = document.getElementById('messtatu')
    messtatu.innerHTML="Cadre";
  }

  if(document.getElementById("publique").checked==true){ 
    var messtatu = document.getElementById('messtatu')
    messtatu.innerHTML="Fonction publique";
  }

  if(document.getElementById("liberal").checked==true){ 
    var messtatu = document.getElementById('messtatu')
    messtatu.innerHTML="Profession libérale";
  }

  if(document.getElementById("portage").checked==true){ 
    var messtatu = document.getElementById('messtatu')
    messtatu.innerHTML="Portage salarial";
  }

console.log(brutH)

}

function reset(){
//Brut
document.getElementById("BrutH").value="";
document.getElementById("BrutM").value="";
document.getElementById("BrutA").value="";

//Net
document.getElementById("NetH").value="";
document.getElementById("NetM").value="";
document.getElementById("NetA").value="";

//Jauge temps travail
document.getElementById("temps").value=50;
var resultemps = document.getElementById('resultemps')
resultemps.innerHTML="50%";

//Jauge prélèvement source
document.getElementById("prelev").value=50;
var resultprelev = document.getElementById('resultprelev')
resultprelev.innerHTML="50%";
}

if(document.getElementById("noncadre").checked==true){ 
  var messtatu = document.getElementById('messtatu')
  messtatu.innerHTML="Non cadre";
}

function valide(){
  if(document.getElementById("12").checked==true){
  var valide = document.getElementById('img12')
  valide.innerHTML='<img src="verifier.png" class="img">';
}

if(document.getElementById("12").checked==true){
  var valide = document.getElementById('img12')
  valide.innerHTML='<img src="verifier.png" class="img">';
}
}