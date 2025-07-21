"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxDecorator = void 0;
class TaxDecorator {
    constructor(calculator) {
        this.taxRate = 0.15;
        this.wrapped = calculator;
    }
    calculateInterest(amount, years) {
        const baseInterest = this.wrapped.calculateInterest(amount, years);
        const tax = baseInterest * this.taxRate;
        const total = baseInterest - tax;
        console.log(`[TAX] Applied 15% tax: -$${tax.toFixed(2)}. Final interest: $${total.toFixed(2)}`);
        return total;
    }
}
exports.TaxDecorator = TaxDecorator;
