//Portée des fonctions

//alert('coucou');


// attention évitons de déclarer plusieurs variables dans différents espaces en utilisant mles mêmes noms

function porteNew (){
    let xLet = 1;
    var yVar = 2;

    if (true) {
    let xLet = 500;
    var yVar = 200;

    document.getElementById('p1').innerHTML = ' La variable let "xLet" dans le if = ' +xLet ;
    document.getElementById('p2').innerHTML = ' La variable var "yVar" dans le if = ' +yVar ;
    }// fin if

    document.getElementById('p3').innerHTML = ' La variable let "xLet" hors du if =' +xLet ;
    document.getElementById('p4').innerHTML = ' La variable let "yVar" hors du if =' +yVar ;

}//fin fonction

porteNew ();


let x = 5;
var y = 10;

function portee1() { // dans cette fonction j'appelle des variables qui ont une portée globale
    document.getElementById('p5').innerHTML = ' Depuis la fonction <code> portee1</code> : x = ' + x + ' et y = ' +y
}


function portee2() {
    let a = 123;
    let b = 456;
    document.getElementById('p6').innerHTML = ' Depuis la fonction <code> portee2</code> : a = ' + a + ' et b =' + b;
}

function portee3() { // les variables ont le même nom 
    let x = 222;
    let y = 444;
    document.getElementById('p7').innerHTML = ' Depuis la fonction <code> portee3</code> : x = ' + x + ' et y =' + y;
}

// appel des fonctions
portee1();
portee2();
portee3();

// on affiche les globales x et y
document.getElementById('p8').innerHTML = '<code> Ce code n\'est pas dans une fonction </code> ! Je suis dans l\'espace et je cherche les contenus de <code>x</code> et <code>y</code> : x = ' + x + ' et y = ' + y ;

// on va tenter d'afficher les locales cf. message dans la console 
document.getElementById('p9').innerHTML = ' Depuis l\'espace local : a = ' + a + ' et b = ' + b;