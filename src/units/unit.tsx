export interface IUnit {
  resourceName: string;
  multiplier: number;
}

export interface IUnitGroup {
  category: string;
  sort: number;
  slug: string;
  units: IUnit[];
}

export const units: IUnitGroup[] = [
  {
    category: "UnitGroup_Cooking",

    sort: 1,
    slug: "cooking",
    units: [
      {
        resourceName: "cup",
        multiplier: 1,
      },
      {
        resourceName: "tablespoon",
        multiplier: 0.065,
      },
      {
        resourceName: "teaspoon",
        multiplier: 0.02,
      },
    ],
  },
  {
    category: "UnitGroup_Distance",

    sort: 2,
    slug: "distance",
    units: [
      {
        resourceName: "meter",
        multiplier: 1,
      },
      {
        resourceName: "inch",
        multiplier: 0.0254,
      },
      {
        resourceName: "yard",
        multiplier: 0.9144,
      },
    ],
  },
];
