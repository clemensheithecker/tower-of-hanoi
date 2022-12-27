import DiskComponent from "./Disk";
import TowerSkeleton from "./TowerSkeleton";
import { Disk } from "./types";

const Tower = ({
  numberDisks,
  disks,
}: {
  numberDisks: number;
  disks: Disk[];
}) => {
  const BASE_HEIGHT = 0.075;
  const diskHeight = 0.8 / numberDisks;

  return (
    <>
      <TowerSkeleton />
      {disks.map((disk) => (
        <DiskComponent
          position={disk.position}
          height={diskHeight}
          width={disk.width}
          backgroundColorClass={disk.backgroundColorClass}
          baseHeight={BASE_HEIGHT}
          key={disk.position}
        />
      ))}
    </>
  );
};

export default Tower;
