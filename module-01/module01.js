// 1. Corregir los errores de sintaxis en el siguiente código:
/* function addNumbers(x, y) {
    return x + y;
    }
    console.log(addNumbers(3, 6)); */
// tsc --init para inicializar el tsconfig.json
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc -w para compilar el archivo tsconfig.json
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
// tsc module01.ts para compilar el archivo
