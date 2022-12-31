import { TowerContent } from "../components/Game/types";
import { HanoiError } from "../types/hanoiErrors";

export const getTowerContent = ({
  towerNumber,
  towerContents,
}: {
  towerNumber: number;
  towerContents: TowerContent[];
}): TowerContent => {
  const towerContent = towerContents.find(
    (towerContent) => towerContent.towerNumber === towerNumber
  );

  if (!towerContent) {
    throw new Error(
      HanoiError.TowerContentNotFoundForTowerNumber.replace(
        "%s",
        towerNumber.toString()
      )
    );
  }

  return towerContent;
};
