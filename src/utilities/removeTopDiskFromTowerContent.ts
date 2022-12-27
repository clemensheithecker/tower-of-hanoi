import { TowerContent } from "../components/Game/types";
import { getTowerContentByDiskPositionAscending } from "./getTowerContentByDiskPositionAscending";

export const removeTopDiskFromTowerContent = (
  towerContent: TowerContent
): TowerContent => {
  const orderedTowerContent =
    getTowerContentByDiskPositionAscending(towerContent);
  orderedTowerContent.disks.pop();

  return towerContent;
};
