import { appScreens } from '@/constants';
import { IUseGameOverScreen } from './gameOverScreen.models';

const useGameOverScreen: IUseGameOverScreen = p => {
  const reset = () => {
    p.setPickedNum(null);
    p.setRound(0);
    p.setScreen(appScreens.START_GAME_SCREEN);
  };

  return {
    reset,
  };
};

export { useGameOverScreen };
