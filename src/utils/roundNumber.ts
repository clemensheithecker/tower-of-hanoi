import { Decimal } from "decimal.js";

const roundNumber = ({
  number,
  decimalPlaces,
}: {
  number: number;
  decimalPlaces: number;
}): number => new Decimal(number).toDecimalPlaces(decimalPlaces).toNumber();

export default roundNumber;
