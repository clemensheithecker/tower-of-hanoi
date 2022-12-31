export type HanoiDisk = {
  position: number;
  width: number;
  backgroundColorClass: string;
};

export type TowerContent = {
  towerNumber: number;
  disks: HanoiDisk[];
};
