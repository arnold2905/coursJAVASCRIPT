// Js pour objet littéral 

//alert('coucou');


let victor = {
    nom : ['Victor' , 'Marie', 'Hugo'],
    age : 2,
    email : 'tonton@hugo.fr',

    bonjour: function() {
        alert('Bonjour  je suis  '+ this.nom[0] + ' ' + this.nom[2] + ' et j\ai ' + this.age + ' ans. ');
    }
}

console.info(typeof victor, victor);

victor.bonjour();
// on accède aux propriétés qui contiennent des valeurs 
document.getElementById('p1').innerHTML = ' Nom : ' + victor.nom ;
document.getElementById('p2').innerHTML = ' Age : ' + victor.age +  ' ans.';
document.getElementById('p3').innerHTML = ' Email : ' + victor.email ;

// on modifie la valeur de âge
victor.age = 80;

console.info(typeof victor, victor);
document.getElementById('p4').innerHTML = ' NouvelAge : ' + victor.age +  ' ans.' ;

victor.metier = ' écrivain , dramaturge, poète';
console.info(typeof victor, victor);
victor.metier = ' écrivain , dramaturge, poète';
console.info(typeof victor, victor);
victor.adresse = ' en son avenue, à Paris';
console.info(typeof victor, victor);

// création d'une nouvelle méthode 
victor.bonjour2 = function() {
    alert('Bonjour j\'ai maintenant ' + this.age + ' age, je suis ' + this.metier + ' et je suis célèbre dans le monde entier ');
}

victor.bonjour2();
document.getElementById('p5').innerHTML = ' Bonjour je suis : ' + victor.nom[0] + ' ' + victor.nom[2] ;
