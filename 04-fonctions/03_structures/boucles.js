//Pour Boucles Js

//alert('coucou');

// Incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;
console.log(a, b, c, d);
document.getElementById('p1').innerHTML = 'post-incrementer // a contient ' + a + ' , là je post-incrémente de 1 , a est toujours égal à ' + a++ +' puis a est égal à ' + a + ' après post-incrémentation .';
console.log(a);

document.getElementById('p2').innerHTML = 'pré-incrementer // b contient ' + b + ' , là je pré-incrémente de 1 , b est maintenat  égal à ' + ++b ;
console.log(b);

document.getElementById('p3').innerHTML = 'post-décrementer // c contient ' + c + ' , là je post-décrémente de 1 , a est toujours égal à ' + c-- +' puis a est égal à ' + c + ' après post-décrémentation .'
console.log(c);

document.getElementById('p4').innerHTML = 'pré-incrementer // b contient ' + d + ' , là je pré-incrémente de 1 , d est maintenat  égal à ' + --d;
console.log(d);

// while

let w1 = 0;

console.log(typeof w1, w1);

while( w1 < 10) { // tant que c'est vrai
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + ' <br>'; // += sert à rajouter la chaîne de caractères (les lignes successives) tant que la boucle n'est pas terminée
    console.log(typeof w1, w1);
    w1 ++; // w1 ++ sert à incrémenter (rajouter une fois) la valeur de la variable de départ
}

// Exo : bouclez tant que w2 est inférieur à 10 sur id while 2

let w2 = 0;

console.log(typeof w2, w2);
while( w2 < 10) {
    document.getElementById('while2').innerHTML += 'w2 contient la valeur ' + w2 + ' <br>'; 
    console.log(typeof w2, w2);
    w2 ++; 
}


let w3 = 0;
console.log(typeof w3, w3);
do {
    document.getElementById('dowhile1').innerHTML += 'w3 contient la valeur ' + w3 + ' <br>';
    w3 ++;
}
while ( w3 < 10);