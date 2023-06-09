let celsius = document.getElementById('ctemp')
let fahrenheit = document.getElementById('ftemp')
let kelvin = document.getElementById('ktemp')

/* Celcius to Fahrenheit and Kelvin */
celsius.oninput= ()=> {
    let f = (parseFloat(celsius.value)*9)/5+32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    
    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
};

/* Fahrenheit to Celcius and Kelvin */
fahrenheit.oninput= ()=> {
    let c = ((parseFloat(fahrenheit.value)-32)*5)/9;
    celsius.value = parseFloat(c.toFixed(2));
    
    let k = (parseFloat(fahrenheit.value) -32)*5/9+ 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
};

/* Kelvin to Celcius and Fahrenheit */
kelvin.oninput= ()=> {
    let f = (parseFloat(kelvin.value)-273.15)*9/5+32;;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvin.value)-273.15);
    celsius.value = parseFloat(c.toFixed(2));
};
