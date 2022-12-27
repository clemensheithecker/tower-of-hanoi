import { getPercentageNumberString } from "../../utilities";

const DiskComponent = ({
  position,
  height,
  width,
  backgroundColorClass,
  baseHeight,
}: {
  position: number;
  height: number;
  width: number;
  backgroundColorClass: string;
  baseHeight: number;
}) => {
  const positionPercentString = getPercentageNumberString(
    baseHeight + position * height
  );
  const heightPercentString = getPercentageNumberString(height);
  const widthPercentString = getPercentageNumberString(width);

  return (
    <div
      className={`absolute w-[80%] rounded-full ${backgroundColorClass}`}
      style={{
        bottom: `${positionPercentString}%`,
        height: `${heightPercentString}%`,
        width: `${widthPercentString}%`,
      }}
    ></div>
  );
};

export default DiskComponent;
