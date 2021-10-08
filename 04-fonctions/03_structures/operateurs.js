// Pour les opérateurs logiques


alert('coucou');

// ET OU ou NON
 
let x = 5, y = -20;

console.log(x,y);

// ET => &&

if( x>=0 && x<=10){
    document.getElementById('p1').innerHTML = 'x vaut ' + x + ' et est compris entre 0 et 10 ';
}

// OU ||

if( y < -10 || y > -10){
    document.getElementById('p2').innerHTML = 'y vaut ' + y + ' est une valeur plus petite que -10 ou plus grande que 10 ';
}

// NON ce n'est pas vrai !
if ( ! ( x>= 2)) {
    document.getElementById('p3').innerHTML = ' x qui contient ' + x + ' est supérieur à 2';
}