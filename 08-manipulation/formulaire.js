// Page pour Formulaire JS

// contrôle du formulaire avec une fonction
        // vérification des contenus dans les 2 input 

function controleForm() {  // event ; paramètre à enlever également
    //event.preventDefault(); // pour empêcher l'envoi du formulaire , à enlever quand le site est terminé

            if ( document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15 ) {
                console.log(document.form1.pseudo.value);
                console.log(document.form1.pseudo.value.length);
                alert('Votre pseudo doit contenir au moins 5 et au plus 15 caractères');
            }

            //idem pour le mot de passe entre 3 et 12 caractères
            if ( document.form1.mdp.value.length < 3 || document.form1.mdp.value.length > 12 ) {
                console.log(document.form1.mdp.value);
                console.log(document.form1.mdp.value.length);
                alert('Votre pseudo doit contenir au moins 3 et au plus 12 caractères');
            }
        }

// contrôle du formulaire d'inscription avec une fonction     

// récupérer le form par don id dans une variable 

let formInscrip = document.getElementById('formulaireInscription');
console.log(formInscrip);

// écoute de l'envoi du formulaire
formInscrip.addEventListener('submit' , inscriptionForm);

//création de la fonction 

function inscriptionForm(event) { // récupération du contenu des champs du formulaire
    event.preventDefault();
    let prenom = event.target.prenom.value,
        nom = event.target.nom.value,
        email = event.target.email.value,
        mdp2 = event.target.mdp2.value,
        confmdp2 = event.target.confmdp2.value;

    console.log( prenom, nom, email, mdp2, confmdp2);

    //expression régulière
    //https://regex101.com/

    let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // avant le @ on a le droit de mettre de a à z de 0 à 9 un . et _ et - 
    //après @ il faut au minimun 2 caractères puis un . et de à a z et au minimum 2 caractères


// let regex = new RegExp("([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}");

    console.log(regex);

    // Condition 1 - On va vérifier que Nom et Prénom ne sont pas vides
    // classList représente toute les classes de l'élément event.target
    // 'remove' enlève la class
    // add ajoute une class à l'élément event.target
    // console.log(event.target.prenom.classList);


    if ( prenom !== '' || nom !== '' ) {
        if ( prenom.length < 2) {
            event.target.prenom.classList.add("error");
            event.target.prenom.classList.remove("valide");
        } else {
            event.target.prenom.classList.add("valide");
            event.target.prenom.classList.remove("error");
        }

        if ( nom.length < 4) {
            event.target.nom.classList.add("error");
            event.target.nom.classList.remove("valide");
        } else {
            event.target.nom.classList.add("valide");
            event.target.nom.classList.remove("error");
        }
    }
    // condition 2 - différencier les mots de passe saisis

    if ( confmdp2 !== mdp2) {
        //event.target.mdp2.classList.add('error');
        //event.target.mdp2.classList.remove("valide");
        //event.target.confmdp2.classList.add('error');
        //event.target.confmdp2.classList.remove('valide');
        placeholder1.innerHTML ='Vos mots de passe doivent être identiques';
        document.getElementById('placeholder1').classList.add('rouge');
        document.getElementById('placeholder2').innerHTML = ('Vos mots de passe doivent être identiques');
        document.getElementById('placeholder2').classList.add('rouge');
    } else if ( mdp2.length < 8 || confmdp2 > 15) {
        event.target.mdp2.classList.add('error');
        event.target.mdp2.classList.remove("valide");
        event.target.confmdp2.classList.add('error');
        event.target.confmdp2.classList.remove("valide");
    } else {
        event.target.mdp2.classList.add('valide');
        event.target.mdp2.classList.remove("error");
        event.target.confmdp2.classList.add('valide');
        event.target.confmdp2.classList.remove("error");
    }

    // utilisation de la fonction régulière
    console.info(regex.test(email));

    if (regex.test(email) === false) {
        event.target.email.classList.add('error');
        event.target.email.classList.remove('valide');
    } else {
        event.target.email.classList.remove('error');
        event.target.email.classList.add('valide');
    }

}// fin de fonction 

// fonction pour vider les input: le bouton " Effacer"

document.getElementById('resetForm').addEventListener('click', function(event) {
    event.target.form.prenom.value = "";
    event.target.form.nom.value = "";
    event.target.form.email.value = "";
    event.target.form.mdp2.value = "";
    event.target.form.confmdp2.value = "";
});