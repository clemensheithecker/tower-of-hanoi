import { HanoiRod } from "../types";
import moveTopDisk from "./moveTopDisk";

describe("moveTopDisk", () => {
  it("should move the top disk from one rod to another", () => {
    // Given
    const FROM_ROD_NUMBER = 0;
    const TO_ROD_NUMBER = 1;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 1, disks: [] },
      { rodNumber: 2, disks: [] },
    ];
    const EXPECTED_RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        ],
      },
      {
        rodNumber: 1,
        disks: [
          { position: 0, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 2, disks: [] },
    ];

    // When
    const rods = moveTopDisk({
      fromRodNumber: FROM_ROD_NUMBER,
      toRodNumber: TO_ROD_NUMBER,
      rods: RODS,
    });

    // Then
    expect(rods).toStrictEqual(EXPECTED_RODS);
  });

  it("should not move the top disk from one rod to another if the disk is larger than the top disk of the destination rod", () => {
    // Given
    const FROM_ROD_NUMBER = 0;
    const TO_ROD_NUMBER = 1;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        ],
      },
      {
        rodNumber: 1,
        disks: [
          { position: 0, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE =
      "A larger disk cannot be moved onto a smaller disk.";

    // When
    const moveTopDiskLargerDiskOntoSmallerDisk = () =>
      moveTopDisk({
        fromRodNumber: FROM_ROD_NUMBER,
        toRodNumber: TO_ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(moveTopDiskLargerDiskOntoSmallerDisk).toThrow(
      EXPECTED_ERROR_MESSAGE
    );
  });

  it("should not move the top disk from one rod to another if the disk is larger than the top disk of the destination rod and the destination rod has multiple disks", () => {
    // Given
    const FROM_ROD_NUMBER = 2;
    const TO_ROD_NUMBER = 1;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
        ],
      },
      {
        rodNumber: 1,
        disks: [
          { position: 0, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 1, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      {
        rodNumber: 2,
        disks: [
          { position: 0, width: 0.65, backgroundColorClass: "bg-amber-500" },
        ],
      },
    ];
    const EXPECTED_ERROR_MESSAGE =
      "A larger disk cannot be moved onto a smaller disk.";

    // When
    const moveTopDiskLargerDiskOntoSmallerDisk = () =>
      moveTopDisk({
        fromRodNumber: FROM_ROD_NUMBER,
        toRodNumber: TO_ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(moveTopDiskLargerDiskOntoSmallerDisk).toThrow(
      EXPECTED_ERROR_MESSAGE
    );
  });

  it("should not move the top disk from one rod to another if the source rod is empty", () => {
    // Given
    const FROM_ROD_NUMBER = 2;
    const TO_ROD_NUMBER = 1;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        ],
      },
      {
        rodNumber: 1,
        disks: [
          { position: 0, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE = "A disk cannot be moved from an empty rod.";

    // When
    const moveTopDiskEmptyRod = () =>
      moveTopDisk({
        fromRodNumber: FROM_ROD_NUMBER,
        toRodNumber: TO_ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(moveTopDiskEmptyRod).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should not move the top disk from one rod to the same rod", () => {
    // Given
    const FROM_ROD_NUMBER = 0;
    const TO_ROD_NUMBER = 0;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 1, disks: [] },
      { rodNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE = "A disk cannot be moved to the same rod.";

    // When
    const moveTopDiskSameRod = () =>
      moveTopDisk({
        fromRodNumber: FROM_ROD_NUMBER,
        toRodNumber: TO_ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(moveTopDiskSameRod).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the from rod is invalid", () => {
    // Given
    const FROM_ROD_NUMBER = 4;
    const TO_ROD_NUMBER = 1;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 1, disks: [] },
      { rodNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE =
      "The rod with rod number 4 could not be found.";

    // When
    const moveTopDiskInvalidFromRod = () =>
      moveTopDisk({
        fromRodNumber: FROM_ROD_NUMBER,
        toRodNumber: TO_ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(moveTopDiskInvalidFromRod).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the to rod is invalid", () => {
    // Given
    const FROM_ROD_NUMBER = 0;
    const TO_ROD_NUMBER = 5;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 1, disks: [] },
      { rodNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE =
      "The rod with rod number 5 could not be found.";

    // When
    const moveTopDiskInvalidToRod = () =>
      moveTopDisk({
        fromRodNumber: FROM_ROD_NUMBER,
        toRodNumber: TO_ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(moveTopDiskInvalidToRod).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the from and to rods are invalid", () => {
    // Given
    const FROM_ROD_NUMBER = 4;
    const TO_ROD_NUMBER = 5;
    const RODS: HanoiRod[] = [
      {
        rodNumber: 0,
        disks: [
          { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
          { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
          { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
          { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
        ],
      },
      { rodNumber: 1, disks: [] },
      { rodNumber: 2, disks: [] },
    ];
    const EXPECTED_ERROR_MESSAGE =
      "The rod with rod number 4 could not be found.";

    // When
    const moveTopDiskInvalidFromAndToRods = () =>
      moveTopDisk({
        fromRodNumber: FROM_ROD_NUMBER,
        toRodNumber: TO_ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(moveTopDiskInvalidFromAndToRods).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
