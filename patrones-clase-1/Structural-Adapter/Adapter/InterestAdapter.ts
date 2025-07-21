import { AdapteeCalculator } from "../Adaptee/AdapteeCalculator";
import LegacyInterestCalculator from "../Target/LegacyInterestCalculator";

export default class InterestAdapter extends LegacyInterestCalculator {
    private adaptee: AdapteeCalculator;

    constructor() {
      super();
      this.adaptee = new AdapteeCalculator();
    }

    override calculateInterest(amount: number, years: number): number {
      return this.adaptee.specificCalculate({ capital: amount, duration: years });
    }
}
