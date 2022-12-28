import { useEffect, useState } from "react";
import {
  getInitialTowerContents,
  getTowerContent,
  moveDisk,
} from "../../utilities";
import TowerButton from "./TowerButton";
import { TowerContent } from "./types";
import Notification from "./Notification";

const BACKGROUND_COLOR_CLASSES = [
  "bg-rose-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-fuchsia-500",
];
const NUMBER_DISKS = 5;
const NUMBER_TOWERS = 3;

const TowerOfHanoi = () => {
  const initialTowerContents = getInitialTowerContents({
    numberDisks: NUMBER_DISKS,
    backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
  });

  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [towerContents, setTowerContents] =
    useState<TowerContent[]>(initialTowerContents);
  const [notification, setNotification] = useState<
    { message: string; type: string } | undefined
  >(undefined);

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => {
        setNotification(undefined);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [notification]);

  const handleClick = (towerNumber: number) => {
    if (selected === undefined) {
      setSelected(towerNumber);
    } else if (selected === towerNumber) {
      setSelected(undefined);
    } else {
      try {
        const updatedTowerContents = moveDisk({
          fromTowerNumber: selected,
          toTowerNumber: towerNumber,
          towerContents,
        });

        setTowerContents(updatedTowerContents);
        setSelected(undefined);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;

        setNotification({
          message,
          type: "error",
        });
      }
    }
  };

  return (
    <section className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      {[...Array(NUMBER_TOWERS)].map((_, index) => {
        const towerContent = getTowerContent({
          towerNumber: index,
          towerContents,
        });

        if (towerContent) {
          return (
            <TowerButton
              number={index}
              numberDisks={NUMBER_DISKS}
              selected={selected === index}
              disks={towerContent.disks}
              handleClick={handleClick}
              key={index}
            />
          );
        } else {
          throw new Error("Cannot find tower content.");
        }
      })}
    </section>
  );
};

export default TowerOfHanoi;
