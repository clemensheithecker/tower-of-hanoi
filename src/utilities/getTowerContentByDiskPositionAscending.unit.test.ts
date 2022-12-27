import { getTowerContentByDiskPositionAscending } from "./getTowerContentByDiskPositionAscending";

describe("getTowerContentByDiskPositionAscending", () => {
  it("should return a tower content with disks in ascending order by position", () => {
    // Given
    const TOWER_CONTENT = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-emerald-500", position: 2, width: 0.35 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
      ],
    };
    const EXPECTED_TOWER_CONTENT = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
        { backgroundColorClass: "bg-emerald-500", position: 2, width: 0.35 },
      ],
    };

    // When
    const actualTowerContent =
      getTowerContentByDiskPositionAscending(TOWER_CONTENT);

    // Then
    expect(actualTowerContent).toStrictEqual(EXPECTED_TOWER_CONTENT);
  });

  it("should throw and error if the tower content does not have any disks", () => {
    // Given
    const TOWER_CONTENT = {
      towerNumber: 1,
      disks: [],
    };
    const EXPECTED_ERROR_MESSAGE = "The tower content does not have any disks.";

    // When
    const actualGetTowerContentByDiskPositionAscending = () =>
      getTowerContentByDiskPositionAscending(TOWER_CONTENT);

    // Then
    expect(actualGetTowerContentByDiskPositionAscending).toThrowError(
      EXPECTED_ERROR_MESSAGE
    );
  });
});
