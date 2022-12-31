import { HanoiError, HanoiTower } from "../types";

export const sortDisksByPosition = (rod: HanoiTower): HanoiTower => {
  if (rod.disks.length === 0) {
    throw new Error(HanoiError.TowerContentHasNoDisks);
  }

  const sortedDisks = [...rod.disks].sort(
    (disk1, disk2) => disk1.position - disk2.position
  );
  const rodWithSortedDisks: HanoiTower = { ...rod, disks: sortedDisks };

  return rodWithSortedDisks;
};
