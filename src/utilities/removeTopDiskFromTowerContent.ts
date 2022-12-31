import { TowerContent } from "../components/Game/types";
import { HanoiError } from "../types/hanoiErrors";
import { getTowerContentByDiskPositionAscending } from "./getTowerContentByDiskPositionAscending";

export const removeTopDiskFromTowerContent = (
  towerContent: TowerContent
): TowerContent => {
  if (towerContent.disks.length === 0) {
    throw new Error(HanoiError.CannotRemoveTopDiskFromEmptyTower);
  }

  const orderedTowerContent =
    getTowerContentByDiskPositionAscending(towerContent);
  orderedTowerContent.disks.pop();

  return towerContent;
};
