import { IGetNum } from './lowerOrHigherInNumArray.models';

const getHigher: IGetNum = ar => ar.reduce((a, c) => (c > a ? c : a));

const getLower: IGetNum = ar => ar.reduce((a, c) => (c < a ? c : a));

export { getHigher, getLower };
