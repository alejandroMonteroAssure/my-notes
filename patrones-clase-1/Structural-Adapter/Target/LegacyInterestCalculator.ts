import { InterestCalculator } from "./InterestCalculator";

export default class LegacyInterestCalculator implements InterestCalculator {
    calculateInterest(amount: number, years: number): number{
        console.log("Default interest calculator was called to calculate interest ");
        return amount *0.05 * years;
    }
}