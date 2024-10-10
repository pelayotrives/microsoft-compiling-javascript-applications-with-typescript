"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript Lab Start  */
// 1. Busque `// TODO Define the properties`.
// 2. Defina las propiedades en la clase: `_items` y `_sortOrder`.
// 3. Busque `// TODO Define the constructor`.
// 4. Defina el constructor para inicializar las propiedades.
// 5. Busque `// TODO Define the accessors`.
// 6. Defina las propiedades de acceso `get` y `set` para los parámetros `items` y `sortOrder`.
// 7. Busque `// TODO Define the methods`.
// 8. Mueva las funciones `sortAscending` y `sortDescending` a la clase y conviértalas en métodos privados.
// 9. Mueva la función `buildArray` a la clase y conviértala en un método público.
// 10. Busque `// TODO: Instantiate the BuildArray objects`.
// 11. Actualice las declaraciones de las variables `testArray1` y `testArray2` para crear instancias de nuevos objetos `BuildArray`.
// 12. Pruebe el trabajo llamando al método `buildArray` en los objetos y muestre los resultados en la consola.
/*  EXERCISE 1 */
class BuildArray {
    // TODO Define the constructor
    constructor(items, sortOrder) {
        // TODO Define the methods
        /*  sortDescending is a comparison function that tells the sort method how to sort numbers
            in descending order. */
        this.sortDescending = (a, b) => {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        /*  sortAscending is a comparison function that tells the sort method how to sort numbers
            in ascending order. */
        this.sortAscending = (a, b) => {
            if (a > b) {
                return 1;
            }
            else if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // TODO Define the accessors
    get items() {
        return this._items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set items(items) {
        this._items = items;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
    /*  buildArray builds an array of unique random numbers containing the number of items
        based on the number passed to it. The sortOrder parameter determines whether to sort
        the array in ascending or descending order. */
    buildArray() {
        let randomNumbers = [];
        let nextNumber;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            }
            else {
                counter--;
            }
        }
        if (this._sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        }
        else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}
/*  TODO: Instantiate the BuildArray objects. */
let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
