import { InterestCalculator } from "./InterestCalculator";

export default class LegacyInterestCalculator implements InterestCalculator {
    calculateInterest(amount: number, years: number): number{
        return amount *0.05 * years;
    }
}
