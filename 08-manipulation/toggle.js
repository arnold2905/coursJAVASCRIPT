//Page pour Toggle 

//alert('coucou');

let bouton = document.querySelector('#cacheImage');
console.log(bouton);

let photo = document.querySelector('.cache');
console.log(photo);

function clickBouton() {
    photo.classList.toggle('cache');
}
bouton.addEventListener('click', clickBouton); 