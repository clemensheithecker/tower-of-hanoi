import { TowerContent } from "../components/Game/types";
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
    throw new Error("The number of disks must be at least 3.");
  }

  if (backgroundColorClasses.length === 0) {
    throw new Error("The background color classes array is empty.");
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
