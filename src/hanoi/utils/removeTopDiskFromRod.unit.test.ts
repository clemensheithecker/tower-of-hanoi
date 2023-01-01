import { HanoiTower } from "../types";
import removeTopDiskFromRod from "./removeTopDiskFromRod";

describe("removeTopDiskFromRod", () => {
  it("should remove the top disk from the rod", () => {
    // Given
    const ROD: HanoiTower = {
      towerNumber: 0,
      disks: [
        { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
        { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
        { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
      ],
    };
    const EXPECTED_ROD_WITHOUT_TOP_DISK: HanoiTower = {
      towerNumber: 0,
      disks: [
        { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
        { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
        { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
      ],
    };

    // When
    const rodWithoutTopDisk = removeTopDiskFromRod(ROD);

    // Then
    expect(rodWithoutTopDisk).toStrictEqual(EXPECTED_ROD_WITHOUT_TOP_DISK);
  });

  it("should not remove the top disk from the rod if the rod is empty", () => {
    // Given
    const ROD: HanoiTower = {
      towerNumber: 0,
      disks: [],
    };
    const EXPECTED_ERROR_MESSAGE =
      "The top disk cannot be removed from an empty rod.";

    // When
    const removeTopDiskFromRodWithEmptyRod = () => removeTopDiskFromRod(ROD);

    // Then
    expect(removeTopDiskFromRodWithEmptyRod).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
