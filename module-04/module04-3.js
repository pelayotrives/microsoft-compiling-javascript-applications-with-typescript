"use strict";
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
let addNumbers = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
    ;
};
console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
console.log(doCalculation('add')(1, 2));
