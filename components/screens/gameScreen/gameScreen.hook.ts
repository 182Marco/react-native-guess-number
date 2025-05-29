import * as R from 'react';
import * as N from 'react-native';
import * as Gu from '@/utils';
import * as U from './gameScreen.utils';
import {
  IGetNewGuess,
  IUseGameScreen,
  DirEnum,
  ICheckCheating,
} from './gameScreen.models';
import { appScreens } from '@/constants';

const useGameScreen: IUseGameScreen = p => {
  const initialGuess = Gu.genRandomBetween({
    min: 0,
    max: 100,
  });
  const [currGuess, setCurrGuess] = R.useState(initialGuess);

  R.useEffect(() => {
    p.setRounds([initialGuess]);
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

  const getNewGuess: IGetNewGuess = dir => {
    if (getCheatingBtn(dir)) return;
    setCurrGuess(pv => {
      const newGuess = Gu.genRandomBetween(
        U.getMinMaxParam(dir, pv, p.rounds, p.pickedNum)
      );
      p.setRounds(pv => [...pv, newGuess]);
      return newGuess;
    });
  };

  R.useEffect(() => {
    if (p.pickedNum === currGuess) {
      p.setScreen(appScreens.GAME_OVER_SCREEN);
    }
  }, [p.pickedNum, currGuess, p.rounds]);

  return { initialGuess, currGuess, getNewGuess };
};

export { useGameScreen };
