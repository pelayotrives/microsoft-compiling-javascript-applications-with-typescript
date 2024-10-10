// Declare la matriz como el tipo que va a coincidir con el tipo de los elementos de la matriz.

/* let randomNumbers;
let nextNumber;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers); */

//! Respuesta
// tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc para compilar el archivo module02-5.tsc en module02-5.js.
// node module02-5.js para ejecutar el archivo y ver el resultado en consola.

let randomNumbers: number[] = [];
let nextNumber: number;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers); 