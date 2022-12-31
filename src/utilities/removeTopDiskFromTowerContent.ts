import { HanoiError, HanoiTower } from "../types";
import { getTowerContentByDiskPositionAscending } from "./getTowerContentByDiskPositionAscending";

export const removeTopDiskFromTowerContent = (
  towerContent: HanoiTower
): HanoiTower => {
  if (towerContent.disks.length === 0) {
    throw new Error(HanoiError.CannotRemoveTopDiskFromEmptyTower);
  }

  const orderedTowerContent =
    getTowerContentByDiskPositionAscending(towerContent);
  orderedTowerContent.disks.pop();

  return towerContent;
};
