import { IBtn } from './Btn.model';
import * as N from 'react-native';
import { S } from './Btn.style';
import * as Gs from '@/styles';

const Btn: IBtn = p => {
  return (
    <N.View style={[S.margins, p.margins]}>
      <N.View style={[S.btnBox, p.btnStyleProps]}>
        <N.Pressable
          style={({ pressed }) =>
            pressed ? [S.btnBoxStylePressed, S.btnBox] : S.btnBox
          }
          onPress={p.onPress}
          {...Gs.android_ripple(p.rippleColor)}
        >
          <N.View style={S.btnStyle(p)}>
            <N.Text style={S.btnTextStyle(p)}>{p.text}</N.Text>
          </N.View>
        </N.Pressable>
      </N.View>
    </N.View>
  );
};

export { Btn };
