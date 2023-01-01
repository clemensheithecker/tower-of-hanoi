import sortDisksByPosition from "./sortDisksByPosition";

describe("sortDisksByPosition", () => {
  it("should return a rod with disks in ascending order by position", () => {
    // Given
    const ROD = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-emerald-500", position: 2, width: 0.35 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
      ],
    };
    const EXPECTED_SORTED_ROD = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
        { backgroundColorClass: "bg-emerald-500", position: 2, width: 0.35 },
      ],
    };

    // When
    const sortedRod = sortDisksByPosition(ROD);

    // Then
    expect(sortedRod).toStrictEqual(EXPECTED_SORTED_ROD);
  });

  it("should return a new rod with a sorted disks array, without modifying the original rod", () => {
    // Given
    const ROD = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-emerald-500", position: 2, width: 0.35 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
      ],
    };
    const EXPECTED_SORTED_ROD = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
        { backgroundColorClass: "bg-emerald-500", position: 2, width: 0.35 },
      ],
    };

    // When
    const sortedRod = sortDisksByPosition(ROD);

    // Then
    expect(sortedRod).toStrictEqual(EXPECTED_SORTED_ROD);
    expect(sortedRod).not.toStrictEqual(ROD);
  });

  it("should throw and error if the rod does not have any disks", () => {
    // Given
    const ROD = {
      towerNumber: 1,
      disks: [],
    };
    const EXPECTED_ERROR_MESSAGE = "The rod does not have any disks.";

    // When
    const sortDisksByPositionWithEmptyRod = () => sortDisksByPosition(ROD);

    // Then
    expect(sortDisksByPositionWithEmptyRod).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
