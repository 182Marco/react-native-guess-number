import { appScreens } from '@/constants';
import { IUseGameOverScreen } from './gameOverScreen.models';
import { useStyles } from './gameOverScreen.style';

const useGameOverScreen: IUseGameOverScreen = p => {
  const S = useStyles();

  const reset = () => {
    p.setPickedNum(null);
    p.setRounds([]);
    p.setScreen(appScreens.START_GAME_SCREEN);
  };

  return {
    reset,
    S,
  };
};

export { useGameOverScreen };
