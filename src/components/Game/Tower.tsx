import Disk from "./Disk";
import Rod from "./Rod";
import { HanoiDisk } from "./types";

const Tower = ({
  disks,
  numberDisks,
}: {
  disks: HanoiDisk[];
  numberDisks: number;
}) => {
  const BASE_HEIGHT = 0.075;
  const diskHeight = 0.8 / numberDisks;

  return (
    <>
      <Rod />
      {disks.map((disk) => (
        <Disk
          position={disk.position}
          width={disk.width}
          backgroundColorClass={disk.backgroundColorClass}
          height={diskHeight}
          baseHeight={BASE_HEIGHT}
          key={disk.position}
        />
      ))}
    </>
  );
};

export default Tower;
