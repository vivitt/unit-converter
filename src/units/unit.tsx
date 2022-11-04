export interface IUnit {
  resourceName: string;
  multiplier: number;
  divider?: number;
}

export interface IUnitGroup {
  category: string;
  sort: number;
  slug: string;
  emoji: string;
  units: IUnit[];
  color: string;
}

export const units: IUnitGroup[] = [
  {
    category: "UnitGroup_Cooking",
    color: "#F0D1FF",
    sort: 1,
    slug: "cooking",
    emoji: "🍪",
    units: [
      {
        resourceName: "cup",
        multiplier: 1,
        divider: 1,
      },
      {
        resourceName: "tablespoon",
        multiplier: 15.4,
        divider: 0.065,
      },
      {
        resourceName: "teaspoon",
        multiplier: 50,
        divider: 0.02,
      },
      { resourceName: "kilo", multiplier: 0.25, divider: 4 },
      { resourceName: "kilogram", multiplier: 0.25, divider: 4 },
      {
        resourceName: "gram",
        multiplier: 250,
        divider: 0.004,
      },
      { resourceName: "pound", multiplier: 0.55, divider: 1.8 },
      {
        resourceName: "pinch",
        multiplier: 500,
        divider: 0.002,
      },
    ],
  },
  {
    category: "UnitGroup_Distance",
    color: "#B8FFDD",
    sort: 2,
    slug: "distance",
    emoji: "🏃🏽‍♀️",
    units: [
      {
        resourceName: "meter",
        multiplier: 1,
        divider: 1,
      },
      {
        resourceName: "centimeter",
        multiplier: 100,
        divider: 0.01,
      },
      {
        resourceName: "kilometer",
        multiplier: 0.001,
        divider: 1000,
      },
      {
        resourceName: "inch",
        multiplier: 39.37,
        divider: 0.0254,
      },
      {
        resourceName: "yard",
        multiplier: 1.09,
        divider: 0.9144,
      },
      {
        resourceName: "soccer field",
        multiplier: 0.009,
        divider: 111.11,
      },
      {
        resourceName: "ligth year",
        multiplier: 1.057001e-16,
        divider: 9460730472580800,
      },
      {
        resourceName: "feet",
        multiplier: 3.28,
        divider: 0.3,
      },
    ],
  },
  {
    category: "UnitGroup_Temp",
    color: "#A381B3",
    sort: 3,
    slug: "temperature",
    emoji: "🌡",
    units: [
      {
        resourceName: "celsius",
        multiplier: 1,
        divider: 1,
      },
      {
        resourceName: "farenheit",
        multiplier: 33.8,
        divider: 0.029,
      },
      {
        resourceName: "kelvin",
        multiplier: 274.17,
        divider: 0.003,
      },
    ],
  },
  {
    category: "UnitGroup_DigitalStorage",
    color: "#FFE7B8",
    sort: 4,
    slug: "digital storage",
    emoji: "👾",
    units: [
      {
        resourceName: "kilobyte",
        multiplier: 1,
        divider: 1,
      },
      {
        resourceName: "bit",
        multiplier: 8000,
        divider: 0.000125,
      },
      {
        resourceName: "byte",
        multiplier: 1000,
        divider: 0.001,
      },
      {
        resourceName: "megabyte",
        multiplier: 0.001,
        divider: 1000,
      },
      {
        resourceName: "gigabyte",
        multiplier: 0.000001,
        divider: 1000000,
      },
      {
        resourceName: "terabyte",
        multiplier: 0.00000001,
        divider: 1000000000,
      },
    ],
  },
];
