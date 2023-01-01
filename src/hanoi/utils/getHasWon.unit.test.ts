import { HanoiTower } from "../types";
import getHasWon from "./getHasWon";

describe("getHasWon", () => {
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
    const getHasWonSecondRodHasAllDisks = getHasWon({
      rods: RODS,
      totalDisks: TOTAL_DISKS,
      startRodNumber: START_ROD_NUMBER,
    });

    // Then
    expect(getHasWonSecondRodHasAllDisks).toEqual(EXPECTED_HAS_WON);
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
    const getHasWonThirdRodHasAllDisks = getHasWon({
      rods: RODS,
      totalDisks: TOTAL_DISKS,
      startRodNumber: START_ROD_NUMBER,
    });

    // Then
    expect(getHasWonThirdRodHasAllDisks).toEqual(EXPECTED_HAS_WON);
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
    const getHasWonFirstRodHasAllDisks = getHasWon({
      rods: RODS,
      totalDisks: TOTAL_DISKS,
      startRodNumber: START_ROD_NUMBER,
    });

    // Then
    expect(getHasWonFirstRodHasAllDisks).toEqual(EXPECTED_HAS_WON);
  });

  it("should throw an error if the rods array is empty", () => {
    // Given
    const RODS: HanoiTower[] = [];
    const TOTAL_DISKS = 4;
    const START_ROD_NUMBER = 0;
    const EXPECTED_ERROR_MESSAGE = "The tower contents array is empty.";

    // When
    const getHasWonEmptyRods = () =>
      getHasWon({
        rods: RODS,
        totalDisks: TOTAL_DISKS,
        startRodNumber: START_ROD_NUMBER,
      });

    // Then
    expect(getHasWonEmptyRods).toThrow(EXPECTED_ERROR_MESSAGE);
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
    const getHasWonLessThanThreeDisks = () =>
      getHasWon({
        rods: RODS,
        totalDisks: TOTAL_DISKS,
        startRodNumber: START_ROD_NUMBER,
      });

    // Then
    expect(getHasWonLessThanThreeDisks).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
