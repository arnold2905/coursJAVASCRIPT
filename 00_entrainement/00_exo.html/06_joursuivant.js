// Page pour Exo 06 jour suivant

//alert('coucou');

//let jourJ = "lundi";
//let jourSuivant = "";

//let = prompt('Quel jour sommes-nous ?');
//let affichageJour=document.getElementById('affichage-jour');

//if (jourJ == 'lundi') {
 //   affichageJour.innerHTML+= 'Aujourd\'hui nous sommes le' +jourJ+ ' et demain nous serons le mardi';
//   jourSuivant == "mardi";
//} else if (jourJ == "mardi") {
 //   affichageJour.innerHTML+='Aujourd\'hui nous sommes le' +jourJ+ ' et demain nous serons le mercredi';
//  jourSuivant = "mercredi";
//} else if (jourJ == "mercredi") {
//  jourSuivant = "jeudi";
//} else if (jourJ == "jeudi") {
//  jourSuivant = "vendredi";
//} else if (jourJ == "vendredi") {
//  jourSuivant = "samedi";
//} else if (jourJ == "samedi") {
//  jourSuivant = "dimanche";
//} else if (jourJ == "dimanche") {
//  jourSuivant = "lundi";
//} else {
//  console.log("Erreur : jour non reconnu !");
//}

var jour = prompt('Quel jour sommes-nous ?');
console.log(typeof jour, jour);

let leP1 = document.getElementById('p1');

if (jour === 'lundi' || jour === 'Lundi') {
    leP1.innerHTML = ' Demain c\'est mardi';
} else if (jour === 'mardi'){
    leP1.innerHTML = ' Demain c\'est mercredi';
} else if (jour === 'mercredi'){
    leP1.innerHTML = ' Demain c\'est jeudi';
} else if (jour === 'jeudi'){
    leP1.innerHTML = ' Demain c\'est vendredi';
} else if (jour === 'vendredi'){
    leP1.innerHTML = ' Demain c\'est samedi';
} else if (jour === 'samedi'){
    leP1.innerHTML = ' Demain c\'est dimanche';
} else if (jour === 'dimanche'){
    leP1.innerHTML = ' Demain , bon courage pour la semaine !';
} else {
    leP1.innerHTML = ' Ce jour n\'existe pas ';
}

// A faire plus tard : version Rachid avec tableau

// Version switch

var jour2 = prompt('Quel jour sommes-nous ?');
console.log(typeof jour2, jour2);

let leP2 = document.getElementById('p2');

switch(jour2){
    case 'lundi':
        leP2.innerHTML = 'Demain c\'est le mardi';
        break;
    case 'mardi':
        leP2.innerHTML = 'Demain c\'est le mercredi';
        break;
    case 'mercredi':
        leP2.innerHTML = 'Demain c\'est le jeudi';
        break;
    case 'jeudi':
        leP2.innerHTML = 'Demain c\'est le vendredi';
        break;
    case 'vendredi':
        leP2.innerHTML = 'Demain c\'est le samedi';
        break;
    case 'samedi':
        leP2.innerHTML = 'Demain c\'est le dimanche';
        break; 
    case 'dimanche':
        leP2.innerHTML = 'Demain , bon courage pour la semaine !';
        break;   
    default:
        leP2.innerHTML = 'Ce jour n\'existe pas';
}