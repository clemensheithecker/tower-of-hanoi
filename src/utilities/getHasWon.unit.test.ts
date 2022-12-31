import { HanoiTower } from "../types";
import getHasWon from "./getHasWon";

describe("getHasWon", () => {
  it("should return true if the second tower has all disks", () => {
    // Given
    const TOWER_CONTENTS: HanoiTower[] = [
      { towerNumber: 0, disks: [] },
      {
        towerNumber: 1,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { towerNumber: 2, disks: [] },
    ];
    const NUMBER_DISKS = 4;
    const EXPECTED_HAS_WON = true;

    // When
    const actualHasWon = getHasWon({
      towerContents: TOWER_CONTENTS,
      numberDisks: NUMBER_DISKS,
    });

    // Then
    expect(actualHasWon).toEqual(EXPECTED_HAS_WON);
  });

  it("should return true if the third tower has all disks", () => {
    // Given
    const TOWER_CONTENTS: HanoiTower[] = [
      { towerNumber: 0, disks: [] },
      { towerNumber: 1, disks: [] },
      {
        towerNumber: 2,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
    ];
    const NUMBER_DISKS = 4;
    const EXPECTED_HAS_WON = true;

    // When
    const actualHasWon = getHasWon({
      towerContents: TOWER_CONTENTS,
      numberDisks: NUMBER_DISKS,
    });

    // Then
    expect(actualHasWon).toEqual(EXPECTED_HAS_WON);
  });

  it("should return false if neither the second nor the third tower have all disks", () => {
    // Given
    const TOWER_CONTENTS: HanoiTower[] = [
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
    const NUMBER_DISKS = 4;
    const EXPECTED_HAS_WON = false;

    // When
    const actualHasWon = getHasWon({
      towerContents: TOWER_CONTENTS,
      numberDisks: NUMBER_DISKS,
    });

    // Then
    expect(actualHasWon).toEqual(EXPECTED_HAS_WON);
  });

  it("should throw an error if the tower contents array is empty", () => {
    // Given
    const TOWER_CONTENTS: HanoiTower[] = [];
    const NUMBER_DISKS = 4;
    const EXPECTED_ERROR_MESSAGE = "The tower contents array is empty.";

    // When
    const actualGetHasWon = () =>
      getHasWon({
        towerContents: TOWER_CONTENTS,
        numberDisks: NUMBER_DISKS,
      });

    // Then
    expect(actualGetHasWon).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the number of disks is less than 3", () => {
    // Given
    const TOWER_CONTENTS: HanoiTower[] = [
      { towerNumber: 0, disks: [] },
      {
        towerNumber: 1,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.35, backgroundColorClass: "bg-amber-500" },
        ],
      },
      { towerNumber: 2, disks: [] },
    ];
    const NUMBER_DISKS = 2;
    const EXPECTED_ERROR_MESSAGE = "The number of disks must be at least 3.";

    // When
    const actualGetHasWon = () =>
      getHasWon({
        towerContents: TOWER_CONTENTS,
        numberDisks: NUMBER_DISKS,
      });

    // Then
    expect(actualGetHasWon).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
