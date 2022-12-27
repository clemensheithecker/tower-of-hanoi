import { TowerContent } from "../components/Game/types";

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
      `Cannot find the tower content for tower number "${towerNumber}".`
    );
  }

  return towerContent;
};
