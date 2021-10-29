//Pour Saisie d'un niombre avec la boucle while

//On initialise une variable 

console.log('************');

var nombre = 0;
console.log(typeof nombre, nombre);

console.log('******While******');

while (nombre < 50 || nombre > 100) {
    nombre = prompt ('Entrez un nombre compris entre 50 et 100 !')
    console.log(typeof nombre);
}

document.write('<p> Vous avez rentrer le chiffre ' + nombre + ' la variable récupérée est bien comprise entre 50 et 100. </p>');