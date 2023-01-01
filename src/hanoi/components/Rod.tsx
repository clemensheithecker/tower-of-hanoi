import { HanoiDisk, HanoiError } from "../types";
import Disk from "./Disk";
import RodSkeleton from "./RodSkeleton";

const Rod = ({
  disks,
  totalDisks,
}: {
  disks: HanoiDisk[];
  totalDisks: number;
}) => {
  const BASE_HEIGHT = 0.075;
  const diskHeight = 0.8 / totalDisks;

  if (totalDisks < 3) {
    throw new Error(HanoiError.MinimumNumberOfDisksNotMet);
  }

  return (
    <>
      <RodSkeleton />
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

export default Rod;
