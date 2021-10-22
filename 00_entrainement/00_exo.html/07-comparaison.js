//Page pour Exo 07 Comparaison


//alert('coucou');

// parseInt permet les conversion de type

let nbr1 = parseInt(prompt('Saisissez un chiffre?'));
console.log(typeof nbr1, nbr1);

let nbr2 = parseInt(prompt('Saisissez un chiffre?'));
console.log(typeof nbr2, nbr2);

if (nbr1 > nbr2) {
    document.getElementById('p1').innerHTML =('nbr1 est une valeur strictement supérieure à nbr2');
} else if (nbr1 < nbr2){
    document.getElementById('p2').innerHTML = ('nbr1 est une valeur strictement inférieure à nbr2');
}else {
    document.getElementById('p3').innerHTML = ('nbr1 et nbr2 sont égaux');
}


// isNan() : transcrit ' ce n'est pas un nombre'
// Vérification préalable: voir si l'utilisateur a saisi des nombres 

if ((!isNaN(nbr1)) && (!isNaN(nbr2))) {
    if (nbr1 > nbr2) {
        document.getElementById('p1').innerHTML =('nbr1 est une valeur strictement supérieure à nbr2');
    } else if (nbr1 < nbr2){
        document.getElementById('p2').innerHTML = ('nbr1 est une valeur strictement inférieure à nbr2');
    }else {
        document.getElementById('p3').innerHTML = ('nbr1 et nbr2 sont égaux');
    }
} else {
    document.getElementById('p3').innerHTML = ('Vous n\'avez pas saisi de nombre !');
}