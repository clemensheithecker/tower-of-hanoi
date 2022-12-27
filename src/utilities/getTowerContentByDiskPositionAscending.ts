import { TowerContent } from "../components/Game/types";

export const getTowerContentByDiskPositionAscending = (
  towerContent: TowerContent
): TowerContent => {
  if (towerContent.disks.length === 0) {
    throw new Error("The tower content does not have any disks.");
  }

  towerContent.disks.sort((a, b) => a.position - b.position);

  return towerContent;
};
