import solveHanoi from "./solveHanoi";

describe("solveHanoi", () => {
  it("should print the correct number of steps", () => {
    // Given
    const NUMBER_DISKS = 3;
    const FROM_TOWER_NUMBER = 1;
    const TO_TOWER_NUMBER = 3;

    // When
    const consoleSpy = jest.spyOn(console, "log");
    solveHanoi({
      numberDisks: NUMBER_DISKS,
      fromTowerNumber: FROM_TOWER_NUMBER,
      toTowerNumber: TO_TOWER_NUMBER,
    });

    // Then
    expect(consoleSpy).toHaveBeenCalledTimes(7);
  });
});
