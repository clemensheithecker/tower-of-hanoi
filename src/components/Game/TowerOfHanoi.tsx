import { useState } from "react";
import Tower from "./Tower";

const TOWERS = [1, 2, 3];

const TowerOfHanoi = () => {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  const handleClick = (towerNumber: number) => {
    if (selected === towerNumber) {
      setSelected(undefined);
    } else {
      setSelected(towerNumber);
    }
  };

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3">
      {TOWERS.map((tower) => {
        return (
          <Tower
            number={tower}
            selected={selected === tower}
            handleClick={handleClick}
            key={tower}
          />
        );
      })}
    </section>
  );
};

export default TowerOfHanoi;
