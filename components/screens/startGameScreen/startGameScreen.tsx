import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { S } from './startGameScreen.style';
import { usestartGameScreen } from './startGameScreen.hook';

const StartGameScreen = () => {
  const h = usestartGameScreen();
  return (
    <N.View style={S.inputBox}>
      <N.TextInput
        style={S.numberInput}
        placeholderTextColor={Gs.colors.textColor}
        maxLength={2}
        keyboardType="number-pad"
        value={h.numberValue}
        onChangeText={h.setNumberValue}
      />
      <N.View style={S.btnRow}>
        <C.Btn
          text={texts.resetBtnText}
          onPress={() => h.setNumberValue('')}
          margin="4"
        />
        <C.Btn
          text={texts.confirmBtnText}
          onPress={() => {}}
          {...Gs.btnSecondaryStyle}
        />
      </N.View>
    </N.View>
  );
};

export { StartGameScreen };
