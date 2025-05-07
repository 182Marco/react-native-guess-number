import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { S } from './gameScreen.style';
import { useGameScreen } from './gameScreen.hook';
import { IGameScreen } from './gameScreen.models';
import { appScreens } from '@/constants';

const GameScreen: IGameScreen = p => {
  const h = useGameScreen(p.setScreen);
  return (
    <N.View style={S.screen}>
      <N.Text>Opponent's Guess</N.Text>
      {/*  GUESS*/}
      <N.Text>Higher or Lower</N.Text>
      <C.Btn onPress={() => {}} text="+" />
      <C.Btn onPress={() => {}} text="-" />
      <C.Btn
        onPress={() => p.setScreen(appScreens.START_GAME_SCREEN)}
        text="get Back"
      />
      <N.View>LOG ROUNDS</N.View>
    </N.View>
  );
};

export { GameScreen };
