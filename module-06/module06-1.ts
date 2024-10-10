//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module06-X.tsc en module06-X.js.
node module06-X.js para ejecutar el archivo y ver el resultado en consola. */

// Declare una interfaz simple denominada Identity que tenga dos propiedades, value y message, y dos variables de tipo genérico, T y U, para los tipos de las propiedades.
// Después, agregue una signatura genérica de un método denominado process que devuelva un valor del tipo T.
// Defina una clase genérica denominada processIdentity que implemente la interfaz ProcessIdentity. En este caso, asigne a los tipos de variable de la clase processIdentity los nombres X e Y. Puede usar nombres de variable diferentes en la interfaz y en la clase porque el valor del tipo se propaga y el nombre de la variable no importa.
// Declare una nueva variable y asígnele un nuevo objeto processIdentity; para ello, pase number y string para los tipos de variable X e Y, y number y string como valores de argumento.

interface Identity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class ProcessIdentity<X, Y> implements Identity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process(): X {
        console.log(this.message);
        return this.value;
    }
}

let processor = new ProcessIdentity<number, string>(100, "Hello, world!");
console.log(processor.process());

// También puede declarar una interfaz genérica como un tipo de función.
// Declare una interfaz genérica denominada NAME que incluya la signatura genérica de un método, (value: T, message: U): T.
// Observe que el método no tiene nombre. De esta manera, puede aplicarlo a cualquier función con una signatura de tipo coincidente.
// También puede declarar una interfaz genérica como un tipo de función.
// Declare una interfaz genérica denominada NAME que incluya la signatura genérica de un método, (value: T, message: U): T. Observe que el método no tiene nombre. De esta manera, puede aplicarlo a cualquier función con una signatura de tipo coincidente.
// Declare una variable de tipo de función denominada processor con la interfaz NAME como el tipo de variable, y pase number para el tipo T y string para el tipo U.
// Después, asígnele la función NAME. Puede usar esta variable como una función en el código y TypeScript comprobará los tipos.

interface ProcessIdentity2<T, U> {
    (value: T, message: U): T
}

function processIdentity2<T, U> (value: T, message: U): T {
    console.log(message);
    return value;
}

let processor2: ProcessIdentity2<number, string> = processIdentity2;
console.log(processor2(200, "Bonjour, monde!"));

// También puede declarar una interfaz genérica e implementarla en una clase.
// Declare una interfaz denominada NAME que tenga dos propiedades, value y message, y dos variables de tipo genérico, T y U, para los tipos de las propiedades.
// Después, agregue una signatura genérica de un método denominado process que devuelva un valor del tipo T.
// Defina una clase genérica denominada NAME que implemente la interfaz NAME. En este caso, asigne a los tipos de variable de la clase NAME los nombres X e Y.
// Puede usar nombres de variable diferentes en la interfaz y en la clase porque el valor del tipo se propaga y el nombre de la variable no importa.

interface ProcessIdentity3<T, U> {
    value: T;
    message: U;
    process(): T;
}

class ProcessIdentityClass3<X, Y> implements ProcessIdentity3 <X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process(): X {
        console.log(this.message);
        return this.value;
    }
}

let processor3 = new ProcessIdentityClass3<number, string>(300, "Hallo, Welt!");
console.log(processor3.process());