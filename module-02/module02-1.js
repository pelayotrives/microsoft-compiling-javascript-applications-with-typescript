"use strict";
// 1. Declara una variable para un nuevo empleado denominada employeeStatus del tipo ContractStatus y asígnale el nombre "Temp". Muestre el resultado en la consola.
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
//! Respuesta
// tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc para compilar el archivo module02.tsc en module02-1.js.
// node module02-1.js para ejecutar el archivo y ver el resultado en consola.
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
