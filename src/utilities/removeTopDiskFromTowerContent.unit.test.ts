import { TowerContent } from "../components/Game/types";
import { removeTopDiskFromTowerContent } from "./removeTopDiskFromTowerContent";

describe("removeTopDiskFromTowerContent", () => {
  it("should remove the top disk from the tower content", () => {
    // Given
    const TOWER_CONTENT: TowerContent = {
      towerNumber: 0,
      disks: [
        { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
        { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
        { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
      ],
    };
    const EXPECTED_TOWER_CONTENT: TowerContent = {
      towerNumber: 0,
      disks: [
        { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
        { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
        { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
      ],
    };

    // When
    const actualTowerContent = removeTopDiskFromTowerContent(TOWER_CONTENT);

    // Then
    expect(actualTowerContent).toStrictEqual(EXPECTED_TOWER_CONTENT);
  });

  it("should not remove the top disk from the tower content if the tower content is empty", () => {
    // Given
    const TOWER_CONTENT: TowerContent = {
      towerNumber: 0,
      disks: [],
    };
    const EXPECTED_ERROR_MESSAGE =
      "The top disk cannot be removed from an empty tower.";

    // When
    const actualRemoveTopDiskFromTowerContent = () =>
      removeTopDiskFromTowerContent(TOWER_CONTENT);

    // Then
    expect(actualRemoveTopDiskFromTowerContent).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
