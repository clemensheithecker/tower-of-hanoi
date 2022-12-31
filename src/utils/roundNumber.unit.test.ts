import { roundNumber } from "./roundNumber";

describe("roundNumber", () => {
  it("should round a number to the specified number of decimal places", () => {
    // Given
    const NUMBER = 1234.745;
    const DECIMAL_PLACES = 2;
    const EXPECTED_ROUNDED_NUMBER = 1234.75;

    // When
    const roundedNumber = roundNumber({
      number: NUMBER,
      decimalPlaces: DECIMAL_PLACES,
    });

    // Then
    expect(roundedNumber).toBe(EXPECTED_ROUNDED_NUMBER);
  });

  it("should round up if the number is closer to the next whole number", () => {
    // Given
    const NUMBER = 0.7456;
    const DECIMAL_PLACES = 2;
    const EXPECTED_ROUNDED_NUMBER = 0.75;

    // When
    const roundedNumber = roundNumber({
      number: NUMBER,
      decimalPlaces: DECIMAL_PLACES,
    });

    // Then
    expect(roundedNumber).toBe(EXPECTED_ROUNDED_NUMBER);
  });

  it("should round down if the number is closer to the previous whole number", () => {
    // Given
    const NUMBER = 0.7446;
    const DECIMAL_PLACES = 2;
    const EXPECTED_ROUNDED_NUMBER = 0.74;

    // When
    const roundedNumber = roundNumber({
      number: NUMBER,
      decimalPlaces: DECIMAL_PLACES,
    });

    // Then
    expect(roundedNumber).toBe(EXPECTED_ROUNDED_NUMBER);
  });

  it("should handle negative numbers correctly", () => {
    // Given
    const NUMBER = -1234.745;
    const DECIMAL_PLACES = 2;
    const EXPECTED_ROUNDED_NUMBER = -1234.75;

    // When
    const roundedNumber = roundNumber({
      number: NUMBER,
      decimalPlaces: DECIMAL_PLACES,
    });

    // Then
    expect(roundedNumber).toBe(EXPECTED_ROUNDED_NUMBER);
  });
});
