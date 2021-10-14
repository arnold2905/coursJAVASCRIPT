//Fonctions JS

//alert('coucou');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();

// replace
let discours1 = 'Bonjour , je suis Donald Trmp et j\' ai gagné !';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump' , 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

// création de fonctions

// 1 - multiplier le résultat de random() par 100

function randomFois100() {
    return Math.random() * 100;
}

console.log(randomFois100);

document.getElementById('p3').innerHTML = randomFois100();

// 2nd exemple : une multiplication
// mot clé + nom de la fonction
function multiplier(nbr1,nbr2) {
    //return(nbr1*nbr2);
    return('Multiplication :' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1*nbr2));
}

// ici on appelle la fonction
// un appel de la fonction
console.log(multiplier(2,56)); //la fonction avec les arguments
document.getElementById('p4').innerHTML = multiplier(56,9);

// exo faire une fonction pour soustriare un nombre d'un autre 
// soustraction

function soustraire(nbr1,nbr2) {
    //return(nbr1-nbr2);
    return('Soustraction :' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1-nbr2));
}
console.log(soustraire(15,5));
document.getElementById('p5').innerHTML = soustraire(15,5);

// additionner

function additionner(nbr1,nbr2) {
    //return(nbr1-nbr2);
    return('Addition :' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1+nbr2));
}
console.log(additionner(15,5));
document.getElementById('p6').innerHTML = additionner(15,5);

// modulo

function modulo(nbr1,nbr2) {
    //return(nbr1-nbr2);
    return('Modulo :' + nbr1 + ' % ' + nbr2 + ' = ' + (nbr1%nbr2));
}
console.log(modulo(7,3));
document.getElementById('p6').innerHTML = modulo(7,3);