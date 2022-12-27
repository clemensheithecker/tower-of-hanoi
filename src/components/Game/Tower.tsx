// import { useState } from "react";

const Tower = ({
  number,
  selected,
  handleClick,
}: {
  number: number;
  selected?: boolean;
  handleClick: (towerNumber: number) => void;
}) => {
  return (
    <button
      onClick={() => handleClick(number)}
      className="flex flex-col rounded-2xl bg-gray-100 p-8 shadow-sm hover:bg-gray-200"
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Tower {number}</h3>
        {selected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default Tower;
