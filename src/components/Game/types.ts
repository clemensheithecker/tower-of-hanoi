export type Disk = {
  position: number;
  width: number;
  backgroundColorClass: string;
};

export type TowerContent = {
  towerNumber: number;
  disks: Disk[];
};
