//Page pour Exo Multiplication

//alert('coucou');

//var nombre = prompt("Entrez le numéro de la table:","Saisir un entier ici");
//var nombre = parseInt (nombre);

//var i;
//for (i = 1; i <= 10; i++) {
//document.write( nombre+" x "+ i + " = "+ nombre*i + " <br> ");
//} 

//while (nombre < 2 || nombre > 9) {
//    nombre = prompt ('Entrez un nombre compris entre 2 et 9 !')
//    console.log(typeof nombre);
//    document.write(nombre+" x " + i + "=" + nombre*i +" <br>");
//}

//document.write('<p> Vous avez rentrer le chiffre ' + nombre + ' la //variable récupérée est bien comprise entre 2 et 9. </p>');

//for (var i = 1 ; i <= 10 ; i++) {
//    if (i = 2 || nombre > 9) {
//       document.write('<p>' + i + ' est compris entre 2 et 9.</p>');
//    } else {
//        document.write('<p>' + i + ' n\'est pas compris entre 2 et 9.</p>');
 //   }
 //}



var nombre1 = Number(prompt('Faisons la table de multiplication d\'un nombre '));
console.log(typeof nombre1 , nombre1);

for ( var i = 1; i <= 10; i++) {
    var resultat = nombre1 *i;
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';
}


var nombre2 = Number(prompt("Et maintenant un nombre entre 2 et 9"));
console.log(typeof nombre2, nombre2);

if ( nombre2 >=2 && nombre2 <= 9) {
    for ( var i = 1; i <= 10; i++) {
        var resultat = nombre2 *i;
        document.getElementById('p2').innerHTML += nombre2 + ' x ' + i + ' = ' + resultat + '<br>';
    } 
}else {
    document.getElementById('p2').innerHTML += "le nombre doit être compris entre 2 et 9 !"
}
