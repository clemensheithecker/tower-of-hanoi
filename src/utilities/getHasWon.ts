import { TowerContent } from "../components/Game/types";

const getHasWon = ({
  towerContents,
  numberDisks,
}: {
  towerContents: TowerContent[];
  numberDisks: number;
}): boolean => {
  if (towerContents.length === 0) {
    throw new Error("The tower contents array is empty.");
  }

  if (numberDisks < 3) {
    throw new Error("The number of disks must be at least 3.");
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
