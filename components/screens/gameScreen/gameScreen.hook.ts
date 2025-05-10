import * as R from 'react';
import { IGetNewGuess, IUseGameScreen, DirEnum } from './gameScreen.models';
import { genRandomBetween } from '@/utils';

const useGameScreen: IUseGameScreen = p => {
  const initialGuess = genRandomBetween({
    min: 1,
    max: 100,
    exclude: p.pickedNum,
  });
  const [currGuess, setCurrGuess] = R.useState(initialGuess);

  const getNewGuess: IGetNewGuess = str =>
    setCurrGuess(pv =>
      pv > 1 && pv < 99
        ? genRandomBetween({
            min: str === DirEnum.UP ? pv : 1,
            max: str === DirEnum.UP ? 100 : pv,
            exclude: pv,
          })
        : pv
    );

  return { initialGuess, currGuess, getNewGuess };
};

export { useGameScreen };
