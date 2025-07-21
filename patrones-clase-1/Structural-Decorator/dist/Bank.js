"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoanProcessor_1 = __importDefault(require("./Client/LoanProcessor"));
const LoggingDecorator_1 = require("./Decorators/LoggingDecorator");
const TaxDecorator_1 = require("./Decorators/TaxDecorator");
const LegacyInterestCalculator_1 = __importDefault(require("./Target/LegacyInterestCalculator"));
function main() {
    const defaultCalc = new LegacyInterestCalculator_1.default();
    const withLogging = new LoggingDecorator_1.LoggingDecorator(defaultCalc);
    const withTax = new TaxDecorator_1.TaxDecorator(withLogging);
    const loanProcessor = new LoanProcessor_1.default(withTax);
    loanProcessor.processLoan(1000, 3);
}
main();
