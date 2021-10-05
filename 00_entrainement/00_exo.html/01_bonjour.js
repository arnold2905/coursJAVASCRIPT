//Ficher pour 01 bonjour js

//let nom = prompt('Quel est votre nom ?');
//console.log(nom);

//let prenom = prompt('Quel est votre prénom?');
//console.log(prenom);

//alert('Vous êtes Monsieur ' + prenom + ' ' + nom +'.');

let questionPrenom = 'Quel est votre prénom ?';
let questionNom = 'Quel est votre nom ?';

let prenom = prompt(questionPrenom);
let nom = prompt(questionNom);

// console.clear permet de nettoyer la console
console.clear();
console.log(prenom, nom);

alert('Bonjour, ' + prenom + ' ' + nom+ ' !');