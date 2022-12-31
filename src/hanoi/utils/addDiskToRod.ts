import { HanoiDisk, HanoiTower } from "../types";

export const addDiskToRod = ({
  rod,
  disk,
}: {
  rod: HanoiTower;
  disk: HanoiDisk;
}): HanoiTower => {
  const topDisk: HanoiDisk = { ...disk, position: rod.disks.length };
  const updatedRod: HanoiTower = { ...rod, disks: [...rod.disks, topDisk] };

  return updatedRod;
};
