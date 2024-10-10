"use strict";
/* Jugar con modificadores de acceso */
// static se utiliza para definir propiedades y métodos que pertenecen a la clase en sí misma, no a las instancias (objetos) creadas a partir de esa clase.
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module05-4.tsc en module05-4.js.
node module05-4.js para ejecutar el archivo y ver el resultado en consola. */
class Ferrari {
    // Constructor de la clase Ferrari
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        // Incrementar el contador de Ferraris
        Ferrari.numberOfFerraris++;
    }
    // Método estático para obtener el número de Ferraris
    static getNumberOfFerraris() {
        return Ferrari.numberOfFerraris;
    }
}
// Propiedades de la clase Ferrari
Ferrari.numberOfFerraris = 0;
// Crear instancias de Ferrari
let myFerrari1 = new Ferrari('Ferrari', 'red', 2);
let myFerrari2 = new Ferrari('Ferrari', 'yellow', 2);
let myFerrari3 = new Ferrari('Ferrari', 'black', 2);
// Obtener el número de Ferraris creados
console.log(Ferrari.getNumberOfFerraris());
