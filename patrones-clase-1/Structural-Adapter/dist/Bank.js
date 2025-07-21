"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InterestAdapter_1 = __importDefault(require("./Adapter/InterestAdapter"));
const LoanProcessor_1 = __importDefault(require("./Client/LoanProcessor"));
const LegacyInterestCalculator_1 = __importDefault(require("./Target/LegacyInterestCalculator"));
function main() {
    const defaultCalc = new LegacyInterestCalculator_1.default();
    const loanProcessor1 = new LoanProcessor_1.default(defaultCalc);
    loanProcessor1.processLoan(1000, 3);
    const legacyAdapter = new InterestAdapter_1.default();
    const loanProcessor2 = new LoanProcessor_1.default(legacyAdapter);
    loanProcessor2.processLoan(1000, 3);
}
main();
