"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LegacyInterestCalculator {
    calculateInterest(amount, years) {
        return amount * 0.05 * years;
    }
}
exports.default = LegacyInterestCalculator;
