"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdapteeCalculator_1 = require("../Adaptee/AdapteeCalculator");
const LegacyInterestCalculator_1 = __importDefault(require("../Target/LegacyInterestCalculator"));
class InterestAdapter extends LegacyInterestCalculator_1.default {
    constructor() {
        super();
        this.adaptee = new AdapteeCalculator_1.AdapteeCalculator();
    }
    calculateInterest(amount, years) {
        return this.adaptee.specificCalculate({ capital: amount, duration: years });
    }
}
exports.default = InterestAdapter;
