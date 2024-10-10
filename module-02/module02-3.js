"use strict";
// 1. Modifica el código para añadir tipos a las declaraciones de variables. El JavaScript resultante debería tener el mismo aspecto que el ejemplo original cuando hayas terminado. */
/* let x;
let y;
let a;

x = 'five';
y = 7;
a = x + y;

console.log(a); */
//! Respuesta
// tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc para compilar el archivo module02-3.tsc en module02-3.js.
// node module02-3.js para ejecutar el archivo y ver el resultado en consola.
let x;
let y;
let a;
x = 5;
y = 7;
a = x + y;
console.log(a);
