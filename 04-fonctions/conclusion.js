//Conclusion , fonctions anonymes et récursives

//alert('coucou');

// on crée une fonction anonyme
//function () {
//    alert ('Alerte exécutée dans une fonction anonyme');
//}

// comment l'appeler ; je la passe en variable

let monAlerte = function () {
    alert ('Alerte exécutée dans une fonction anonyme');
}

monAlerte();

// auto-invocation d'une fontion anonyme
//function () {
//    alert ('Alerte exécutée dans une fonction anonyme');
//}

// fonction auto-invoquée
(function () {
    alert ('Alerte exécutée dans une fonction anonyme');
})();

let para1 = document.getElementById('p1');
console.log(typeof para1,para1);

para1.addEventListener('click', function () {
    alert('Tu as bien cliqué sur le paragraphe 1!');
});