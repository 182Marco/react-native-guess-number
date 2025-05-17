import { CSSColor } from '@/models';
import * as N from 'react-native';

interface BtnAtomProps {
  margins?: N.ViewStyle;
  btnStyleProps?: N.ViewStyle;
  textStyle?: N.TextStyle;
  rippleColor?: CSSColor;
  onPress: ((ev: N.GestureResponderEvent) => void) | null | undefined;
  text: string;
}

type IBtn = React.FC<BtnAtomProps>;

export { IBtn, BtnAtomProps };
