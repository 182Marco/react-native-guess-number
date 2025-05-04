import * as N from 'react-native';
import * as C from '../..';
import * as Gs from '../../../styles';
import { texts } from '../../../texts';
import { S } from './startGameScreen.style';
import { usestartGameScreen } from './startGameScreen.hook';
import * as Styles from '../../../styles';

const StartGameScreen = () => {
  const h = usestartGameScreen();
  return (
    <N.View style={S.allScreenBox}>
      <N.View style={S.inputBox}>
        <N.TextInput
          style={S.numberInput}
          placeholderTextColor={Styles.colors.textColor}
          maxLength={2}
          keyboardType="number-pad"
        />
        <N.View style={S.btnRow}>
          <C.Btn text={texts.resetBtnText} onPress={() => {}} margin="4" />
          <C.Btn
            text={texts.confirmBtnText}
            onPress={() => {}}
            {...Gs.btnSecondaryStyle}
          />
        </N.View>
      </N.View>
    </N.View>
  );
};

export { StartGameScreen };
