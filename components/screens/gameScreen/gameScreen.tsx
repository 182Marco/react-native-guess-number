import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { Ionicons } from '@expo/vector-icons';
import { S } from './gameScreen.style';
import { useGameScreen } from './gameScreen.hook';
import { DirEnum, IGameScreen } from './gameScreen.models';
import { ioniconsIconProps } from './gameScreen.utils';

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
          text={<Ionicons name="add" {...ioniconsIconProps} />}
        />
        <C.Btn
          {...Gs.roundedBtn}
          onPress={h.getNewGuess.bind(this, DirEnum.DOWN)}
          text={<Ionicons name="remove" {...ioniconsIconProps} />}
        />
      </N.View>
      <N.Text>{texts.gameScreenSummary + p.round}</N.Text>
    </N.View>
  );
};

export { GameScreen };
