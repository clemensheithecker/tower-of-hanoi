const convertDecimalToPercentage = (num: number): string => {
  const percentage = num * 100;

  return percentage.toString() + "%";
};

export default convertDecimalToPercentage;
