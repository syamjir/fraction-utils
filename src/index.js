// 3 decimal places is common for general use when precision is important but not critical.
// here use 3 decimal place

class FractionConverter {
  static decimalPoint = 3;

  static computeGCD(a, b) {
    if (!b) return a;
    return FractionConverter.computeGCD(b, a % b);
  }

  //   rounded numbers with 3 decimal place
  static roundNumber(num) {
    const rounded = parseFloat(num.toFixed(FractionConverter.decimalPoint));
    return rounded;
  }

  // Setter method to set the value of the decimal point
  static setDecimalPoint(decimalPoint) {
    if (typeof decimalPoint !== "number" || decimalPoint < 0) {
      throw new Error("Decimal point must be a non-negative number.");
    }
    FractionConverter.decimalPoint = decimalPoint;
  }

  // Convert decimal number to fraction
  static convertDecimalToFraction(decimalNumber) {
    if (typeof decimalNumber !== "number" || isNaN(decimalNumber)) {
      throw new Error("Input must be a valid number.");
    }
    decimalNumber = this.roundNumber(decimalNumber);

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

  //   // Validate that input is a valid fraction string
  static validateFractionInput(fractionStr) {
    const fractionPattern = /^\d+(\.\d+)?\/\d+(\.\d+)?$/;
    if (typeof fractionStr !== "string" || !fractionPattern.test(fractionStr)) {
      throw new Error(
        "Input must be a valid fraction string in the form 'numerator/denominator'."
      );
    }
  }

  // Convert fraction string to decimal number
  static convertFractionToDecimal(fractionStr) {
    FractionConverter.validateFractionInput(fractionStr);
    const [numerator, denominator] = fractionStr.split("/").map(Number);
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    return FractionConverter.roundNumber(numerator / denominator);
  }
}
