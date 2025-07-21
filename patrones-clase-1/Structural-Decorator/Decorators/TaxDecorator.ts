import { InterestCalculator } from "../Target/InterestCalculator";

export class TaxDecorator implements InterestCalculator {
    private wrapped: InterestCalculator;
    private taxRate = 0.15;

    constructor(calculator: InterestCalculator) {
      this.wrapped = calculator;
    }

    calculateInterest(amount: number, years: number): number {
      const baseInterest = this.wrapped.calculateInterest(amount, years);
      const tax = baseInterest * this.taxRate;
      const total = baseInterest - tax;
      console.log(`[TAX] Applied 15% tax: -$${tax.toFixed(2)}. Final interest: $${total.toFixed(2)}`);
      return total;
    }
}
