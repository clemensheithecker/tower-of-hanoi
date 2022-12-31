const GameSetup = () => {
  return (
    <div className="mt-12">
      <h2 className=" text-2xl font-bold text-gray-900">Game Setup</h2>
      <div className="mt-4 flex items-center">
        <label htmlFor="numberOfDisks" className="font-medium text-gray-900">
          Number of Disks
        </label>
        <input
          type="number"
          name="numberOfDisks"
          className="ml-8 rounded-md bg-gray-50 px-3 py-1 text-gray-900 shadow ring-1 ring-gray-300 placeholder:text-gray-400"
          placeholder="3"
          max="10"
          min="3"
        />
      </div>
    </div>
  );
};

export default GameSetup;
