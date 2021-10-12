//Fonctions JS

//alert('coucou');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();

// replace
let discours1 = 'Bonjour , je suis Donald Trmp et j\' ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump' , 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

