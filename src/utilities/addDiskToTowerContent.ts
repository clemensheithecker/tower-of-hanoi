import { HanoiDisk, HanoiTower } from "../types";

export const addDiskToTowerContent = ({
  towerContent,
  disk,
}: {
  towerContent: HanoiTower;
  disk: HanoiDisk;
}): HanoiTower => {
  const initalTopPosition = towerContent.disks.length;
  const newTopDisk = JSON.parse(JSON.stringify(disk));

  newTopDisk.position = initalTopPosition;
  towerContent.disks.push(newTopDisk);

  return towerContent;
};
