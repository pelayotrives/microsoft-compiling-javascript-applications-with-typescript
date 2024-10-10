"use strict";
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module07-X.tsc en module07-X.js.
node module07-X.js para ejecutar el archivo y ver el resultado en consola. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = returnGreeting;
function returnGreeting(greeting) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
function getLength(message) {
    return message.length;
}
