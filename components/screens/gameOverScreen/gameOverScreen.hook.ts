import { appScreens } from '@/constants';
import { IUseGameOverScreen } from './gameOverScreen.models';

const useGameOverScreen: IUseGameOverScreen = p => {
  const reset = () => {
    p.setScreen(appScreens.START_GAME_SCREEN);
    p.setPickedNum(null);
  };

  return {
    reset,
  };
};

export { useGameOverScreen };
