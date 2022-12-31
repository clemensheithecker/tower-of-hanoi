import { roundNumber } from "../../utils";
import { HanoiError } from "../types";

const getDiskWidth = ({
  initialPosition,
  totalDisks,
}: {
  initialPosition: number;
  totalDisks: number;
}): number => {
  if (initialPosition < 0) {
    throw new Error(HanoiError.InvalidInitialDiskPosition);
  }

  if (totalDisks < 0) {
    throw new Error(HanoiError.InvalidTotalDisks);
  }

  const MIN_WIDTH = 0.35;
  const MAX_WIDTH = 0.8;
  const range = MAX_WIDTH - MIN_WIDTH;
  const increment = range / (totalDisks - 1);
  const diskWidth = MAX_WIDTH - initialPosition * increment;

  return roundNumber({ number: diskWidth, decimalPlaces: 2 });
};

export default getDiskWidth;
