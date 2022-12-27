import PageLayout from "./components/Layout/PageLayout";

const App = () => {
  return (
    <PageLayout>
      <h1 className="text-4xl font-bold text-gray-800">The Tower of Hanoi</h1>
      <p className="mt-4 text-gray-800">
        The Tower of Hanoi is a classic mathematical puzzle that consists of
        three rods and a number of disks of different sizes. The goal of the
        game is to move the entire stack of disks from one rod to another rod,
        subject to the rule that no disk may be placed on top of a smaller disk.
      </p>
      <div className="mt-4">
        <a
          className="text-base font-semibold"
          href="https://en.wikipedia.org/wiki/Tower_of_Hanoi"
        >
          Learn more <span className="aria-hidden">→</span>
        </a>
      </div>
    </PageLayout>
  );
};

export default App;
