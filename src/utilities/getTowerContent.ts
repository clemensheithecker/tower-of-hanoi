import { HanoiError, HanoiTower } from "../types";

export const getTowerContent = ({
  towerNumber,
  towerContents,
}: {
  towerNumber: number;
  towerContents: HanoiTower[];
}): HanoiTower => {
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
