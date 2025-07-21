import InterestAdapter from './Adapter/InterestAdapter';
import LoanProcessor from './Client/LoanProcessor';
import { InterestCalculator } from './Target/InterestCalculator';
import LegacyInterestCalculator from './Target/LegacyInterestCalculator';

function main() {
    const defaultCalc: InterestCalculator = new LegacyInterestCalculator();
    const loanProcessor1 = new LoanProcessor(defaultCalc);
    loanProcessor1.processLoan(1000, 3);

    const legacyAdapter = new InterestAdapter();
    const loanProcessor2 = new LoanProcessor(legacyAdapter);
    loanProcessor2.processLoan(1000, 3);
}

main();