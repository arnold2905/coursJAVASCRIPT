//Pour Boucles Js

//alert('coucou');

// while

let w1 = 0;

console.log(typeof w1, w1);

while( w1 < 10) { // tant que c'est vrai
    document.getElementById('while').innerHTML += 'w1 contient la valeur ' + w1 + ' <br>'; // += sert à rajouter la chaîne de caractères (les lignes successives) tant que la boucle n'est pas terminée
    console.log(typeof w1, w1);
    w1 ++; // w1 ++ sert à incrémenter (rajouter une fois) la valeur de la variable de départ
}