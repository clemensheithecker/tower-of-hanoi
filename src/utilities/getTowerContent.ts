import { TowerContent } from "../components/Game/types";

export const getTowerContent = ({
  towerNumber,
  towerContents,
}: {
  towerNumber: number;
  towerContents: TowerContent[];
}): TowerContent | undefined =>
  towerContents.find(
    (towerContent) => towerContent.towerNumber === towerNumber
  );
