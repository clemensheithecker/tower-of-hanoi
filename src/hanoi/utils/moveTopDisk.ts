import { HanoiError, HanoiTower } from "../types";
import addDiskToRod from "./addDiskToRod";
import getRod from "./getRod";
import removeTopDiskFromRod from "./removeTopDiskFromRod";

const moveTopDisk = ({
  fromRodNumber,
  toRodNumber,
  rods,
}: {
  fromRodNumber: number;
  toRodNumber: number;
  rods: HanoiTower[];
}): HanoiTower[] => {
  const fromRod = getRod({
    rodNumber: fromRodNumber,
    rods,
  });
  const toRod = getRod({
    rodNumber: toRodNumber,
    rods,
  });

  if (fromRod === toRod) {
    throw new Error(HanoiError.CannotMoveDiskToSameTower);
  }

  if (fromRod.disks.length === 0) {
    throw new Error(HanoiError.CannotMoveDiskFromEmptyTower);
  }

  if (toRod.disks.length !== 0) {
    if (
      fromRod.disks[fromRod.disks.length - 1].width >
      toRod.disks[toRod.disks.length - 1].width
    ) {
      throw new Error(HanoiError.CannotMoveLargerDiskOntoSmallerDisk);
    }
  }

  const fromRodTopDisk = fromRod.disks[fromRod.disks.length - 1];
  const updatedToRod = addDiskToRod({
    rod: toRod,
    disk: fromRodTopDisk,
  });
  const updatedFromRod = removeTopDiskFromRod(fromRod);

  let updatedRods = rods;

  updatedRods[fromRodNumber] = updatedFromRod;
  updatedRods[toRodNumber] = updatedToRod;

  return updatedRods;
};

export default moveTopDisk;