import { getPercentageNumberString } from "./getPercentageNumberString";

describe("getPercentageNumberString", () => {
  it("should return a percentage number as a string given a number", () => {
    // Given
    const NUMBER = 0.5;
    const EXPECTED_PERCENTAGE_NUMBER_STRING = "50";

    // When
    const actualPercentageNumberString = getPercentageNumberString(NUMBER);

    // Then
    expect(actualPercentageNumberString).toBe(
      EXPECTED_PERCENTAGE_NUMBER_STRING
    );
  });
});
