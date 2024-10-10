## Ejercicio

- **module07\_main.ts**: contiene el código principal de la aplicación.
- **module07\_loans.ts**: contiene dos interfaces, `Loan` y `ConventionalLoan`.
- **module07\_loan-programs.ts**: contiene tres funciones:
  - `calculateInterestOnlyLoanPayment`, que calcula el pago de un préstamo de interés solamente.
  - `calculateConventionalLoanPayment`, que calcula el pago de un préstamo convencional.
  - `calculateInterestRate`, una función de trabajo que calcula el tipo de interés mensual del préstamo.

Las funciones `calculateInterestOnlyLoanPayment` y `calculateConventionalLoanPayment` aceptan los parámetros `principle` y `interestRate`. La diferencia entre ellos es que la función `calculateConventionalLoanPayment` acepta una tercera propiedad, `months`, que la función `calculateInterestOnlyLoanPayment` no acepta.

| Propiedad | Descripción |
| --- | --- |
| `principle` | Importe principal del préstamo. |
| `interestRate` | Tipo de interés anual del préstamo. Por ejemplo, el 5 % se especifica como 5. |
| `months` | Plazo del préstamo, especificado en meses. Un préstamo de interés solamente no requiere esta propiedad porque el número de meses es irrelevante (el préstamo nunca se reembolsará cuando se realice un pago de interés solamente cada mes). |

Agregue el código necesario para definir las relaciones entre los módulos.

1. Escriba lo siguiente en el símbolo del sistema para clonar el repositorio de inicio.
2. Abra el archivo **module07\_loans.ts** y agregue la palabra clave `export` en las declaraciones de la interfaz.
3. Abra el archivo **module07\_loan-programs.ts**.
4. En la parte superior del archivo, agregue una instrucción `import` que importe las interfaces `Loan` y `ConventionalLoan` desde **module07\_loans.ts**. Importe ambas interfaces mediante una instrucción `import` y asígnelas a una variable denominada `Loans`.
5. Busque `TODO Update the calculateInterestOnlyLoanPayment function`.
6. Agregue la palabra clave `export` a la declaración de función `calculateInterestOnlyLoanPayment`.
7. Actualice el tipo del parámetro de función `loanTerms` a la interfaz `Loans.Loan`.
8. Busque `TODO Update the calculateConventionalLoanPayment function`.
9. Agregue la palabra clave `export` a la declaración de función `calculateConventionalLoanPayment`.
10. Actualice el tipo del parámetro de función `loanTerms` a la interfaz `Loans.ConventionalLoan`.
11. Abra el archivo **module07\_main.ts**.
12. Busque `TODO Add the import statement`.
13. Agregue una instrucción `import` que importe las funciones `interestOnlyLoan` y `conventionalLoan` desde **module07\_loan-programs.ts**. Asigne las funciones a una variable denominada `LoanPrograms`.
14. Busque `TODO Update the function calls`.
15. En las dos declaraciones de variables, actualice las llamadas de función para hacer referencia a la variable `LoanPrograms` de la instrucción `import`.
16. Guarde los archivos.
17. En el símbolo del sistema, ejecute el comando `tsc` con la opción `--module commonjs` para compilar **module07\_main.ts**.
18. Pruebe su trabajo en `node` mediante la ejecución del archivo **module07\_main.js**.
