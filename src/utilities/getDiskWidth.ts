const getRoundedNumber = ({
  number,
  decimalPlaces,
}: {
  number: number;
  decimalPlaces: number;
}): number => Number(Math.round(Number(number + "e+2")) + "e-2");

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

  return getRoundedNumber({ number: diskWidth, decimalPlaces: 2 });
};

export default getDiskWidth;
