import { HanoiError, HanoiTower } from "../types";

const getRod = ({
  rodNumber,
  rods,
}: {
  rodNumber: number;
  rods: HanoiTower[];
}): HanoiTower => {
  const rod = rods.find((rod) => rod.towerNumber === rodNumber);

  if (!rod) {
    throw new Error(
      HanoiError.RodNotFoundForRodNumber.replace("%s", rodNumber.toString())
    );
  }

  return rod;
};

export default getRod;
