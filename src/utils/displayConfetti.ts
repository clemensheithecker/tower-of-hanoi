import confetti from "canvas-confetti";

const displayConfetti = (): void => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    disableForReducedMotion: true,
  });
};

export default displayConfetti;
