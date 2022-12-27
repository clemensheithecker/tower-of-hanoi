import { TowerContent } from "../components/Game/types";
import { getTowerContentByDiskPositionAscending } from "./getTowerContentByDiskPositionAscending";

export const removeTopDiskFromTowerContent = (
  towerContent: TowerContent
): TowerContent => {
  if (towerContent.disks.length === 0) {
    throw new Error("Cannot remove the top disk from an empty tower.");
  }

  const orderedTowerContent =
    getTowerContentByDiskPositionAscending(towerContent);
  orderedTowerContent.disks.pop();

  return towerContent;
};
