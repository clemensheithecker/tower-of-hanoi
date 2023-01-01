import React from "react";

const CounterButton = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-lg bg-gray-50 py-1 px-4 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-100/50 hover:ring-gray-400/75 disabled:text-gray-300 disabled:hover:bg-gray-50 disabled:hover:ring-gray-300"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CounterButton;
