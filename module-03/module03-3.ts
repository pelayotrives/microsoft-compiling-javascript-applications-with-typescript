// Busque TODO: Declare the Loan interface. Declare una interfaz denominada Loan que defina dos propiedades, principal y interestRate, cada una como number.
// Busque TODO: Declare the ConventionalLoan interface. Declare una interfaz denominada ConventionalLoan que extienda Loan y defina la propiedad adicional necesaria para un préstamo convencional, months, como number.
// Busque TODO: Update the calculateInterestOnlyLoanPayment function. Reemplace los dos parámetros de la función calculateInterestOnlyLoanPayment por un objeto de tipo Loan (por ejemplo, loanTerms: Loan) y aplique al valor devuelto de la función el tipo string.
// Reemplace los nombres de parámetro de la función por las propiedades del objeto Loan. (Por ejemplo, loanTerms.interestRate).
// Busque TODO: Update the calculateConventionalLoanPayment function. Actualice la función calculateConventionalLoanPayment. Esta vez, reemplace los tres parámetros por un objeto de tipo ConventionalLoan y aplique al valor devuelto de la función el tipo string

//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module03-3.tsc en module03-3.js.
node module03-3.js para ejecutar el archivo y ver el resultado en consola. */

/*  TODO: Declare the Loan interface. */
interface Loan {
    principal: number,
    interestRate: number
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
    months: number
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(conventionalLoanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest = conventionalLoanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = conventionalLoanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30_000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principal: 30_000, interestRate: 5, months: 180});

console.log(interestOnlyPayment);
console.log(conventionalPayment); 