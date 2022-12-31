import { HanoiTower } from "../components/Game/types";
import { HanoiError } from "../types/hanoiErrors";
import { addDiskToTowerContent } from "./addDiskToTowerContent";
import { getTowerContent } from "./getTowerContent";
import { removeTopDiskFromTowerContent } from "./removeTopDiskFromTowerContent";

export const moveDisk = ({
  fromTowerNumber,
  toTowerNumber,
  towerContents,
}: {
  fromTowerNumber: number;
  toTowerNumber: number;
  towerContents: HanoiTower[];
}): HanoiTower[] => {
  const fromTowerContent = getTowerContent({
    towerNumber: fromTowerNumber,
    towerContents,
  });
  const toTowerContent = getTowerContent({
    towerNumber: toTowerNumber,
    towerContents,
  });

  if (fromTowerContent === toTowerContent) {
    throw new Error(HanoiError.CannotMoveDiskToSameTower);
  }

  if (fromTowerContent.disks.length === 0) {
    throw new Error(HanoiError.CannotMoveDiskFromEmptyTower);
  }

  if (toTowerContent.disks.length !== 0) {
    if (
      fromTowerContent.disks[fromTowerContent.disks.length - 1].width >
      toTowerContent.disks[toTowerContent.disks.length - 1].width
    ) {
      throw new Error(HanoiError.CannotMoveLargerDiskOntoSmallerDisk);
    }
  }

  const fromTowerTopDisk =
    fromTowerContent.disks[fromTowerContent.disks.length - 1];
  const updatedToTowerContent = addDiskToTowerContent({
    towerContent: toTowerContent,
    disk: fromTowerTopDisk,
  });
  const updatedFromTowerContent =
    removeTopDiskFromTowerContent(fromTowerContent);

  let updatedTowerContents = towerContents;

  updatedTowerContents[fromTowerNumber] = updatedFromTowerContent;
  updatedTowerContents[toTowerNumber] = updatedToTowerContent;

  return updatedTowerContents;
};
