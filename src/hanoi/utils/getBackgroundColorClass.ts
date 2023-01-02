import { HanoiError } from "../types/hanoiErrors";

const getBackgroundColorClass = ({
  initialDiskPosition,
  backgroundColorClasses,
}: {
  initialDiskPosition: number;
  backgroundColorClasses: string[];
}): string => {
  if (initialDiskPosition < 0) {
    throw new Error(HanoiError.InvalidInitialDiskPosition);
  }

  if (backgroundColorClasses.length === 0) {
    throw new Error(HanoiError.BackgroundColorClassesArrayEmpty);
  }

  const index = initialDiskPosition % backgroundColorClasses.length;

  return backgroundColorClasses[index];
};

export default getBackgroundColorClass;
