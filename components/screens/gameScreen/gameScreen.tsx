import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { S } from './gameScreen.style';
import { useGameScreen } from './gameScreen.hook';
import { DirEnum, IGameScreen } from './gameScreen.models';

const GameScreen: IGameScreen = p => {
  const h = useGameScreen(p);
  return (
    <N.View style={S.screen}>
      <C.Title text={texts.gameScreenTitleText} />
      <C.NumberDisplay num={h.currGuess} />
      <N.View style={S.plusMinusBtnsBox}>
        <C.Btn
          {...Gs.roundedBtn}
          onPress={h.getNewGuess.bind(this, DirEnum.UP)}
          text={texts.plusBtnText}
        />
        <C.Btn
          {...Gs.roundedBtn}
          onPress={h.getNewGuess.bind(this, DirEnum.DOWN)}
          text={texts.minusBtnText}
        />
      </N.View>
      <N.Text>Round number: {h.round}</N.Text>
    </N.View>
  );
};

export { GameScreen };
