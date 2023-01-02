import TotalDisksSetter from "./TotalDisksSetter";

const GameSetup = ({
  totalDisks,
  setTotalDisks,
}: {
  totalDisks: number;
  setTotalDisks: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="mt-12">
      <h2 className=" text-2xl font-bold text-gray-900">Game Setup</h2>
      <div className="mt-4 flex max-w-xs items-center">
        <TotalDisksSetter
          totalDisks={totalDisks}
          setTotalDisks={setTotalDisks}
        />
      </div>
    </div>
  );
};

export default GameSetup;
