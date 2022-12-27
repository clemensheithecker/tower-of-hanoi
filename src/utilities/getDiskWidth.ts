const getDiskWidth = ({
  initialPosition,
  numberDisks,
}: {
  initialPosition: number;
  numberDisks: number;
}): number => {
  const MIN_WIDTH = 0.35;
  const MAX_WIDTH = 0.8;
  const diskWidth =
    MAX_WIDTH - (initialPosition * (MAX_WIDTH - MIN_WIDTH)) / (numberDisks - 1);

  return Number(diskWidth.toFixed(2));
};

export default getDiskWidth;
