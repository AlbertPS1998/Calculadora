function clicarCero(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "0";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; // Es para cambiar el texto cada vez que clicamos en el boton.//
}

function clicarUno(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "1";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarDos(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "2";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarTres(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "3";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarCuatro(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "4";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarCinco(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "5";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarSeis(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "6";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarSiete(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "7";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarOcho(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "8";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarNueve(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "9";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarIgual(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "=";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarComa(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + ".";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarSuma(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "+";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarDivision(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "/";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarMultiplicacion(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "*";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarResta(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value + "-";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarClear(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = "";
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function clicarDelete(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = value.slice(1,-1);
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
}

function stringToArray() {//No se porque cuando haces console.log empieza a crear la matriz a partir de la posición 22)//
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    let arr = value.split("");
    let arrReducida = [];
    for(var i = 22; i<=arr.length-1; i++){//Con esto nos devuelve a partir de la posición 22 que es donde empieza a tener sentido la matriz.//
     arrReducida.push(arr[i]);
    }

    return arrReducida;
}

let arrReducida = stringToArray();


/* Podria crear un bucle que coja uno a uno todos los elementos desde la posición 22 de la matriz hasta el final y los convierta en una
operacion convirtiendo cada caracter del string "" en uno normal*/

function clicarIgual(){
    var element = document.getElementById("pantalla");
    var value = element.innerHTML;
    value = eval(value);//eval nos permite transformar un string en una operación//
    console.log(value)
    document.getElementById("pantalla").innerHTML = value; 
    
}


var str1 = "123/3 + 4*0,5 -55 +1";
console.log(eval(str1));


/*Hay que conseguir que no se salga el texto para ello tenemos que hacer lo de appendChild en la pantalla*/