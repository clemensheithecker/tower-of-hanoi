import { TowerContent } from "../components/Game/types";
import { moveDisk } from "./moveDisk";

describe("moveDisk", () => {
  it("should move the top disk from one tower to another", () => {
    // Given
    const FROM_TOWER_NUMBER = 0;
    const TO_TOWER_NUMBER = 1;
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
    const EXPECTED_TOWER_CONTENTS: TowerContent[] = [
      {
        towerNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        ],
      },
      {
        towerNumber: 1,
        disks: [
          { position: 0, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { towerNumber: 2, disks: [] },
    ];

    // When
    const actualTowerContents = moveDisk({
      fromTowerNumber: FROM_TOWER_NUMBER,
      toTowerNumber: TO_TOWER_NUMBER,
      towerContents: TOWER_CONTENTS,
    });

    // Then
    expect(actualTowerContents).toStrictEqual(EXPECTED_TOWER_CONTENTS);
  });

  it("should not move the top disk from one tower to another if the disk is larger than the top disk of the destination tower", () => {
    // Given
    const FROM_TOWER_NUMBER = 0;
    const TO_TOWER_NUMBER = 1;
    const TOWER_CONTENTS: TowerContent[] = [
      {
        towerNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        ],
      },
      {
        towerNumber: 1,
        disks: [
          { position: 0, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { towerNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE =
      "Cannot move a larger disk onto a smaller disk.";

    // When
    const actualMoveDisk = () =>
      moveDisk({
        fromTowerNumber: FROM_TOWER_NUMBER,
        toTowerNumber: TO_TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualMoveDisk).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should not move the top disk from one tower to another if the source tower is empty", () => {
    // Given
    const FROM_TOWER_NUMBER = 2;
    const TO_TOWER_NUMBER = 1;
    const TOWER_CONTENTS: TowerContent[] = [
      {
        towerNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        ],
      },
      {
        towerNumber: 1,
        disks: [
          { position: 0, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { towerNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE = "Cannot move a disk from an empty tower.";

    // When
    const actualMoveDisk = () =>
      moveDisk({
        fromTowerNumber: FROM_TOWER_NUMBER,
        toTowerNumber: TO_TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualMoveDisk).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should not move the top disk from one tower to the same tower", () => {
    // Given
    const FROM_TOWER_NUMBER = 0;
    const TO_TOWER_NUMBER = 0;
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
    const EXPECTED_ERROR_MESSAGE = "Cannot move a disk to same tower.";

    // When
    const actualMoveDisk = () =>
      moveDisk({
        fromTowerNumber: FROM_TOWER_NUMBER,
        toTowerNumber: TO_TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualMoveDisk).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the from tower is invalid", () => {
    // Given
    const FROM_TOWER_NUMBER = 4;
    const TO_TOWER_NUMBER = 1;
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
    const EXPECTED_ERROR_MESSAGE = "Cannot find the from tower content.";

    // When
    const actualMoveDisk = () =>
      moveDisk({
        fromTowerNumber: FROM_TOWER_NUMBER,
        toTowerNumber: TO_TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualMoveDisk).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the to tower is invalid", () => {
    // Given
    const FROM_TOWER_NUMBER = 0;
    const TO_TOWER_NUMBER = 5;
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
    const EXPECTED_ERROR_MESSAGE = "Cannot find the to tower content.";

    // When
    const actualMoveDisk = () =>
      moveDisk({
        fromTowerNumber: FROM_TOWER_NUMBER,
        toTowerNumber: TO_TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualMoveDisk).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the from and to towers are invalid", () => {
    // Given
    const FROM_TOWER_NUMBER = 4;
    const TO_TOWER_NUMBER = 5;
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
      "Cannot find the from nor the to tower content.";

    // When
    const actualMoveDisk = () =>
      moveDisk({
        fromTowerNumber: FROM_TOWER_NUMBER,
        toTowerNumber: TO_TOWER_NUMBER,
        towerContents: TOWER_CONTENTS,
      });

    // Then
    expect(actualMoveDisk).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
