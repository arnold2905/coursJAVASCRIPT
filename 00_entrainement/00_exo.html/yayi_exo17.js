//Page pour yayi_exo 17 JS

//alert('coucou');

for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        document.getElementById('p1').innerHTML += '<p style="background: blue; color: #fff;text-align: center;"> GralaBu <br> </p>';
    }else if(i % 5 == 0){
        document.getElementById('p1').innerHTML += '<p style="background: orange; color: #fff;text-align: center;"> Bu <br> </p>';
    }else if(i % 3 == 0){
        document.getElementById('p1').innerHTML += '<p style="background: lightgreen; color: #fff;text-align: center;"> Grala <br> </p>';
    }else{
        document.getElementById('p1').innerHTML += i + '<br>';
    }
  }


