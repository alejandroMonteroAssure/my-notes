"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapteeCalculator = void 0;
class AdapteeCalculator {
    specificCalculate(data) {
        console.log("Called AdapteeCalculator specificCalculate()");
        return data.capital * Math.pow(1.05, data.duration) - data.capital;
    }
}
exports.AdapteeCalculator = AdapteeCalculator;
