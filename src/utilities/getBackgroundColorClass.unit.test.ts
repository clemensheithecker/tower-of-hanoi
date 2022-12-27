import getBackgroundColorClass from "./getBackgroundColorClass";

describe("getBackgroundColorClass", () => {
  it("should return a background color class given an initial position and an array of background color classes", () => {
    // Given
    const INITIAL_POSITION = 1;
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
    const actualBackgroundColorClass = getBackgroundColorClass({
      initialPosition: INITIAL_POSITION,
      backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
    });

    // Then
    expect(actualBackgroundColorClass).toBe(EXPECTED_BACKGROUND_COLOR_CLASS);
  });

  it("should throw an error if the initial position is less than 0", () => {
    // Given
    const INITIAL_POSITION = -1;
    const BACKGROUND_COLOR_CLASSES = [
      "bg-rose-500",
      "bg-amber-500",
      "bg-emerald-500",
      "bg-sky-500",
      "bg-violet-500",
      "bg-fuchsia-500",
    ];
    const EXPECTED_ERROR_MESSAGE = "The initial position must be at least 0.";

    // When
    const actualGetBackgroundColorClass = () =>
      getBackgroundColorClass({
        initialPosition: INITIAL_POSITION,
        backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
      });

    // Then
    expect(actualGetBackgroundColorClass).toThrowError(EXPECTED_ERROR_MESSAGE);
  });

  it("should throw an error if the array of background color classes is empty", () => {
    // Given
    const INITIAL_POSITION = 1;
    const BACKGROUND_COLOR_CLASSES: string[] = [];
    const EXPECTED_ERROR_MESSAGE =
      "The background color classes array is empty.";

    // When
    const actualGetBackgroundColorClass = () =>
      getBackgroundColorClass({
        initialPosition: INITIAL_POSITION,
        backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
      });

    // Then
    expect(actualGetBackgroundColorClass).toThrowError(EXPECTED_ERROR_MESSAGE);
  });
});
