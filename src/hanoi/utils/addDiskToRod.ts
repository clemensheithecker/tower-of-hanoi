import { HanoiDisk, HanoiTower } from "../types";

const addDiskToRod = ({
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

export default addDiskToRod;
