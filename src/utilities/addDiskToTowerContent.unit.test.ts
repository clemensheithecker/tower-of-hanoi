import { HanoiDisk, TowerContent } from "../components/Game/types";
import { addDiskToTowerContent } from "./addDiskToTowerContent";

describe("addDiskToTowerContent", () => {
  it("should add a disk to the tower content", () => {
    // Given
    const TOWER_CONTENT: TowerContent = {
      towerNumber: 1,
      disks: [
        { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
        { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
      ],
    };
    const DISK: HanoiDisk = {
      backgroundColorClass: "bg-emerald-500",
      position: 0,
      width: 0.35,
    };
    const EXPECTED_TOWER_CONTENT: TowerContent = {
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
    const actualTowerContent = addDiskToTowerContent({
      towerContent: TOWER_CONTENT,
      disk: DISK,
    });

    // Then
    expect(actualTowerContent).toStrictEqual(EXPECTED_TOWER_CONTENT);
  });
});
