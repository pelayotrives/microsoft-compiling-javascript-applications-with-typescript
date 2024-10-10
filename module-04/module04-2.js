"use strict";
/*
1.-
Escriba la siguiente función de flecha, que acepta tres parámetros necesarios
-------------------------------------------
let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;
-------------------------------------------
Pruebe a llamar a la función escribiendo addThreeNumbers(10, 20). TypeScript genera el error Se esperaban 3 argumentos, pero obtuvo 2. No se proporcionó un argumento para "z". Cuando se ejecuta, la función devuelve NaN porque el tercer argumento se ha pasado como undefined, lo que hace que el cálculo no sea válido.
En la función, pruebe a convertir el y parámetro en opcional. ¿Qué sucede?
TypeScript genera un error porque la posición de los parámetros opcionales es importante. En la lista de parámetros, los parámetros opcionales deben seguir todos los parámetros necesarios. En lugar del parámetro y, pruebe a convertir el parámetro z en opcional. Además, para que esta función devuelva el valor correcto, también debe actualizarla para abordar la posibilidad de que z se pueda pasar como undefined. Ahora debería poder llamar a la función mediante addThreeNumbers(10, 20) o addThreeNumbers(10, 20, 30).

2.-
Escriba la siguiente función de flecha, que acepta tres parámetros necesarios.
-------------------------------------------
let subtractThreeNumbers = (x: number, y: number, z: number): number => x - y - z;
-------------------------------------------
Asigne un valor predeterminado de 100 al parámetro z, reemplazando por z: number = 100.
*/
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module04-1.tsc en module04-1.js.
node module04-1.js para ejecutar el archivo y ver el resultado en consola. */
let addThreeNumbers = (x, y, z) => {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
let result1 = addThreeNumbers(1, 2, 3);
console.log(result1);
let subtractThreeNumbers = (x, y, z = 100) => x - y - z;
let result2 = subtractThreeNumbers(1, 2);
console.log(result2);
