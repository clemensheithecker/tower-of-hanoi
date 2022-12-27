const getBackgroundColorClass = ({
  initialPosition,
  backgroundColorClasses,
}: {
  initialPosition: number;
  backgroundColorClasses: string[];
}): string => {
  if (initialPosition < 0) {
    throw new Error("The initial position must be at least 0.");
  }

  if (backgroundColorClasses.length === 0) {
    throw new Error("The background color classes array is empty.");
  }

  const index = initialPosition % backgroundColorClasses.length;

  return backgroundColorClasses[index];
};

export default getBackgroundColorClass;
