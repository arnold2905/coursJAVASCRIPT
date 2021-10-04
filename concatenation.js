//Page js pour la concaténation et les littéraux de gabarit

//alert('coucou!');

//une variable dans laquelle on veut mettre âge avec un calcul

let monAge = 18+2;
console.log(monAge);

// utilisation du caractère d'echappement
let phrase = 'Bonjour j\'ai';

//let phrase2 = 'Bonjour j'ai faim';

//let test = '4+5';

console.log('phrase');

console.log(monAge, phrase);

//Mini exo faire une alerte et mettre "Bonjour, j'ai  20 ans"

alert(phrase + ''  + monAge +  ' ans.');

let x = 501;
let y = 99;


alert('x contient ' + x +
    '\ny contient ' + y +
    '\nLeur somme est égale ' + (x+y));

//console.log('x contient ' + x + ' y contient ' + y + ' leur somme est égale à ' + (x+y));    

//console.log('x contient ' + x + ' y contient ' + y + ' leur somme est égale à ' + (somme));    


//alert(`x contient ${x}`);
//alert(`y contient ${y}`);

//alert(`Leur somme est égale ${x+y}`);

alert(` x contient ${x} y contient ${y} leur somme est égale ${x+y}`);
