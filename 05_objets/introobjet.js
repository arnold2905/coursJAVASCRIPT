// JS pour la Programmation Orientée Objet 

//alert('coucou');

let auteur = 'Victor Hugo';

let utilisateur = { // ici on a une variable objet 
    //nom, email , age sont dex propriétés de l'objet utilisateur
    // nom : contient des propriétés qui sont dans un tableau (un array) qui commence à 0
    nom : ['Victor ', 'Marie' , 'Hugo'], // indice 0,1, 2
    age : 2, 
    email : 'tonton@hugo.fr', 
    adresse : 'Besancon',

    bonjour: function () {
        alert('Bonjour j\'ai ' + this.age + ' ans et mon nom est ' + this.nom [0] + '' + this.nom [1] + ''  +  this.nom [2]);
    }
}

console.log(typeof utilisateur, utilisateur);

utilisateur.bonjour();