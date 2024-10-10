/* Declare una interfaz denominada IceCream que incluya dos propiedades: flavor como string y scoops como number.
Declare una nueva variable denominada myIceCream de tipo IceCream y, luego, asigne valores a las propiedades obligatorias.
Ahora vamos a crear una función en la parte inferior denominada tooManyScoops, que usa la interfaz IceCream como tipo de parámetro. Esta función comprueba el número de "scoops" en el objeto IceCream y devuelve un mensaje según el resultado.
Para probar el trabajo, pase el objeto {flavor: 'vanilla', scoops: 5} como parámetro y devuélvalo a la consola para comprobar el resultado. */

//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module03-1.tsc en module03-1.js.
node module03-1.js para ejecutar el archivo y ver el resultado en consola. */

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

let myIceCream: IceCream = {
    flavor: 'Vanilla',
    scoops: 2
};
console.log(myIceCream);

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops <= 2) {
        return '¡Disfruta de tu helado! Son pocas bolas de helado...';
    } else if (dessert.scoops === 3) {
        return '¡Bien! ¡Buen número de bolas de helado!';
    } else {
        return '¡Cuidado! Demasiadas bolas de helado...';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 1}));

/* En la declaración de la interfaz IceCream, declare una nueva interfaz denominada Sundae que amplíe la interfaz IceCream.
La interfaz Sundae incluye cuatro nuevas propiedades:

sauce del tipo de literal 'chocolate' | 'caramel' | 'strawberry'
nuts del tipo boolean (opcional)
whippedCream del tipo boolean (opcional)
instructions del tipo boolean (opcional) */

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

// Para probar la nueva interfaz, vamos a duplicar la variable myIceCream al tipo Sundae.

let myOtherIceCream: Sundae = {
    flavor: 'Vanilla',
    scoops: 3,
    sauce: 'chocolate',
    nuts: true,
    whippedCream: true,
    instructions: 'Puede contener trazas de nueces.'
};

// Ahora intente implementar la interfaz Sundae en la función tooManyScoops.

function otherTooManyScoops(dessert: Sundae) {
    if (dessert.scoops <= 2) {
        return '¡Disfruta de tu helado! Son pocas bolas de helado...';
    } else if (dessert.scoops === 3) {
        return '¡Bien! ¡Buen número de bolas de helado!';
    } else {
        return '¡Cuidado! Demasiadas bolas de helado...';
    }
}
console.log(otherTooManyScoops({flavor: 'vanilla', scoops: 3, sauce: 'chocolate'}));