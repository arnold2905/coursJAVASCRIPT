//Calcul TVA JS 

//alert('coucou');


//let prix = prompt('entrez le prix HT :');
//console.log(prix);
//let ht = Number(prix);
//console.log(ht);
//let tva = ht * 1.20;
//console.log(tva);

//document.write('<p> Résultat :' +  prix + ' HT pour un total de  TTC </p>');

let prixHT = prompt(' Le Prix Hors Taxes :')
console.log(prixHT);

//console.log("Le prix TTC est de : "  + (prixHT*1.2 + ' €'));

let prixTTC = prixHT* 1.2;
console.log("Le prix TTC est de : "  + prixHT*1.2 + ' €');

document.getElementById('p1').innerHTML = ('Pour un achat HT de' + prixHT + ' € le prix TTC est de :' + prixTTC + ' € ');