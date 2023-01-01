import { useEffect, useState } from "react";
import { Notification } from "../../components";
import { displayConfetti } from "../../utils";
import { HanoiError, HanoiRod } from "../types";
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
const INITIAL_TOTAL_DISKS = 4;
const TOTAL_RODS = 3;

const Game = () => {
  const [totalDisks, setTotalDisks] = useState(INITIAL_TOTAL_DISKS);

  const initialRodStates = getInitialRodStates({
    totalDisks,
    backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
  });

  const [rods, setRods] = useState<HanoiRod[]>(initialRodStates);
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [notification, setNotification] = useState<
    { message: string; type: string } | undefined
  >(undefined);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    const updatedInitialRodStates = getInitialRodStates({
      totalDisks,
      backgroundColorClasses: BACKGROUND_COLOR_CLASSES,
    });

    setRods(updatedInitialRodStates);
    setSelected(undefined);
    setNotification(undefined);
    setHasWon(false);
  }, [totalDisks]);

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

  const handleSelectRod = (rodNumber: number): void => {
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
            totalDisks,
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

  const handleRestart = (): void => {
    setRods(initialRodStates);
    setSelected(undefined);
    setNotification(undefined);
    setHasWon(false);
  };

  return (
    <>
      <GameSetup totalDisks={totalDisks} setTotalDisks={setTotalDisks} />
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
                totalDisks={totalDisks}
                key={index}
              />
            );
          } else {
            throw new Error(HanoiError.RodNotFound);
          }
        })}
      </section>
      <GameRestartButton handleRestart={handleRestart} />
    </>
  );
};

export default Game;
