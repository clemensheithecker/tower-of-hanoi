import { TowerContent } from "../components/Game/types";
import { getTowerContent } from "./getTowerContent";

describe("getTowerContent", () => {
  it("should return the tower content for a given tower number", () => {
    // Given
    const TOWER_NUMBER = 0;
    const TOWER_CONTENTS: TowerContent[] = [
      {
        towerNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { towerNumber: 1, disks: [] },
      { towerNumber: 2, disks: [] },
    ];
    const EXPECTED_TOWER_CONTENT: TowerContent = {
      towerNumber: 0,
      disks: [
        { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
        { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
        { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
      ],
    };

    // When
    const actualTowerContent = getTowerContent({
      towerNumber: TOWER_NUMBER,
      towerContents: TOWER_CONTENTS,
    });

    // Then
    expect(actualTowerContent).toStrictEqual(EXPECTED_TOWER_CONTENT);
  });

  it("should throw an error if the tower content is not found", () => {
    // Given
    const TOWER_NUMBER = 4;
    const TOWER_CONTENTS: TowerContent[] = [
      {
        towerNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { towerNumber: 1, disks: [] },
      { towerNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE =
      "The tower content for tower number 4 could not be found.";

    // When
    const actualGetTowerContent = () =>
      getTowerContent({
        towerNumber: TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualGetTowerContent).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the tower contents are empty", () => {
    // Given
    const TOWER_NUMBER = 0;
    const TOWER_CONTENTS: TowerContent[] = [];
    const EXPECTED_ERROR_MESSAGE =
      "The tower content for tower number 0 could not be found.";

    // When
    const actualGetTowerContent = () =>
      getTowerContent({
        towerNumber: TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualGetTowerContent).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
