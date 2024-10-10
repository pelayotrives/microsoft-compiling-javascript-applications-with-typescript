"use strict";
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module06-X.tsc en module06-X.js.
node module06-X.js para ejecutar el archivo y ver el resultado en consola. */
class ProcessIdentity {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor = new ProcessIdentity(100, "Hello, world!");
console.log(processor.process());
function processIdentity2(value, message) {
    console.log(message);
    return value;
}
let processor2 = processIdentity2;
console.log(processor2(200, "Bonjour, monde!"));
class ProcessIdentityClass3 {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor3 = new ProcessIdentityClass3(300, "Hallo, Welt!");
console.log(processor3.process());
