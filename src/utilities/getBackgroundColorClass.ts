import { HanoiError } from "../types/hanoiErrors";

const getBackgroundColorClass = ({
  initialPosition,
  backgroundColorClasses,
}: {
  initialPosition: number;
  backgroundColorClasses: string[];
}): string => {
  if (initialPosition < 0) {
    throw new Error(HanoiError.InvalidInitialPosition);
  }

  if (backgroundColorClasses.length === 0) {
    throw new Error(HanoiError.BackgroundColorClassesArrayEmpty);
  }

  const index = initialPosition % backgroundColorClasses.length;

  return backgroundColorClasses[index];
};

export default getBackgroundColorClass;
