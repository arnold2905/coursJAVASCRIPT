//Page pour yayi_exo 16 JS

//alert('jeu');

let unJeu= ''; 
console.log(typeof unJeu, unJeu);
let i = 1;

while ((unJeu !== 'oui') && (unJeu!== 'non')) {
    unJeu = prompt(' On joue au jeu \'ni oui ni non\' Allez taper quelque chose à votre guise!');
    console.log(unJeu);
    i++;
}
console.log('--- Fin de la partie----');
console.log(unJeu);
document.getElementById('p2');
document.getElementById('p2').innerHTML = 'Vous avez perdu !';


