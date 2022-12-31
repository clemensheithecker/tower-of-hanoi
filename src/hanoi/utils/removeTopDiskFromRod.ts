import { HanoiError, HanoiTower } from "../types";
import { sortDisksByPosition } from "./sortDisksByPosition";

export const removeTopDiskFromRod = (rod: HanoiTower): HanoiTower => {
  if (rod.disks.length === 0) {
    throw new Error(HanoiError.CannotRemoveTopDiskFromEmptyTower);
  }

  const orderedRod = sortDisksByPosition(rod);

  orderedRod.disks.pop();

  return orderedRod;
};
