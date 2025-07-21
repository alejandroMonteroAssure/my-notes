import InterestAdapter from './Adapter/InterestAdapter';
import LoanProcessor from './Client/LoanProcessor';
import { LoggingDecorator } from './Decorators/LoggingDecorator';
import { TaxDecorator } from './Decorators/TaxDecorator';
import { InterestCalculator } from './Target/InterestCalculator';
import LegacyInterestCalculator from './Target/LegacyInterestCalculator';

function main() {
    const defaultCalc: InterestCalculator = new LegacyInterestCalculator();
    const withLogging = new LoggingDecorator(defaultCalc);
    const withTax = new TaxDecorator(withLogging);
    const loanProcessor = new LoanProcessor(withTax);
    loanProcessor.processLoan(1000, 3);
}

main();