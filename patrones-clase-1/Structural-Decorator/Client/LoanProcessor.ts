import { InterestCalculator } from "../Target/InterestCalculator";

export default class LoanProcessor {
    private calculator: InterestCalculator;

    constructor(calculator: InterestCalculator) {
      this.calculator = calculator;
    }

    processLoan(amount: number, years: number): void {
      const interest = this.calculator.calculateInterest(amount, years);
      console.log(`Interest for loan of $${amount} over ${years} years is $${interest.toFixed(2)}`);
    }
}