import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { useStartGameScreen } from './startGameScreen.hook';
import { IStartGameScreen } from './startGameScreen.models';

const StartGameScreen: IStartGameScreen = p => {
  const { S, ...h } = useStartGameScreen(p);
  return (
    <N.ScrollView style={S.scrollView}>
      <N.KeyboardAvoidingView style={S.screen}>
        <C.Title text={texts.startGameTitle} />
        <N.View style={S.inputBox}>
          <N.Text style={S.inputExplain}>{texts.startGameInputExplain}</N.Text>
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
              onPress={h.reset}
              {...Gs.btnSecondaryStyle}
            />
            <C.Btn
              text={texts.confirmBtnText}
              onPress={() => h.handelConfirm(h.numberValue)}
            />
          </N.View>
        </N.View>
      </N.KeyboardAvoidingView>
    </N.ScrollView>
  );
};

export { StartGameScreen };
