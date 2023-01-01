import { HanoiError, HanoiRod } from "../types";

const getHasWon = ({
  rods,
  startRodNumber,
  totalDisks,
}: {
  rods: HanoiRod[];
  startRodNumber: number;
  totalDisks: number;
}): boolean => {
  if (rods.length === 0) {
    throw new Error(HanoiError.RodsArrayEmpty);
  }

  if (totalDisks < 3) {
    throw new Error(HanoiError.MinimumNumberOfDisksNotMet);
  }

  const startRod = rods.find((rod) => rod.rodNumber === startRodNumber);

  if (!startRod) {
    throw new Error(HanoiError.InvalidStartRodNumber);
  }

  if (startRod.disks.length > 0) {
    return false;
  }

  for (const rod of rods) {
    if (rod.rodNumber !== startRodNumber && rod.disks.length === totalDisks) {
      return true;
    }
  }

  return false;
};

export default getHasWon;
