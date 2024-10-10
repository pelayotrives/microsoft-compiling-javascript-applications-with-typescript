"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
exports.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
/*  TODO Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    var payment;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return "The interest only loan payment is " + payment.toFixed(2);
}
/*  TODO Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    var interest = calculateInterestRate(loanTerms.interestRate);
    var payment;
    payment =
        (loanTerms.principle * interest) /
            (1 - Math.pow(1 / (1 + interest), loanTerms.months));
    return "The conventional loan payment is " + payment.toFixed(2);
}
function calculateInterestRate(interestRate) {
    var interest = interestRate / 1200;
    return interest;
}
