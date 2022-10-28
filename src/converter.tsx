import { IUnitGroup, units } from "./units/unit";

export const convert = (q: number, from: number, to: number): string => {
  return JSON.stringify(q * (to / from));
};

export const findMultiplier = (
  a: string,
  b: IUnitGroup[],
  c: string
): number => {
  const conversionTypeArr = b.filter((u) => u.slug === a);

  console.log(conversionTypeArr, "$$$");
  const unitsArr = conversionTypeArr[0].units.filter(
    (u) => u.resourceName === c
  );

  return unitsArr[0].multiplier;
};
