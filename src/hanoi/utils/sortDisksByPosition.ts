import { HanoiError, HanoiRod } from "../types";

const sortDisksByPosition = (rod: HanoiRod): HanoiRod => {
  if (rod.disks.length === 0) {
    throw new Error(HanoiError.RodHasNoDisks);
  }

  const sortedDisks = [...rod.disks].sort(
    (disk1, disk2) => disk1.position - disk2.position
  );
  const rodWithSortedDisks: HanoiRod = { ...rod, disks: sortedDisks };

  return rodWithSortedDisks;
};

export default sortDisksByPosition;
