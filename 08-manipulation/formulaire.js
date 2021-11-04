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

function inscriptionForm (event) { // récupération du contenu des champs du formulaire
    event.preventDefault();


    let prenom = event.target.prenom.value,
    nom = event.target.nom.value,
    email = event.target.email.value,
    mdp2 = event.target.mdp2.value,
    confmdp2 = event.target.confmdp2.value;

    console.log( prenom, nom, email, mdp2, confmdp2);
}