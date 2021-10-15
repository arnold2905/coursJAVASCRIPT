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


let para2 = document.getElementById('p2');
console.log(typeof para2,para2);

para2.addEventListener('dblclick', function () {
    alert('Et là un double clicque sur le paragraphe!');
});

// fonctions récursives

function decompte(t) {
    if ( t > 10 ) {
        document.getElementById('p3').innerHTML += t + ' - ';
        return decompte ( t - 10);
    } else {
        return t;
    }
}

decompte (1000);