import { HanoiDisk, HanoiRod } from "../types";

const addDiskToRod = ({
  rod,
  disk,
}: {
  rod: HanoiRod;
  disk: HanoiDisk;
}): HanoiRod => {
  const topDisk: HanoiDisk = { ...disk, position: rod.disks.length };
  const updatedRod: HanoiRod = { ...rod, disks: [...rod.disks, topDisk] };

  return updatedRod;
};

export default addDiskToRod;
