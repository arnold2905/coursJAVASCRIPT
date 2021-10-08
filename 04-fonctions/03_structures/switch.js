// Pour Switch JS

//alert('coucou');

let x =15;console.log(typeof x , x);

//switch(), case break, case break, default

// x = 2 ? ou 5 ? ou 10 ? ou 15 ? ou 20 ?

switch(x) { // switcher , commuter , substituer
    case 2:
        document.getElementById('p1').innerHTML = ' x stocke la valeur 2';
        break;
    case 5:
        document.getElementById('p1').innerHTML = ' x stocke la valeur 5';
        break; 
    case 10:
        document.getElementById('p1').innerHTML = ' x stocke la valeur 10';
        break; 
    case 15:
        document.getElementById('p1').innerHTML = ' x stocke la valeur 15';
        break;   
    case 20:
        document.getElementById('p1').innerHTML = ' x stocke la valeur 20';
        break;   
    default:
        document.getElementById('p1').innerHTML = ' x ne contient ni 2, ni 5, ni 10, ni 15, ni 20 !!!';
} // fin switch