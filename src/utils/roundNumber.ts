import { Decimal } from "decimal.js";

export const roundNumber = ({
  number,
  decimalPlaces,
}: {
  number: number;
  decimalPlaces: number;
}): number => new Decimal(number).toDecimalPlaces(decimalPlaces).toNumber();
