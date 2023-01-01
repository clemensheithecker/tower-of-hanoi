import { HanoiDisk, HanoiTower } from "../types";
import addDiskToRod from "./addDiskToRod";

describe("addDiskToRod", () => {
  it("should add a new disk to the top of the rod", () => {
    // Given
    const INITIAl_ROD: HanoiTower = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
      ],
    };
    const NEW_DISK: HanoiDisk = {
      backgroundColorClass: "bg-emerald-500",
      position: 0,
      width: 0.35,
    };
    const EXPECTED_UPDATED_ROD: HanoiTower = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
        {
          backgroundColorClass: "bg-emerald-500",
          position: 2,
          width: 0.35,
        },
      ],
    };

    // When
    const updatedRod = addDiskToRod({
      rod: INITIAl_ROD,
      disk: NEW_DISK,
    });

    // Then
    expect(updatedRod).toStrictEqual(EXPECTED_UPDATED_ROD);
  });
});
