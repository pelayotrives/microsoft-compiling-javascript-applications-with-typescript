// Declara una variable para un nuevo empleado denominada employeeStatus del tipo ContractStatus y asígnale el nombre "Temp".
// Haz que el enum comience desde 1.
// Muestre el resultado en la consola.

enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice
}

//! Respuesta
// tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
// En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
// tsc para compilar el archivo module02.tsc en module02-1.js.
// node module02-1.js para ejecutar el archivo y ver el resultado en consola.

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);