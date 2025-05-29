import { IGenRandomBetween } from './randomNum.models';

const genRandomBetween: IGenRandomBetween = ({ min, max, exclude }) => {
  const rnd = Math.floor(Math.random() * (max - min)) + min;

  if (rnd === exclude) {
    return genRandomBetween({ min, max, exclude });
  }

  return rnd;
};

export { genRandomBetween };
