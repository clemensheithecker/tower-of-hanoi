import { HanoiTower } from "../types";
import { getInitialTowerContents } from "./getInitialTowerContents";

describe("getInitialTowerContents", () => {
  it("should return an array of initial tower contents given a number of disks and an array of background color classes", () => {
    // Given
    const NUMBER_DISKS = 3;
    const BACKGROUND_COLOR_CLASSES = [
      "bg-rose-500",
      "bg-amber-500",
      "bg-emerald-500",
      "bg-sky-500",
      "bg-violet-500",
      "bg-fuchsia-500",
    ];
    const EXPECTED_INITIAL_TOWER_CONTENTS: HanoiTower[] = [
      {
        towerNumber: 0,
        disks: [
          { backgroundColorClass: "bg-rose-500", position: 0, width: 0.8 },
          { backgroundColorClass: "bg-amber-500", position: 1, width: 0.58 },
          { backgroundColorClass: "bg-emerald-500", position: 2, width: 0.35 },
        ],
      },
      {
        towerNumber: 1,
        disks: [],
      },
      {
        towerNumber: 2,
        disks: [],
      },
    ];

    // When
    const actualInitialTowerContents = getInitialTowerContents({
      numberDisks: NUMBER_DISKS,
      backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
    });

    // Then
    expect(actualInitialTowerContents).toEqual(EXPECTED_INITIAL_TOWER_CONTENTS);
  });

  it("should throw an error if the number of disks is less than 3", () => {
    // Given
    const NUMBER_DISKS = 2;
    const BACKGROUND_COLOR_CLASSES = [
      "bg-rose-500",
      "bg-amber-500",
      "bg-emerald-500",
      "bg-sky-500",
      "bg-violet-500",
      "bg-fuchsia-500",
    ];
    const EXPECTED_ERROR_MESSAGE = "The number of disks must be at least 3.";

    // When
    const actualGetInitialTowerContents = () =>
      getInitialTowerContents({
        numberDisks: NUMBER_DISKS,
        backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
      });

    // Then
    expect(actualGetInitialTowerContents).toThrowError(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the background color classes array is empty", () => {
    // Given
    const NUMBER_DISKS = 3;
    const BACKGROUND_COLOR_CLASSES: string[] = [];
    const EXPECTED_ERROR_MESSAGE =
      "The background color classes array is empty.";

    // When
    const actualGetInitialTowerContents = () =>
      getInitialTowerContents({
        numberDisks: NUMBER_DISKS,
        backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
      });

    // Then
    expect(actualGetInitialTowerContents).toThrowError(EXPECTED_ERROR_MESSAGE);
  });
});
