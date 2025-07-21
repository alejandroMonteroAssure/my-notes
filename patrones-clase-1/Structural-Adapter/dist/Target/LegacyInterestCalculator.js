"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LegacyInterestCalculator {
    calculateInterest(amount, years) {
        console.log("Default interest calculator was called to calculate interest ");
        return amount * 0.05 * years;
    }
}
exports.default = LegacyInterestCalculator;
