import * as R from 'react';
import { IUseGameScreen } from './gameScreen.models';
import { genRandomBetween } from '@/utils';

const useGameScreen: IUseGameScreen = p => {
  const initialGuess = genRandomBetween({
    min: 1,
    max: 100,
    exclude: p.pickedNum,
  });
  const [currGuess, setCurrGuess] = R.useState(initialGuess);

  return { initialGuess, currGuess };
};

export { useGameScreen };
