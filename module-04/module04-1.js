"use strict";
/*
1.-
Copie la siguiente función de JavaScript
-------------------------------------------
function displayAlert(message) {
    alert('The message is ' + message);
}
-------------------------------------------
Ahora, asigne el tipo string al parámetro message.
Pruebe a llamar a la función, pasando string como parámetro. Ahora, pruebe a pasar un valor number.
2.-
Copie el siguiente código JavaScript
-------------------------------------------
function sum(input) {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
-------------------------------------------
Pruebe a llamar a la función con un solo número como parámetro
*/
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module04-1.tsc en module04-1.js.
node module04-1.js para ejecutar el archivo y ver el resultado en consola. */
function displayAlert(message) {
    console.log('The message is ' + message);
}
displayAlert('Hello, World!');
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    console.log(5);
}
sum([1]);
