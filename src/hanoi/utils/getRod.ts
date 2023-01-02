import { HanoiError, HanoiRod } from "../types";

const getRod = ({
  rodNumber,
  rods,
}: {
  rodNumber: number;
  rods: HanoiRod[];
}): HanoiRod => {
  const rod = rods.find((rod) => rod.rodNumber === rodNumber);

  if (!rod) {
    throw new Error(
      HanoiError.RodNotFoundForRodNumber.replace("%s", rodNumber.toString())
    );
  }

  return rod;
};

export default getRod;
