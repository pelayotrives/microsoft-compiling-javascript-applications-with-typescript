
// 1. Corregir los errores de sintaxis en el siguiente código:
/* function addNumbers(x, y) {
    return x + y;
    }
    console.log(addNumbers(3, 6)); */

//! Respuesta
// tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc para compilar el archivo module01.tsc en module01.js.
// node module01.js para ejecutar el archivo y ver el resultado en consola.

function addNumbers(x:number, y:number) {
    return x + y;
  }
console.log(addNumbers(3, 6));