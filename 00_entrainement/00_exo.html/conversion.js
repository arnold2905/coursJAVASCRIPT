//Page pour conversion de degrés Celsuis en Farenheit

//alert('coucou');


//function conversionCelsius(celsius) {
  //let degresCelsius = celsius;
  //let conversionEnFahrenheit = degresCelsius * 9 / 5 + 32;
  //let degres = degresCelsius+'\xB0C is ' + conversionEnFahrenheit + ' \xB0F.';
 //   console.log(degres);
//}

//function conversionFahrenheit(fahrenheit) {
  //let degresFahrenheit = fahrenheit;
  //let conversionEnCelsius = (degresFahrenheit - 32) * 5 / 9;
  //let degres = degresFahrenheit+'\xB0F is ' + conversionEnCelsius + '\xB0C.';
    //console.log(degres);
//} 
//conversionCelsius(60);
//conversionFahrenheit(45);

var tempC = prompt('Rentrez une température en Celsius, merci.')
    //console.log(tempC);
    //console.log(9/5);
   // console.log(1*1.8);
    document.getElementById('li1').innerHTML = ' 1 degré Celsius = ' + ((1 * 1.8) + 32) +  ' Fahrenheit ';

    document.getElementById('li2').innerHTML = tempC + ' degrés Celsius = ' + ((tempC * 1.8) + 32) +  ' Fahrenheit ';

    var tempF = (tempC * 1.8) + 32;
    console.log(tempF);

    document.getElementById('li3').innerHTML = ('1 degré Fahrenheit = ' + ((1 - 32 ) / 1.8) + ' Celsius ' );

    document.getElementById('li4').innerHTML = ( + tempF + ' degré(s) Fahrenheit = ' + ((tempF - 32 ) / 1.8) + ' Celsius ' );
    // console.log(document.querySelectorAll('li'));

