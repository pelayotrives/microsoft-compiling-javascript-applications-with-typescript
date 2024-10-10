/*  Module 8: Organize code using TypeScript namespaces*/

//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module-08/module08-main.ts en module-08/module08-X.js.
node module-08/module08-main.js para ejecutar el archivo y ver el resultado en consola. */

//! Importante
//* En este ejercicio lo haremos distinto
//* Con esto, compilaremos en UN SOLO archivo .js el archivo module08-main.ts y se llamará main.js.
//! tsc --outFile main.js module08-main.ts

/* Ejercicio 1

En este ejercicio, organizará el código mediante espacios de nombres en un único archivo TypeScript.

1. Busque `TODO Create a the Loans namespace`.
2. Cree un nuevo espacio de nombres denominado `Loans`.
3. Mueva las interfaces `Loan` y `ConventionalLoan` al espacio de nombres `Loans`.
4. Actualice las interfaces `Loan` y `ConventionalLoan` para que estén visibles fuera del espacio de nombres `Loans`.
5. Busque `TODO Create LoanPrograms namespace`.
6. Cree un nuevo espacio de nombres denominado `LoanPrograms`.
7. Mueva las tres funciones al espacio de nombres `LoanPrograms`.
8. Busque `TODO Update the calculateInterestOnlyLoanPayment function`.
9. En la función `calculateInterestOnlyLoanPayment`:
    1. Actualice la referencia a la interfaz `Loan` para que incluya el espacio de nombres `Loans`.
    2. Haga que la función sea visible fuera del espacio de nombres `LoanPrograms`.
10. Busque `TODO Update the calculateConventionalLoanPayment function`.
11. En la función `calculateConventionalLoanPayment`:
    1. Actualice la referencia a la interfaz `ConventionalLoan` para que incluya el espacio de nombres `Loans`.
    2. Haga que la función sea visible fuera del espacio de nombres `LoanPrograms`.
12. Busque `TODO Update the function calls`. AGREGUE ESTO AL CÓDIGO INICIAL Y FINAL.
13. Agregue el espacio de nombres `LoanPrograms` al nombre de las funciones. */

/*  TODO Create a the Loans namespace. */

/*  TODO Create LoanPrograms namespace. */

/*  TODO Add reference paths. */
/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />

/*  TODO Update the function calls. */
let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});

console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"

/* Ejercicio 2

En este ejercicio, reorganizará los espacios de nombres en varios archivos TypeScript.

1. Continúe con el proyecto del ejercicio 1.
2. Cree dos nuevos archivos TypeScript en el área de trabajo: **module08\_loans.ts** y **module08\_loan-programs.ts**.
3. Mueva el espacio de nombres `Loans` de **module08\_main.ts** a **module08\_loans.ts**.
4. Mueva el espacio de nombres `LoanPrograms` de **module08\_main.ts** a **module08\_loan-programs.ts**.
5. En la parte superior de **module08\_loan-programs.ts**, agregue una instrucción `reference` que describa la relación entre las interfaces en **module08\_loans.ts** y **module08\_loan-programs.ts**.
6. En **module08\_main.ts**, busque `TODO Add reference paths`.
7. Agregue las instrucciones `reference` que describen la relación entre **module08\_loans.ts**, **module08\_loan-programs.ts** y **module08\_main.ts**.
8. En el símbolo del sistema, ejecute el siguiente comando para compilar todos los archivos **.ts** dependientes y crear un único archivo JavaScript denominado **main.js**.
9. Pruebe el trabajo ejecutando el archivo **main.js**. */
