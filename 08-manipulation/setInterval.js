//Page pour SetInterval

//alert('coucou');

let varImg = 0;
console.log(varImg, varImg);

let timer = window.setInterval('monDiaporama()', 1000);
// initialisation du timer avec setInterval ; c'est le nom de la fonction en mini-secondes
//console.log(timer, timer);

//let getAttrImg =  document.getElementById('ImgDiapo1').getAttribute('src');
//console.log(getAttrImg, getAttrImg);

function monDiaporama() {
    varImg +=1; // on incrémente et on affecte 1
    imgDiapo1.setAttribute('src' , 'img/' + varImg + '.jpg');
    if(varImg == 6) {
        clearInterval(timer);
    }

}

