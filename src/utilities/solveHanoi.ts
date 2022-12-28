const print = (fromTowerNumber: number, toTowerNumber: number): void => {
  console.log(
    `Move disk from tower ${fromTowerNumber} to tower ${toTowerNumber}.`
  );
};

const solveHanoi = ({
  numberDisks,
  fromTowerNumber,
  toTowerNumber,
}: {
  numberDisks: number;
  fromTowerNumber: number;
  toTowerNumber: number;
}) => {
  if (numberDisks === 1) {
    print(fromTowerNumber, toTowerNumber);
  } else {
    const otherTowerNumber = 6 - (fromTowerNumber + toTowerNumber);
    solveHanoi({
      numberDisks: numberDisks - 1,
      fromTowerNumber,
      toTowerNumber: otherTowerNumber,
    });
    print(fromTowerNumber, toTowerNumber);
    solveHanoi({
      numberDisks: numberDisks - 1,
      fromTowerNumber: otherTowerNumber,
      toTowerNumber,
    });
  }
};

export default solveHanoi;
