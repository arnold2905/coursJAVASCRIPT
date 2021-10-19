//Js pour Evenements

//alert('coucou');

// évenements avec une fonction

let event1 = document.querySelector('#rouge');
console.log(event1);
console.log(event1.innerHTML);

// on va utiliser addEventlistener

//event1.addEventListener('click', fonctionDivRouge);

// maintenant on a besoin de crééer la fonction
// Pour débugger la fonction , je peux passer (e) dans les paramètres et faire un console.log(e) dans la fonction

//function fonctionDivRouge() {
//    console.log(e);
//    alert('Vous avez clicquer sur la div rouge !');
//}

//function fonctionDivRouge() {
//    alert('Vous avez clicquer sur la div #rouge et maintenant elle est verte !');
//    this.style.backgroundColor = 'green';
//}

// 2nd - exemple avec une fonction anonyme
//let event2 = document.querySelector('#p1');
//console.log(event2);

//event2.addEventListener('click', function() {
//    alert('Vous avez cliqué sur le paragraphe id p1');
//    this.style.backgroundColor = 'green';
//    this.style.color = 'black';
//});

// le même code, m^me fonctionnalité  ( exemple 2) sans utilisation de variable
document.querySelector('#p1').addEventListener('click', function() {
    alert('Vous avez cliqué sur le paragraphe id p1');
    this.style.backgroundColor = 'green';
    this.style.color = 'black';
});

// 2 - nouveau mot clef 'mouseover'

document.getElementById('orange').addEventListener('mouiseover', fonctionDivOrange);

function fonctionDivOrange(e) {
    //console.log('e:', e);
    //console.log('this:', this);
    alert('Vous avez survolé la div #orange');
    this.innerHTML = 'coucou';
    // changement de la taille du typo
    this.style.fontSize = '1.5em';
    //this.style.display = 'none';
}

// 3 - nouveau mot clef 'mouseout'

document.querySelector('#bleu').addEventListener('mouseout',fonctionDivBleu);

function fonctionDivBleu(e) {
    console.log(e);
    alert('Vous êtes passés sur la div #bleu');
    this.innerHTML = 'coucou2';
    this.style.fontSize = '1.5em';
}