import { HanoiTower } from "../components/Game/types";
import { HanoiError } from "../types/hanoiErrors";

export const getTowerContentByDiskPositionAscending = (
  towerContent: HanoiTower
): HanoiTower => {
  if (towerContent.disks.length === 0) {
    throw new Error(HanoiError.TowerContentHasNoDisks);
  }

  towerContent.disks.sort((a, b) => a.position - b.position);

  return towerContent;
};
