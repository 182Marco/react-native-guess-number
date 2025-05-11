import * as R from 'react';
import * as N from 'react-native';
import {
  IGetNewGuess,
  IUseGameScreen,
  DirEnum,
  ICheckCheating,
} from './gameScreen.models';
import { genRandomBetween } from '@/utils';
import { texts } from '@/texts';

const useGameScreen: IUseGameScreen = p => {
  const initialGuess = genRandomBetween({
    min: 1,
    max: 100,
    exclude: p.pickedNum,
  });
  const [currGuess, setCurrGuess] = R.useState(initialGuess);

  const checkCheating: ICheckCheating = str => {
    if (
      (str === DirEnum.UP && currGuess > p.pickedNum) ||
      (str === DirEnum.DOWN && currGuess < p.pickedNum)
    ) {
      N.Alert.alert(texts.missLeadingCpuTitle, texts.missLeadingCpuText);
      return true;
    }
    return false;
  };

  const getNewGuess: IGetNewGuess = str => {
    if (checkCheating(str)) return;
    setCurrGuess(pv =>
      pv > 1 && pv < 99
        ? genRandomBetween({
            min: str === DirEnum.UP ? pv : 1,
            max: str === DirEnum.UP ? 100 : pv,
            exclude: pv,
          })
        : pv
    );
  };

  return { initialGuess, currGuess, getNewGuess };
};

export { useGameScreen };
