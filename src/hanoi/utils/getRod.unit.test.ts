import { HanoiRod } from "../types";
import getRod from "./getRod";

describe("getRod", () => {
  it("should return the rod for a given rod number", () => {
    // Given
    const ROD_NUMBER = 0;
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
    const EXPECTED_ROD: HanoiRod = {
      rodNumber: 0,
      disks: [
        { position: 0, width: 0.8, backgroundColorClass: "bg-rose-500" },
        { position: 1, width: 0.65, backgroundColorClass: "bg-amber-500" },
        { position: 2, width: 0.5, backgroundColorClass: "bg-emerald-500" },
        { position: 3, width: 0.35, backgroundColorClass: "bg-sky-500" },
      ],
    };

    // When
    const rod = getRod({
      rodNumber: ROD_NUMBER,
      rods: RODS,
    });

    // Then
    expect(rod).toStrictEqual(EXPECTED_ROD);
  });

  it("should throw an error if the rod is not found", () => {
    // Given
    const ROD_NUMBER = 4;
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
    const getRodNotFound = () =>
      getRod({
        rodNumber: ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(getRodNotFound).toThrow(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the rods are empty", () => {
    // Given
    const ROD_NUMBER = 0;
    const RODS: HanoiRod[] = [];
    const EXPECTED_ERROR_MESSAGE =
      "The rod with rod number 0 could not be found.";

    // When
    const getRodEmptyRods = () =>
      getRod({
        rodNumber: ROD_NUMBER,
        rods: RODS,
      });

    // Then
    expect(getRodEmptyRods).toThrow(EXPECTED_ERROR_MESSAGE);
  });
});
