import * as N from 'react-native';
import * as C from '@/components';
import { S } from './gameOverScreen.style';
import { useGameOverScreen } from './gameOverScreen.hook';
import { IGameOverScreen } from './gameOverScreen.models';
import { texts } from '@/texts';
import { appScreens } from '@/constants';

const GameOverScreen: IGameOverScreen = p => {
  const h = useGameOverScreen(p);
  return (
    <N.View>
      <C.Title styles={S.text} text={texts.gameOverScrenTitle} />
      <C.Btn onPress={h.reset} text={texts.startOverBtn} />
    </N.View>
  );
};

export { GameOverScreen };
