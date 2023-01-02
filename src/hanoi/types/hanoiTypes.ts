export type HanoiDisk = {
  position: number;
  width: number;
  backgroundColorClass: string;
};

export type HanoiRod = {
  rodNumber: number;
  disks: HanoiDisk[];
};
