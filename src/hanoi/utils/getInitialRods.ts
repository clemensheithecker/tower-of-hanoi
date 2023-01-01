import { HanoiError, HanoiTower } from "../types";
import getBackgroundColorClass from "./getBackgroundColorClass";
import getDiskWidth from "./getDiskWidth";

const getInitialRods = ({
  totalDisks,
  backgroundColorClasses,
}: {
  totalDisks: number;
  backgroundColorClasses: string[];
}): HanoiTower[] => {
  if (totalDisks < 3) {
    throw new Error(HanoiError.MinimumNumberOfDisksNotMet);
  }

  if (backgroundColorClasses.length === 0) {
    throw new Error(HanoiError.BackgroundColorClassesArrayEmpty);
  }

  const initialRods: HanoiTower[] = [
    {
      towerNumber: 0,
      disks: Array.from({ length: totalDisks }, (_, index) => ({
        position: index,
        width: getDiskWidth({ initialPosition: index, totalDisks }),
        backgroundColorClass: getBackgroundColorClass({
          initialDiskPosition: index,
          backgroundColorClasses,
        }),
      })),
    },
    {
      towerNumber: 1,
      disks: [],
    },
    {
      towerNumber: 2,
      disks: [],
    },
  ];

  return initialRods;
};

export default getInitialRods;
