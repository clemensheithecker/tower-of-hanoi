import { convertDecimalToPercentage } from "../../utilities";

const Disk = ({
  position,
  width,
  backgroundColorClass,
  height,
  baseHeight,
}: {
  position: number;
  width: number;
  backgroundColorClass: string;
  height: number;
  baseHeight: number;
}) => {
  const positionPercentageString = convertDecimalToPercentage(
    baseHeight + position * height
  );
  const heightPercentageString = convertDecimalToPercentage(height);
  const widthPercentageString = convertDecimalToPercentage(width);

  return (
    <div
      className={`absolute w-[80%] rounded-full ${backgroundColorClass}`}
      style={{
        bottom: positionPercentageString,
        height: heightPercentageString,
        width: widthPercentageString,
      }}
    ></div>
  );
};

export default Disk;
