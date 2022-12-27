const getBackgroundColorClass = ({
  initialPosition,
  backgroundColorClasses,
}: {
  initialPosition: number;
  backgroundColorClasses: string[];
}): string => {
  const index = initialPosition % backgroundColorClasses.length;

  return backgroundColorClasses[index];
};

export default getBackgroundColorClass;
