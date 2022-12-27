import { Disk, TowerContent } from "../components/Game/types";

export const addDiskToTowerContent = ({
  towerContent,
  disk,
}: {
  towerContent: TowerContent;
  disk: Disk;
}): TowerContent => {
  const initalTopPosition = towerContent.disks.length;
  const newTopDisk = JSON.parse(JSON.stringify(disk));

  newTopDisk.position = initalTopPosition;
  towerContent.disks.push(newTopDisk);

  return towerContent;
};
