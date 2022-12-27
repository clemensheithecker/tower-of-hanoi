import getDiskWidth from "./getDiskWidth";

describe("getDiskWidth", () => {
  it("should return a disk width given an initial position and number of disks", () => {
    // Given
    const INITIAL_POSITION = 1;
    const NUMBER_DISKS = 3;
    const EXPECTED_DISK_WIDTH = 0.58;

    // When
    const actualDiskWidth = getDiskWidth({
      initialPosition: INITIAL_POSITION,
      numberDisks: NUMBER_DISKS,
    });

    // Then
    expect(actualDiskWidth).toBe(EXPECTED_DISK_WIDTH);
  });
});
