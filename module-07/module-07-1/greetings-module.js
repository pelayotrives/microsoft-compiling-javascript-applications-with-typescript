"use strict";
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module07-X.tsc en module07-X.js.
node module07-X.js para ejecutar el archivo y ver el resultado en consola. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = returnGreeting;
// Cree un archivo llamado greetings_module.ts y, después, agregue la función siguiente denominada returnGreeting.
// Agregue la palabra clave export antes del nombre de la función para que esté disponible en otros módulos.
// Cree un segundo archivo llamado greetings-utilities_module.ts y, después, agregue las dos funciones siguientes, returnGreeting y getLength, al archivo nuevo.
// Agregue export antes de la función returnGreeting para que esté disponible en otros módulos.
// No es necesario exportar la función getLength porque solo se utiliza en el ámbito del módulo.
function returnGreeting(greeting) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}
