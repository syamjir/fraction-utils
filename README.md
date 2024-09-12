# FRACTION-UTILS

`fraction-utils` is a JavaScript library that provides functionality for rounding numbers, validating fractions,simplify fraction,check if a number is an integer,Convert an improper fraction to a mixed number,Convert decimal number to mixed number and converting between decimal and fraction formats. This package is useful for applications that need to perform accurate fractional and decimal arithmetic.

## Features

- **Compute GCD:** Compute the Greatest Common Divisor (GCD) of two numbers.
- **Round Numbers:** Round numbers to a specified decimal point precision.
- **Convert Decimal to Fraction:** Convert a decimal number to its fractional representation.
- **Validate Fractions:** Validate fraction strings in the form 'numerator/denominator'.
- **Convert Fraction to Decimal:** Convert a fraction string to its decimal representation.
- **Simplify a given fraction:** Dividing the numerator and denominator by their greatest common divisor.
- **Check if the value is an integer:** Determine whether the given value is an integer
- **Convert an improper fraction to a mixed number.**
- **Convert decimal number to mixed number:**The decimal number to be converted into mixed number

## Installation

You can install `FractionConverter` via npm:

```bash
npm install fraction-utils
```

## Usage

```javascript
import FractionConverter from "./path-to-your-package";

// To set the precision for rounding
FractionConverter.setDecimalPoint(4); //(default precision is 3)

const gcd = FractionConverter.computeGCD(48, 18);
console.log(gcd); // 6

const rounded = FractionConverter.roundNumber(12.34567);
console.log(rounded); // 12.346

const fraction = FractionConverter.convertDecimalToFraction(0.75);
console.log(fraction); // "3/4"

const decimal = FractionConverter.convertFractionToDecimal("3/4");
console.log(decimal); // 0.75

const simplifiedFraction = FractionConverter.simplifyFraction(10, 20);
console.log(simplifiedFraction); // Output: "1/2"

const isInteger = FractionConverter.checkIfInteger(5);
console.log(isInteger); // true

const mixedNumber = FractionConverter.convertImproperToMixedNumber(10, 3);
console.log(mixedNumber); // 3 1/3

const mixedNumberFromDecimal =
  FractionConverter.convertDecimalToMixedNumber(2.2);
console.log(mixedNumberFromDecimal); // 2 1/5
```
