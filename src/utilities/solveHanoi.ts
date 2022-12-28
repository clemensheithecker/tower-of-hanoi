const print = (fromTowerNumber: number, toTowerNumber: number): void => {
  console.log(
    `Move disk from tower ${fromTowerNumber} to tower ${toTowerNumber}.`
  );
};

const hanoi = ({
  numberDisks,
  fromTowerNumber,
  toTowerNumber,
  moveDisk,
}: {
  numberDisks: number;
  fromTowerNumber: number;
  toTowerNumber: number;
  moveDisk: (fromTowerNumber: number, toTowerNumber: number) => void;
}) => {
  if (numberDisks === 1) {
    moveDisk(fromTowerNumber, toTowerNumber);
  } else {
    const otherTowerNumber = 6 - (fromTowerNumber + toTowerNumber);
    solveHanoi({
      numberDisks: numberDisks - 1,
      fromTowerNumber,
      toTowerNumber: otherTowerNumber,
    });
    moveDisk(fromTowerNumber, toTowerNumber);
    solveHanoi({
      numberDisks: numberDisks - 1,
      fromTowerNumber: otherTowerNumber,
      toTowerNumber,
    });
  }
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
  hanoi({
    numberDisks,
    fromTowerNumber,
    toTowerNumber,
    moveDisk: print,
  });
};

export default solveHanoi;
