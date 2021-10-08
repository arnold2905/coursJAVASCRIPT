//If...else if...ifelse

let x = 1;

if( x > 1) { // si c'est
    alert('x contient une valeur strictement supérieure à 1');
} else if ( x == 1) {
    alert(' SINON VRAI x contient une valeur égale à 1');
} else { // sinon 
    alert('FAUX x contient une valeur strictement inférieure à 1');
}

x = -10;
console.log(x);

if( x > 1) {
    alert(' x contient une valeur strictement supérieure à 1')
} else if ( x==1) {
    alert( 'x est égal à 1')
} else if ( x < 1) {
    alert(' x contient une valeur strictement inférieure à 1 ')
}else if ( x < 0) {
    alert(' x contient une valeur strictement inférieure à 0 ')
}else if ( x < -2) {
    alert(' x contient une valeur strictement inférieure à -2 ')
}

//EXO tester la valeur de a par rapport au chiffre 5 ; inférieur ?égal?supérieur? ou alors c'est pas un nombre,dans une condition multiple (blocs de code>document.write)

a = 5;
console.log(a);
if( a > 5 ) {
    alert(' a contient une valeur strictement supérieure à 5');
}
if( a > 5 ) {
    alert(' a contient une valeur égale à 5');
}
if( a < 5 ) {
    alert(' a contient une valeur strictement inférieure à 5');
}

else{
    document.write('<p> = a qui vaut ' + a + '  a est un nombre en valeur et/ou en type </p>')
}