import { HanoiDisk, HanoiError } from "../types";
import Disk from "./Disk";
import RodSkeleton from "./RodSkeleton";

const Rod = ({
  disks,
  numberDisks,
}: {
  disks: HanoiDisk[];
  numberDisks: number;
}) => {
  const BASE_HEIGHT = 0.075;
  const diskHeight = 0.8 / numberDisks;

  if (numberDisks < 3) {
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
