//Page pour opérateurs js

//alert('coucou');

let x = 200;
let y = 40;
let z = 40;

console.log(x,y,z);

let a = x+1;
let b = x+y;
let c = x-y;
let d = x*y;
let e = x/y;
//% correspond au reste en entier d'une division
let f = 10 % 3;
//** exponentielle de 2 = 2*2*2
let g = 2**3;

console.log(a,b,c,d,e);

console.log(f);

console.log(g);

//une alerte pour afficher les résultats

alert('a contient : ' + a +
'\n b contient : ' + b +
'\n b contient : ' + c +
'\n b contient : ' + d +
'\n b contient : ' + e + 
'\n b contient : ' + f +
'\n g contient : ' + g + '.'
);

//priorité des calculs

let h = 1-2-3;
//l'opération s'effectue de gauche à droite
console.log(h);

let j = 1+4-5;
console.log(j);

let k = 2**3**2
console.log(k)

//avec des parenthèses

let l = (1 - 2) * 3;
console.log(l);

let m = 58;
console.log(m);
m += 2;
console.log(m)
