// Pour Ternaire Js

alert('coucou');

let x = 15;
let y = -20;
//console.log(x,y);

// faire un if pour vérifier si x est supérieur o u égal à 10
//et injecte le résultat dans p1

console.log(x,y);
if( x >= 10 ){
    document.getElementById('p1').innerHTML = 'x est supérieur ou égal à 10 ';
}
else{
    document.getElementById('p1').innerHTML = 'x est inférieur à 10 ';
}

//la même condition en ternaire
// ? équivaut à if ; : équivaut à else

// test ?/if 'bloc de code' : else : bloc de code

document.getElementById('p2').innerHTML = x >= 10 ? 'x est supérieur ou égal à 10'
 :' x est inférieur à 10';

// tester si y est supérieur à 10
//if else p3.

if( y > 10 ){
    document.getElementById('p3').innerHTML = 'y qui vaut ' + y + ' est supérieur à 10 ';
}
else{
    document.getElementById('p3').innerHTML = 'y qui vaut ' + y + ' est inférieur à 10 ';
}   

//ternaire p4
document.getElementById('p4').innerHTML = y > 10 ? 'y est supérieur à 10' : ' y est inférieur à 10';
