import getBackgroundColorClass from "./getBackgroundColorClass";

describe("getBackgroundColorClass", () => {
  it("should return a background color class given an initial disk position and an array of background color classes", () => {
    // Given
    const INITIAL_DISK_POSITION = 1;
    const BACKGROUND_COLOR_CLASSES = [
      "bg-rose-500",
      "bg-amber-500",
      "bg-emerald-500",
      "bg-sky-500",
      "bg-violet-500",
      "bg-fuchsia-500",
    ];
    const EXPECTED_BACKGROUND_COLOR_CLASS = "bg-amber-500";

    // When
    const backgroundColorClass = getBackgroundColorClass({
      initialDiskPosition: INITIAL_DISK_POSITION,
      backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
    });

    // Then
    expect(backgroundColorClass).toBe(EXPECTED_BACKGROUND_COLOR_CLASS);
  });

  it("should throw an error if the initial disk position is less than 0", () => {
    // Given
    const INITIAL_DISK_POSITION = -1;
    const BACKGROUND_COLOR_CLASSES = [
      "bg-rose-500",
      "bg-amber-500",
      "bg-emerald-500",
      "bg-sky-500",
      "bg-violet-500",
      "bg-fuchsia-500",
    ];
    const EXPECTED_ERROR_MESSAGE =
      "The initial position of a disk cannot be negative.";

    // When
    const getBackgroundColorClassWithNegativeInitialDiskPosition = () =>
      getBackgroundColorClass({
        initialDiskPosition: INITIAL_DISK_POSITION,
        backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
      });

    // Then
    expect(getBackgroundColorClassWithNegativeInitialDiskPosition).toThrowError(
      EXPECTED_ERROR_MESSAGE
    );
  });

  it("should throw an error if the array of background color classes is empty", () => {
    // Given
    const INITIAL_DISK_POSITION = 1;
    const BACKGROUND_COLOR_CLASSES: string[] = [];
    const EXPECTED_ERROR_MESSAGE =
      "The background color classes array is empty.";

    // When
    const getBackgroundColorClassWithEmptyBackgroundColorClasses = () =>
      getBackgroundColorClass({
        initialDiskPosition: INITIAL_DISK_POSITION,
        backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
      });

    // Then
    expect(getBackgroundColorClassWithEmptyBackgroundColorClasses).toThrowError(
      EXPECTED_ERROR_MESSAGE
    );
  });
});
