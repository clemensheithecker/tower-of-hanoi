import { HanoiError, HanoiTower } from "../types";
import sortDisksByPosition from "./sortDisksByPosition";

const removeTopDiskFromRod = (rod: HanoiTower): HanoiTower => {
  if (rod.disks.length === 0) {
    throw new Error(HanoiError.CannotRemoveTopDiskFromEmptyRod);
  }

  const orderedRod = sortDisksByPosition(rod);

  orderedRod.disks.pop();

  return orderedRod;
};

export default removeTopDiskFromRod;
