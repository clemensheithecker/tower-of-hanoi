import convertDecimalToPercentage from "./convertDecimalToPercentage";

describe("convertDecimalToPercentage", () => {
  it("should return a percentage number as a string given a number", () => {
    // Given
    const DECIMAL_NUMBER = 0.5;
    const EXPECTED_PERCENTAGE_STRING = "50%";

    // When
    const percentageString = convertDecimalToPercentage(DECIMAL_NUMBER);

    // Then
    expect(percentageString).toBe(EXPECTED_PERCENTAGE_STRING);
  });
});
