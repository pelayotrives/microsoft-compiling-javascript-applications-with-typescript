"use strict";
/* Declare una interfaz denominada IceCream que incluya dos propiedades: flavor como string y scoops como number.
Declare una nueva variable denominada myIceCream de tipo IceCream y, luego, asigne valores a las propiedades obligatorias.
Ahora vamos a crear una función en la parte inferior denominada tooManyScoops, que usa la interfaz IceCream como tipo de parámetro. Esta función comprueba el número de "scoops" en el objeto IceCream y devuelve un mensaje según el resultado.
Para probar el trabajo, pase el objeto {flavor: 'vanilla', scoops: 5} como parámetro y devuélvalo a la consola para comprobar el resultado. */
let myIceCream = {
    flavor: 'Vanilla',
    scoops: 2
};
console.log(myIceCream);
function tooManyScoops(dessert) {
    if (dessert.scoops <= 2) {
        return '¡Disfruta de tu helado! Son pocas bolas de helado...';
    }
    else if (dessert.scoops === 3) {
        return '¡Bien! ¡Buen número de bolas de helado!';
    }
    else {
        return '¡Cuidado! Demasiadas bolas de helado...';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 1 }));
// Para probar la nueva interfaz, vamos a duplicar la variable myIceCream al tipo Sundae.
let myOtherIceCream = {
    flavor: 'Vanilla',
    scoops: 3,
    sauce: 'chocolate',
    nuts: true,
    whippedCream: true,
    instructions: 'Puede contener trazas de nueces.'
};
// Ahora intente implementar la interfaz Sundae en la función tooManyScoops.
function otherTooManyScoops(dessert) {
    if (dessert.scoops <= 2) {
        return '¡Disfruta de tu helado! Son pocas bolas de helado...';
    }
    else if (dessert.scoops === 3) {
        return '¡Bien! ¡Buen número de bolas de helado!';
    }
    else {
        return '¡Cuidado! Demasiadas bolas de helado...';
    }
}
console.log(otherTooManyScoops({ flavor: 'vanilla', scoops: 3, sauce: 'chocolate' }));
