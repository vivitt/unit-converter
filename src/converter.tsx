import { IUnitGroup } from "./units/unit";

export const convert = (q: number, from: number, to: number): number => {
  return q * (to / from);
};

export const getResult = (a: string, from: number, to: number): string => {
  if (a !== "") {
    const n = parseInt(a);
    const r = convert(n, from, to);
    return r.toFixed(3);
  } else {
    return "";
  }
};
export const findMultiplier = (
  a: string,
  b: IUnitGroup[],
  c: string
): number => {
  const conversionTypeArr = b.filter((u) => u.slug === a);

  const unitsArr = conversionTypeArr[0].units.filter(
    (u) => u.resourceName === c
  );

  return unitsArr[0].multiplier;
};

export const convertCurrency = () => {};
