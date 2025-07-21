"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingDecorator = void 0;
class LoggingDecorator {
    constructor(calculator) {
        this.wrapped = calculator;
    }
    calculateInterest(amount, years) {
        console.log(`[LOG] Calculating interest for $${amount} over ${years} years...`);
        const result = this.wrapped.calculateInterest(amount, years);
        console.log(`[LOG] Result: $${result.toFixed(2)}`);
        return result;
    }
}
exports.LoggingDecorator = LoggingDecorator;
