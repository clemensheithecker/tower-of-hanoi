import { CounterButton } from "../../components/Buttons";

const TotalDisksSetter = ({
  totalDisks,
  setTotalDisks,
}: {
  totalDisks: number;
  setTotalDisks: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const decrementTotalDisks = (): void => {
    if (totalDisks > 3) {
      setTotalDisks(totalDisks - 1);
    }
  };
  const incrementTotalDisks = (): void => {
    if (totalDisks < 10) {
      setTotalDisks(totalDisks + 1);
    }
  };
  const isDecrementButtonDisabled = totalDisks <= 3;
  const isIncrementButtonDisabled = totalDisks >= 10;

  return (
    <div className="flex w-full items-center justify-between">
      <span className="font-medium text-gray-900">Number of disks: </span>
      <div className="inline-flex items-center">
        <CounterButton
          onClick={() => decrementTotalDisks()}
          disabled={isDecrementButtonDisabled}
        >
          -
        </CounterButton>
        <div className="mx-4 flex w-5 justify-center font-medium text-gray-900">
          <span>{totalDisks}</span>
        </div>
        <CounterButton
          onClick={() => incrementTotalDisks()}
          disabled={isIncrementButtonDisabled}
        >
          +
        </CounterButton>
      </div>
    </div>
  );
};

export default TotalDisksSetter;
