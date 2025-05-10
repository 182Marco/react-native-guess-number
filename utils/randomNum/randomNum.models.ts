type IGenRandomBetween = (p: {
  min: number;
  max: number;
  exclude?: number;
}) => number;

export { IGenRandomBetween };
