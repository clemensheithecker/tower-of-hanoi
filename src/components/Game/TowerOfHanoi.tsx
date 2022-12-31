import { useEffect, useState } from "react";
import {
  getInitialTowerContents,
  getTowerContent,
  moveDisk,
} from "../../utilities";
import TowerButton from "./TowerButton";
import { TowerContent } from "./types";
import Notification from "./Notification";
import getHasWon from "../../utilities/getHasWon";
import confetti from "canvas-confetti";
import GameSetup from "./GameSetup";
import GameRestartButton from "./GameRestartButton";

const BACKGROUND_COLOR_CLASSES = [
  "bg-rose-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-fuchsia-500",
];
const NUMBER_DISKS = 3;
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
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    if (hasWon) {
      setNotification({
        message: "Congratulations, you won!",
        type: "success",
      });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        disableForReducedMotion: true,
      });
    }
  }, [hasWon]);

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

        if (getHasWon({ towerContents, numberDisks: NUMBER_DISKS })) {
          setHasWon(true);
        }
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
    <>
      <GameSetup />
      <section className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
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
      <GameRestartButton />
    </>
  );
};

export default TowerOfHanoi;
