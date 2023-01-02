import { HanoiError, HanoiRod } from "../types";
import getBackgroundColorClass from "./getBackgroundColorClass";
import getDiskWidth from "./getDiskWidth";

const getInitialRodStates = ({
  totalDisks,
  backgroundColorClasses,
}: {
  totalDisks: number;
  backgroundColorClasses: string[];
}): HanoiRod[] => {
  if (totalDisks < 3) {
    throw new Error(HanoiError.MinimumNumberOfDisksNotMet);
  }

  if (backgroundColorClasses.length === 0) {
    throw new Error(HanoiError.BackgroundColorClassesArrayEmpty);
  }

  const initialRods: HanoiRod[] = [
    {
      rodNumber: 0,
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
      rodNumber: 1,
      disks: [],
    },
    {
      rodNumber: 2,
      disks: [],
    },
  ];

  return initialRods;
};

export default getInitialRodStates;
