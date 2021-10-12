// Boucle for

//alert('coucou');

for( let i = 0; i < 10; i++) {
    document.getElementById('p1').innerHTML += 'La variable i contient et est incrémentée :' + i + ' à chaque passage de la boucle <br>';
    //console.info(typeof i, i);
}

//i = itérateur ou curseur

for( let i = 0; i < 10; i++) {
    document.getElementById('tb1').innerHTML += '<tr><td> La variable i = </td><td> contient et est incrémentée :' + i + ' à chaque passage de la boucle </tr></td>';
    //console.info(typeof i, i);
}

for (let arreteToi = 0; arreteToi < 100; arreteToi++) {
    if (arreteToi == 56) {
        break;// instruction = condition insérée à l'intérieur de la boucle 
    }// fin de if
    document.getElementById('p2').innerHTML += ' La variable arreteToi contient ' + arreteToi + ' à chaque tour de boucle .<br>'
}// fin de for
