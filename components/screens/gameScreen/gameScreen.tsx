import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { S } from './gameScreen.style';
import { useGameScreen } from './gameScreen.hook';
import { DirEnum, IGameScreen } from './gameScreen.models';
import { appScreens } from '@/constants';

const GameScreen: IGameScreen = p => {
  const h = useGameScreen(p);
  return (
    <N.View style={S.screen}>
      <C.Title text={texts.gameScreenTitleText} />
      <C.NumberDisplay num={h.currGuess} />
      <N.Text>Give a right suggestion to the opponent</N.Text>
      <N.View style={S.plusMinusBtnsBox}>
        <C.Btn
          {...Gs.roundedBtn}
          onPress={h.getNewGuess.bind(this, DirEnum.UP)}
          text="+"
        />
        <C.Btn
          {...Gs.roundedBtn}
          onPress={h.getNewGuess.bind(this, DirEnum.DOWN)}
          text="-"
        />
      </N.View>
      <N.Text>Round number: {h.round}</N.Text>
      <C.Btn
        marginTop="30"
        onPress={() => p.setScreen(appScreens.START_GAME_SCREEN)}
        text="get Back"
      />
    </N.View>
  );
};

export { GameScreen };
