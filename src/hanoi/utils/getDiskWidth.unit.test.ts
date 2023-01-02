import getDiskWidth from "./getDiskWidth";

describe("getDiskWidth", () => {
  it("should return the width of a disk given its initial position and the total number of disks", () => {
    // Given
    const INITIAL_POSITION = 1;
    const TOTAL_DISKS = 3;
    const EXPECTED_DISK_WIDTH = 0.58;

    // When
    const diskWidth = getDiskWidth({
      initialPosition: INITIAL_POSITION,
      totalDisks: TOTAL_DISKS,
    });

    // Then
    expect(diskWidth).toBe(EXPECTED_DISK_WIDTH);
  });

  it("should throw an error if the initial position is negative", () => {
    // Given
    const INITIAL_POSITION = -1;
    const TOTAL_DISKS = 3;
    const EXPECTED_ERROR_MESSAGE =
      "The initial position of a disk cannot be negative.";

    // When
    const getDiskWidthWithNegativeInitialPosition = () =>
      getDiskWidth({
        initialPosition: INITIAL_POSITION,
        totalDisks: TOTAL_DISKS,
      });

    // Then
    expect(getDiskWidthWithNegativeInitialPosition).toThrowError(
      EXPECTED_ERROR_MESSAGE
    );
  });

  it("should throw an error if the total number of disks is negative", () => {
    // Given
    const INITIAL_POSITION = 1;
    const TOTAL_DISKS = -2;
    const EXPECTED_ERROR_MESSAGE =
      "The total number of disks cannot be negative.";

    // When
    const getDiskWidthWithLessThanThreeDisks = () =>
      getDiskWidth({
        initialPosition: INITIAL_POSITION,
        totalDisks: TOTAL_DISKS,
      });

    // Then
    expect(getDiskWidthWithLessThanThreeDisks).toThrowError(
      EXPECTED_ERROR_MESSAGE
    );
  });
});
