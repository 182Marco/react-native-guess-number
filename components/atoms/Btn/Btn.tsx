import { IBtn } from './Btn.model';
import * as N from 'react-native';
import * as S from './Btn.style';
import * as Gs from '../../../styles';

const Btn: IBtn = p => {
  return (
    <N.Pressable
      style={S.btnBoxStyle(p)}
      onPress={p.onPress}
      {...Gs.android_ripple}
    >
      <N.View style={S.btnStyle(p)}>
        <N.Text style={S.btnTextStyle(p)}>{p.text}</N.Text>
      </N.View>
    </N.Pressable>
  );
};

export { Btn };
