//Page Exo Tournez manège

//alert('coucou');

// 1- boucle WHILE
let manege = 0;
// console.log(typeof manege, manege);
while (manege < 3) {
    manege++;
    // console.log(manege);
    document.getElementById('p1').innerHTML += 'while 1 ; c\'est le tour n° ' + manege + '<br>';
} 

// let tour1 = 0;
// console.log(typeof tour1, tour1);
// while (tour1 < 3) {
//     document.getElementById('tour1').innerHTML += 'C\'est le tour de manège numéro ' + tour1 + '<br>';
//     tour1++;
//     console.log(typeof tour1, tour1);
// }

let nbrTours1 = parseInt(prompt('WHILE / Combien de tours de manège voulez faire ? ', 'saisissez un nombre, svp'));
console.log(typeof nbrTours1, nbrTours1);

let manege2 = 0;
while (manege2 < nbrTours1) {
    manege2++;// si j'incrémente avant le bloc de code le compte démarre à 1 et s'arrête à nbrTours1
    console.info(manege2);
    document.getElementById('p2').innerHTML += 'while 1 ; c\'est le tour n° ' + manege2 + '<br>';
	// manege2++;// si j'incrémente après le bloc de code le compte démarre à 0 et s'arrête à nbrTours1 - 1
} 

for (let i = 1; i <= 10; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
        // console.info(i);
        document.getElementById('p3').innerHTML += 'for 1 ; c\'est le tour n°' + i + '<br>';
    }

let nbTours2 = parseInt(prompt('FOR / Combien de tours à faire ?')); 
for (let i = 1; i <= nbTours2; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
    console.info(i);
    document.getElementById('p4').innerHTML += 'FOR /  Avec une boucle for ; c\'est le tour n°' + i + '<br>';
}

//let x1 = 0;
//console.log(typeof x1, x1);

//let i = 0;
//console.info(typeof i, i);

//while(x1 < 5){
//    document.getElementById('p1').innerHTML +=
//   'Avec while ' + x1 + ' c\est le tour n°'
//    + (x1 + 1) + ' dans la boucle<br>'
//    x1++;
//}

//for(let i = 0; i < 5; i++){
//    document.getElementById('p2').innerHTML +=
//    ' Avec for' + i + ' c\est le tour n°'
//    + (i + 1) + ' dans la boucle<br>';
//}

//let x2 = prompt('Combien de tours voulez-vous effectuer?');
//while(x2 < 10){
//    document.getElementById('p1').innerHTML +=
//    'Avec while ' + x2 + ' c\est le tour n°'
//    + (x2 + 1) + ' dans la boucle<br>'
//    x2++;
//}

//let wi = prompt('Combien de tours voulez-vous effectuer?');
//for(let i = 0; i <100 ; i++){
//    document.getElementById('p2').innerHTML +=
//    ' Avec for' + i + ' c\est le tour n°'
//    + (i + 1) + ' dans la boucle<br>';
//}