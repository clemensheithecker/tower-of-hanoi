import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { Notification } from "../../components";
import { HanoiError, HanoiTower } from "../types";
import { getHasWon, getInitialRodStates, getRod, moveTopDisk } from "../utils";
import GameRestartButton from "./GameRestartButton";
import GameSetup from "./GameSetup";
import TowerSelector from "./RodSelector";

const BACKGROUND_COLOR_CLASSES = [
  "bg-rose-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-fuchsia-500",
];
const TOTAL_DISKS = 3;
const TOTAL_RODS = 3;

const Game = () => {
  const initialRodStates = getInitialRodStates({
    totalDisks: TOTAL_DISKS,
    backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
  });

  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [towerContents, setTowerContents] =
    useState<HanoiTower[]>(initialRodStates);
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
        const updatedTowerContents = moveTopDisk({
          fromRodNumber: selected,
          toRodNumber: towerNumber,
          rods: towerContents,
        });

        setTowerContents(updatedTowerContents);
        setSelected(undefined);

        if (
          getHasWon({
            rods: towerContents,
            startRodNumber: 0,
            totalDisks: TOTAL_DISKS,
          })
        ) {
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
        {[...Array(TOTAL_RODS)].map((_, index) => {
          const towerContent = getRod({
            rodNumber: index,
            rods: towerContents,
          });

          if (towerContent) {
            return (
              <TowerSelector
                handleClick={handleClick}
                towerNumber={index}
                disks={towerContent.disks}
                selected={selected === index}
                numberDisks={TOTAL_DISKS}
                key={index}
              />
            );
          } else {
            throw new Error(HanoiError.TowerContentNotFound);
          }
        })}
      </section>
      <GameRestartButton />
    </>
  );
};

export default Game;
