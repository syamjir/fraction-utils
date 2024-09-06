/**
 * It includes functionality for rounding numbers, validating fractions, and converting between decimal and fraction formats.
 */
class FractionConverter {
  // Default decimal point precision for rounding
  static decimalPoint = 3;

  /**
   * Compute the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} - The GCD of the two numbers.
   */
  static computeGCD(a, b) {
    if (!b) return a;
    return FractionConverter.computeGCD(b, a % b);
  }

  /**
   * Round a number to the specified decimal point precision.
   * @param {number} num - The number to round.
   * @returns {number} - The rounded number.
   */
  static roundNumber(num) {
    const rounded = parseFloat(num.toFixed(FractionConverter.decimalPoint));
    return rounded;
  }

  /**
   * Set the decimal point precision for rounding operations.
   * @param {number} decimalPoint - The number of decimal places to use.
   * @throws {Error} - Throws an error if the decimal point is not a non-negative number.
   */
  static setDecimalPoint(decimalPoint) {
    if (typeof decimalPoint !== "number" || decimalPoint < 0) {
      throw new Error("Decimal point must be a non-negative number.");
    }
    FractionConverter.decimalPoint = decimalPoint;
  }

  /**
   * Convert a decimal number to a fraction string.
   * @param {number} decimalNumber - The decimal number to convert.
   * @returns {string} - The fraction representation of the decimal number.
   * @throws {Error} - Throws an error if the input is not a valid number.
   */
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

  /**
   * Validate that the input is a valid fraction string in the form 'numerator/denominator'.
   * @param {string} fractionStr - The fraction string to validate.
   * @throws {Error} - Throws an error if the input is not a valid fraction string.
   */
  static validateFractionInput(fractionStr) {
    const fractionPattern = /^\d+(\.\d+)?\/\d+(\.\d+)?$/;
    if (typeof fractionStr !== "string" || !fractionPattern.test(fractionStr)) {
      throw new Error(
        "Input must be a valid fraction string in the form 'numerator/denominator'."
      );
    }
  }

  /**
   * Convert a fraction string to a decimal number.
   * @param {string} fractionStr - The fraction string to convert.
   * @returns {number} - The decimal representation of the fraction.
   * @throws {Error} - Throws an error if the fraction string is invalid or the denominator is zero.
   */
  static convertFractionToDecimal(fractionStr) {
    FractionConverter.validateFractionInput(fractionStr);
    const [numerator, denominator] = fractionStr.split("/").map(Number);
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    return FractionConverter.roundNumber(numerator / denominator);
  }
  /**
   * Simplify a given fraction by dividing the numerator and denominator by their greatest common divisor (GCD).
   * @param {number} numerator - The numerator of the fraction.
   * @param {number} denominator - The denominator of the fraction.
   * @returns {string} - The simplified fraction in the format 'numerator/denominator'.
   * @throws {Error} - Throws an error if the denominator is zero.
   */
  static simplifyFraction(numerator, denominator) {
    // If the numerator is 0, return "0" (0/x is always 0)
    if (numerator === 0) {
      return "0";
    }

    // If the denominator is 0, throw an error (division by zero is undefined)
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }

    // Compute the GCD of the numerator and denominator
    const gcdValue = FractionConverter.computeGCD(numerator, denominator);

    // If the simplified denominator is 1, return just the numerator as a string
    if (denominator / gcdValue === 1) {
      return `${numerator / gcdValue}`;
    }

    // Simplify the fraction by dividing both the numerator and denominator by the GCD
    return `${numerator / gcdValue}/${denominator / gcdValue}`;
  }
}

export default FractionConverter;
