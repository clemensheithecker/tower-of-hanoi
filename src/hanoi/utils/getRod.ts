import { HanoiError, HanoiTower } from "../types";

export const getRod = ({
  rodNumber,
  rods,
}: {
  rodNumber: number;
  rods: HanoiTower[];
}): HanoiTower => {
  const rod = rods.find((rod) => rod.towerNumber === rodNumber);

  if (!rod) {
    throw new Error(
      HanoiError.TowerContentNotFoundForTowerNumber.replace(
        "%s",
        rodNumber.toString()
      )
    );
  }

  return rod;
};
