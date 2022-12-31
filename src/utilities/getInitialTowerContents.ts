import { TowerContent } from "../components/Game/types";
import { HanoiError } from "../types/hanoiErrors";
import getBackgroundColorClass from "./getBackgroundColorClass";
import getDiskWidth from "./getDiskWidth";

export const getInitialTowerContents = ({
  numberDisks,
  backgroundColorClasses,
}: {
  numberDisks: number;
  backgroundColorClasses: string[];
}): TowerContent[] => {
  if (numberDisks < 3) {
    throw new Error(HanoiError.MinimumNumberOfDisksNotMet);
  }

  if (backgroundColorClasses.length === 0) {
    throw new Error(HanoiError.BackgroundColorClassesArrayEmpty);
  }

  return [
    {
      towerNumber: 0,
      disks: Array.from({ length: numberDisks }, (_, index) => ({
        position: index,
        width: getDiskWidth({ initialPosition: index, numberDisks }),
        backgroundColorClass: getBackgroundColorClass({
          initialPosition: index,
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
};
