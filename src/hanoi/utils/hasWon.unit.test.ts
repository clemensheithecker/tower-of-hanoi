import { HanoiTower } from "../types";
import hasWon from "./hasWon";

describe("hasWon", () => {
  it("should return true if the second rod has all disks and the first rod is the start rod", () => {
    // Given
    const RODS: HanoiTower[] = [
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
    const TOTAL_DISKS = 4;
    const START_ROD_NUMBER = 0;
    const EXPECTED_HAS_WON = true;

    // When
    const hasWonSecondRodHasAllDisks = hasWon({
      rods: RODS,
      totalDisks: TOTAL_DISKS,
      startRodNumber: START_ROD_NUMBER,
    });

    // Then
    expect(hasWonSecondRodHasAllDisks).toEqual(EXPECTED_HAS_WON);
  });

  it("should return true if the third rod has all disks and the first rod is the start rod", () => {
    // Given
    const RODS: HanoiTower[] = [
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
    const TOTAL_DISKS = 4;
    const START_ROD_NUMBER = 0;
    const EXPECTED_HAS_WON = true;

    // When
    const hasWonThirdRodHasAllDisks = hasWon({
      rods: RODS,
      totalDisks: TOTAL_DISKS,
      startRodNumber: START_ROD_NUMBER,
    });

    // Then
    expect(hasWonThirdRodHasAllDisks).toEqual(EXPECTED_HAS_WON);
  });

  it("should return false if neither the second nor the third rod has all disks and the first rod is the start rod", () => {
    // Given
    const RODS: HanoiTower[] = [
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
    const TOTAL_DISKS = 4;
    const START_ROD_NUMBER = 0;
    const EXPECTED_HAS_WON = false;

    // When
    const hasWonFirstRodHasAllDisks = hasWon({
      rods: RODS,
      totalDisks: TOTAL_DISKS,
      startRodNumber: START_ROD_NUMBER,
    });

    // Then
    expect(hasWonFirstRodHasAllDisks).toEqual(EXPECTED_HAS_WON);
  });

  it("should throw an error if the rods array is empty", () => {
    // Given
    const RODS: HanoiTower[] = [];
    const TOTAL_DISKS = 4;
    const START_ROD_NUMBER = 0;
    const EXPECTED_ERROR_MESSAGE = "The tower contents array is empty.";

    // When
    const hasWonEmptyRods = () =>
      hasWon({
        rods: RODS,
        totalDisks: TOTAL_DISKS,
        startRodNumber: START_ROD_NUMBER,
      });

    // Then
    expect(hasWonEmptyRods).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the total number of disks is less than 3", () => {
    // Given
    const RODS: HanoiTower[] = [
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
    const TOTAL_DISKS = 2;
    const START_ROD_NUMBER = 0;
    const EXPECTED_ERROR_MESSAGE = "The number of disks must be at least 3.";

    // When
    const hasWonLessThanThreeDisks = () =>
      hasWon({
        rods: RODS,
        totalDisks: TOTAL_DISKS,
        startRodNumber: START_ROD_NUMBER,
      });

    // Then
    expect(hasWonLessThanThreeDisks).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
