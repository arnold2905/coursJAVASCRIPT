//Page pour Exo - 13 Parité

//alert('coucou');

//for ( var i = 1; i <=20; i++ ) {
//    if ( i % 2 === 0 ) {
//        console.log( i + 'est pair')    }
//}


for (var i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i + ' est pair');
    }else{
        console.log(i + ' est impair');
    }
}

console.log('***************');

console.log('10 % 2 :' , 'Affiche 0 car 10 = 5 *2 + 0');
console.log('11 % 2 :' , 'Affiche 1 car 11 = 5 *2 + 1');
console.log('18 % 3 :' , 'Affiche 0 car 18 = 6 *3 + 0');
console.log('19 % 3 :' , 'Affiche 1 car 19 = 6 *3 + 1');
console.log('20 % 3 :' , 'Affiche 2 car 20 = 6 *3 + 2');

console.log('***************');

// var nombre = prompt('Entrez Un Nombre S\'il Vous Plait ');
// // console.log(nombre);
// for (let i = 0; i < nombre; i++) {
//     if (i % 2 === 0) {
//         console.log(i + 'est pair' )
//         document.getElementById('p1').innerHTML += '<br> '+ i  + ' est pair';
       
//      } else {
//         console.log(i + ' est impair');
//     document.getElementById('p1').innerHTML +=  '<br> ' + i  +  ' est impair';
//     }


// }

// var nombre = parseInt(prompt('Entre Un Nombre S\'il Vous Plait '));
// console.log(nombre);

// if(!isNaN(nombre)){for (let i = 0; i < nombre; i++) {
//     if (i % 2 === 0) {
//             console.log(i + 'est pair' )
//             document.getElementById('p1').innerHTML += '<br> '+ i  + ' est pair';
       
//      } else {
//             console.log(i + ' est impair');
//             document.getElementById('p1').innerHTML +=  '<br> ' + i  +  ' est impair';
//     }
// }
// }else{
//     document.getElementById('p1').innerHTML = '<p>Vous n avez pas saisi de nombre(s)</p>';
// }

// exo 2 FOR
document.write('<p>*************** EXO 2 ***************</p>');

var nbrUtilisateur1 = parseInt(prompt('Exo 2 : rentrez un nombre entier, merci '));
console.log(typeof nbrUtilisateur1, nbrUtilisateur1);

var nbrUtilisteurMax = (nbrUtilisateur1 + 10);
console.log(typeof nbrUtilisteurMax, nbrUtilisteurMax);

for (var i = nbrUtilisateur1; i<=nbrUtilisteurMax; i++) {
   if (i % 2 === 0) {
      document.write('<p class="stabilo"> ' + i + ' est pair.</p>');
   } else {
       document.write('<p> ' + i + ' est impair.</p>');
   }
}

// exo 3 WHILE
document.write('<p>*************** EXO 3 ***************</p>');

var nbrUtilisateur2 = parseInt(prompt ('Exo 3 : Rentrez un nombre entier , merci !'));
console.log(typeof nbrUtilisateur2, nbrUtilisateur2);

var nbrUtilisateur2 = (nbrUtilisateur2 + 10);
console.log(typeof nbrUtilisateur2, nbrUtilisateur2);

while (nbrUtilisateur2 <= nbrUtilisateur2);{
    //document.write ('code');
    //nbrUtilisateur2++;
    if (nbrUtilisateur2 % 2 === 0)  {
        document.write ('<p class = "stabilo">' + nbrUtilsateur2 + 'est pair.</p>');
    } else {
        document.write('<p>' + nbrUtilisateur2 + 'est impair.</p>');
    }
    nbrUtilisateur2++;
} 