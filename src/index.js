class FractionConverter {
  static computeGCD(a, b) {
    if (!b) return a;
    return FractionConverter.computeGCD(b, a % b);
  }
  // Convert decimal number to fraction
  static convertDecimalToFraction(decimalNumber) {
    if (typeof decimalNumber !== "number" || isNaN(decimalNumber)) {
      throw new Error("Input must be a valid number.");
    }

    const decimalStr = decimalNumber.toString();
    const [integerPart, fractionalPart] = decimalStr.split(".");

    if (!fractionalPart) {
      return `${integerPart}/1`;
    }

    const fractionDenominator = Math.pow(10, fractionalPart.length);
    const fractionNumerator =
      parseInt(fractionalPart) + parseInt(integerPart) * fractionDenominator;

    const gcdValue = FractionConverter.computeGCD(
      fractionNumerator,
      fractionDenominator
    );

    return `${fractionNumerator / gcdValue}/${fractionDenominator / gcdValue}`;
  }
}
