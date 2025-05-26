import { appScreens } from '@/constants';
import * as R from 'react';
import { IIsScreen } from './models';

const useRoot = () => {
  const [screen, setScreen] = R.useState<appScreens>(
    appScreens.START_GAME_SCREEN
  );
  const [pickedNum, setPickedNum] = R.useState<number | null>(null);
  const [round, setRound] = R.useState(1);

  R.useEffect(() => {
    setRound(pv => (pv !== pickedNum ? pv + 1 : pv));
    if (pickedNum) setScreen(appScreens.GAME_SCREEN);
  }, [pickedNum]);

  const isScreen: IIsScreen = str => screen === str;

  return {
    screen,
    setScreen,
    isScreen,
    setPickedNum,
    pickedNum,
    round,
    setRound,
  };
};

export { useRoot };
