"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoanProcessor {
    constructor(calculator) {
        this.calculator = calculator;
    }
    processLoan(amount, years) {
        const interest = this.calculator.calculateInterest(amount, years);
        console.log(`Interest for loan of $${amount} over ${years} years is $${interest.toFixed(2)}`);
    }
}
exports.default = LoanProcessor;
