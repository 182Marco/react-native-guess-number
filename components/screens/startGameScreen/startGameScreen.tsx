import * as N from 'react-native';
import * as C from '../..';
import * as Gs from '../../../styles';
import { texts } from '../../../texts';
import { S, btnStyles } from './startGameScreen.style';
import { usestartGameScreen } from './startGameScreen.hook';
import * as Styles from '../../../styles';

const startGameScreen = () => {
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
        <N.View>
          <C.Btn text={texts.resetBtnText} onPress={() => {}} {...btnStyles} />
          <C.Btn
            text={texts.confirmBtnText}
            onPress={() => {}}
            BgColor="transparent"
            color={Gs.colors.errorColor}
            paddingHorizontal="0"
            paddingVertical="0"
          />
        </N.View>
      </N.View>
    </N.View>
  );
};

export { startGameScreen };
