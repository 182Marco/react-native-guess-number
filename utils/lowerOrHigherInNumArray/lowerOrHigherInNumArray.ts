import { IGetLimit, IGetNum } from './lowerOrHigherInNumArray.models';

const getHigher: IGetNum = ar => ar.reduce((a, c) => (c > a ? c : a));
const getLower: IGetNum = ar => ar.reduce((a, c) => (c < a ? c : a));

const lowerLimit: IGetLimit = (n, ar) => {
  const filtered = ar.filter(e => e < n);
  return filtered.length > 0 ? getHigher(filtered) : 0;
};

const upperLimit: IGetLimit = (n, ar) => {
  const filtered = ar.filter(e => e > n);
  return filtered.length > 0 ? getLower(filtered) : 100;
};

export { lowerLimit, upperLimit };
