//Page pour Exo 8 Baccalauréat

//alert('coucou');

let moyenne = parseFloat(prompt('Quelle est votre moyenne au baccalauréat?'));
console.log(typeof moyenne, moyenne);

if (isNaN(moyenne))  {
    if (moyenne >= 0 && moyenne < 10) {
        document.getElementById('p1').innerHTML =('Vous êtes recalé');
    } else if (moyenne >=10 && moyenne < 12 ){
        document.getElementById('p1').innerHTML = ('Reçu sans mention');
    }else if (moyenne >= 12 && moyenne <=20 ) {
        document.getElementById('p1').innerHTML = ('Reçu avec mention');
    } else {
    document.getElementById('p1').innerHTML = ('Il aurait fallu réviser plus !');
}
}