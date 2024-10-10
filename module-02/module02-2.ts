
// Modifica el código para añadir tipos a las declaraciones de variables.
// El JavaScript resultante debería tener el mismo aspecto que el ejemplo original cuando hayas terminado.

/* let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
} */

//! Respuesta
// tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc para compilar el archivo module02-2.tsc en module02-2.js.
// node module02-2.js para ejecutar el archivo y ver el resultado en consola.

let firstName:string;
let lastName:string;
let fullName:string;
let age:number;
let ukCitizen:boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}