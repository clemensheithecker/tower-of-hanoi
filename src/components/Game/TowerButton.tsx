import Tower from "./Tower";
import { Disk } from "./types";

const TowerButton = ({
  number,
  numberDisks,
  selected,
  disks,
  handleClick,
}: {
  number: number;
  numberDisks: number;
  selected?: boolean;
  disks: Disk[];
  handleClick: (towerNumber: number) => void;
}) => {
  return (
    <button
      onClick={() => handleClick(number)}
      className={`flex flex-col rounded-2xl p-8 shadow-sm ${
        selected
          ? "bg-gray-200 ring-4 ring-gray-400"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Tower {number + 1}</h3>
      </div>
      <div className="relative mt-8 flex aspect-[4/3] w-full justify-center">
        <Tower numberDisks={numberDisks} disks={disks} />
      </div>
    </button>
  );
};

export default TowerButton;
