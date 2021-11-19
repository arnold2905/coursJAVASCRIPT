//Page pour Exo 18 Devinette 

alert('Bienvenue');

let nbreAleatoire = Math.random();
console.log(typeof nbreAleatoire, nbreAleatoire);


let nbre100 = nbreAleatoire * 100;
console.log(nbre100);

let nbre = Math.floor(nbre100);
  
for (var i = 1; i <= 6; i++ ) {
   var choix = parseInt(prompt('Saisis un nombre entre 1 et 100.  Tu as 6 essais.'));
        if (!isNaN(choix)) {
            if (nbre === choix) {
                alert('Bien joué !');
                i = 6;
            } else {
                if (nbre < choix) {
                    alert('Le nombre est plus petit que celui que tu as saisi ; essai ' + i + '/6');
                } else {
                    alert('Le nombre est plus grand que celui que tu as saisi  ; essai ' + i + '/6');
                }
            }
        } else {
            alert('Il faut choisir un nombre !');
        }       
        
    }

    alert('La bonne réponse était ' + nbre);
    let P1=document.querySelector('#p1');

    P1.innerHTML+='La bonne réponse était : '+nbre+'<BR>'
    P1.classList.add('bg-primary','text-white');
    // document.write('<p class = "stabilo">La bonne réponse était : ' + nbre + ' . </p>');

    console.log(nbre);

