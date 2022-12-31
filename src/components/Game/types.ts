export type HanoiDisk = {
  position: number;
  width: number;
  backgroundColorClass: string;
};

export type HanoiTower = {
  towerNumber: number;
  disks: HanoiDisk[];
};
