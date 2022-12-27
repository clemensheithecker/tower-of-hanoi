import { TowerContent } from "../components/Game/types";
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
  towerContents: TowerContent[];
}): TowerContent[] => {
  const fromTowerContent = getTowerContent({
    towerNumber: fromTowerNumber,
    towerContents,
  });
  const toTowerContent = getTowerContent({
    towerNumber: toTowerNumber,
    towerContents,
  });

  if (!fromTowerContent && !toTowerContent) {
    throw new Error("Cannot find the from nor the to tower content.");
  }

  if (!fromTowerContent) {
    throw new Error("Cannot find the from tower content.");
  }

  if (!toTowerContent) {
    throw new Error("Cannot find the to tower content.");
  }

  if (fromTowerContent === toTowerContent) {
    throw new Error("Cannot move a disk to same tower.");
  }

  if (fromTowerContent.disks.length === 0) {
    throw new Error("Cannot move a disk from an empty tower.");
  }

  if (toTowerContent.disks.length !== 0) {
    if (
      fromTowerContent.disks[fromTowerContent.disks.length - 1].width >
      toTowerContent.disks[toTowerContent.disks.length - 1].width
    ) {
      throw new Error("Cannot move a larger disk onto a smaller disk.");
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
