import { HanoiTower } from "../components/Game/types";
import { HanoiError } from "../types/hanoiErrors";

const getHasWon = ({
  towerContents,
  numberDisks,
}: {
  towerContents: HanoiTower[];
  numberDisks: number;
}): boolean => {
  if (towerContents.length === 0) {
    throw new Error(HanoiError.TowerContentsArrayEmpty);
  }

  if (numberDisks < 3) {
    throw new Error(HanoiError.MinimumNumberOfDisksNotMet);
  }

  const filteredTowerContents = [...towerContents].filter(
    (towerContent) => towerContent.towerNumber !== 0
  );
  const hasWon = filteredTowerContents.some(
    (towerContent) => towerContent.disks.length === numberDisks
  );

  return hasWon;
};

export default getHasWon;
