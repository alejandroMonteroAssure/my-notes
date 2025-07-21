import { InterestCalculator } from "../Target/InterestCalculator";

export class LoggingDecorator implements InterestCalculator {
    private wrapped: InterestCalculator;

    constructor(calculator: InterestCalculator) {
      this.wrapped = calculator;
    }

    calculateInterest(amount: number, years: number): number {
      console.log(`[LOG] Calculating interest for $${amount} over ${years} years...`);
      const result = this.wrapped.calculateInterest(amount, years);
      console.log(`[LOG] Result: $${result.toFixed(2)}`);
      return result;
    }
}
