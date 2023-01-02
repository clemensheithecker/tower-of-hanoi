import React from "react";

const SecondaryButton = ({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-lg bg-gray-50 py-3 px-4 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-100/50 hover:ring-gray-400/75"
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default SecondaryButton;
