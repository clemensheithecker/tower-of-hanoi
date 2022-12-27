import { TowerContent } from "../components/Game/types";

export const getTowerContentByDiskPositionAscending = (
  towerContent: TowerContent
): TowerContent => {
  towerContent.disks.sort((a, b) => a.position - b.position);
  return towerContent;
};
