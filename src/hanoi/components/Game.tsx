import { useEffect, useState } from "react";
import { Notification } from "../../components";
import { displayConfetti } from "../../utils";
import { HanoiError, HanoiTower } from "../types";
import { getHasWon, getInitialRodStates, getRod, moveTopDisk } from "../utils";
import GameRestartButton from "./GameRestartButton";
import GameSetup from "./GameSetup";
import RodSelector from "./RodSelector";

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

  const [hasWon, setHasWon] = useState(false);
  const [notification, setNotification] = useState<
    { message: string; type: string } | undefined
  >(undefined);
  const [rods, setRods] = useState<HanoiTower[]>(initialRodStates);
  const [selected, setSelected] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (hasWon) {
      setNotification({
        message: "Congratulations, you won!",
        type: "success",
      });

      displayConfetti();
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

  const handleSelectRod = (rodNumber: number) => {
    if (selected === undefined) {
      setSelected(rodNumber);
    } else if (selected === rodNumber) {
      setSelected(undefined);
    } else {
      try {
        const updatedRodStates = moveTopDisk({
          fromRodNumber: selected,
          toRodNumber: rodNumber,
          rods: rods,
        });

        setRods(updatedRodStates);
        setSelected(undefined);

        if (
          getHasWon({
            rods: rods,
            startRodNumber: 0,
            totalDisks: TOTAL_DISKS,
          })
        ) {
          setHasWon(true);
        }
      } catch (error) {
        let message = "Unknown Error.";
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
          const rod = getRod({
            rodNumber: index,
            rods: rods,
          });

          if (rod) {
            return (
              <RodSelector
                handleClick={handleSelectRod}
                rodNumber={index}
                disks={rod.disks}
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
