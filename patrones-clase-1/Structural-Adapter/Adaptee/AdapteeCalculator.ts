export class AdapteeCalculator {
    specificCalculate(data: { capital: number; duration: number }): number {
      console.log("Called AdapteeCalculator specificCalculate()");
      return data.capital * Math.pow(1.05, data.duration) - data.capital;
    }
}