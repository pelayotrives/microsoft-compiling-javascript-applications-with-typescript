/* 
1.-
Defina un tipo de función llamado calculator mediante un alias de tipo. La signatura de tipo tiene una lista de parámetros (x: number, y: number) y devuelve un valor number, separados por un operador de flecha (=>).
2.-
Ahora puede usar el tipo de función como una firma de tipo al declarar funciones. Declare dos variables del tipo de función calculator, una para la operación de suma y otra para la de resta. Pruebe las nuevas funciones devolviendo el resultado de cada una de ellas a la consola.
3.-
También puede utilizar el tipo de función calculator para pasar valores de otra función. Escriba la función doCalculation, que devuelve el resultado de la función addNumbers o subtractNumbers según el valor pasado al parámetro operation.
4.-
Reemplace la función calculator por la interfaz Calculator en las declaraciones de variables. Cuando haya terminado, el código debería funcionar igual.
*/

//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module04-2.tsc en module04-2.js.
node module04-2.js para ejecutar el archivo y ver el resultado en consola. */

//? type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

let addNumbers: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;
let doCalculation = (operation: 'add' ): Calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    };
}


console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
console.log(doCalculation('add')(1, 2));


