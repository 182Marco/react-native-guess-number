import * as R from 'react';
import * as N from 'react-native';
import { genRandomBetween } from '@/utils';
import * as U from './gameScreen.utils';
import {
  IGetNewGuess,
  IUseGameScreen,
  DirEnum,
  ICheckCheating,
} from './gameScreen.models';
import { appScreens } from '@/constants';

const useGameScreen: IUseGameScreen = p => {
  const initialGuess = genRandomBetween({
    min: 1,
    max: 100,
    exclude: p.pickedNum,
  });
  const [currGuess, setCurrGuess] = R.useState(initialGuess);

  R.useEffect(() => {
    p.setRound([initialGuess]);
  }, []);

  const isCheating: ICheckCheating = str =>
    (str === DirEnum.UP && currGuess > p.pickedNum) ||
    (str === DirEnum.DOWN && currGuess < p.pickedNum);

  const getCheatingBtn: ICheckCheating = str => {
    if (isCheating(str)) {
      N.Alert.alert(...U.cheatAlertParams);
      return true;
    }
    return false;
  };

  const getNewGuess: IGetNewGuess = str => {
    if (getCheatingBtn(str)) return;
    setCurrGuess(pv => {
      const newGuess = genRandomBetween({
        min: str === DirEnum.UP ? pv : 1,
        max: str === DirEnum.UP ? 100 : pv,
        exclude: pv,
      });
      p.setRound(pvR => [...pvR, newGuess]);
      return newGuess;
    });
  };

  R.useEffect(() => {
    if (p.pickedNum === currGuess) {
      p.setScreen(appScreens.GAME_OVER_SCREEN);
    }
  }, [p.pickedNum, currGuess, p.round]);

  return { initialGuess, currGuess, getNewGuess };
};

export { useGameScreen };
