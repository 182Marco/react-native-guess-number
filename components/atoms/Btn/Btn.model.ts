import { CSSColor } from '@/models';
import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

interface BtnAtomProps {
  margins?: ViewStyle;
  btnStyleProps?: ViewStyle;
  textStyle?: TextStyle;
  rippleColor?: CSSColor;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  text: string;
}

type IBtn = React.FC<BtnAtomProps>;

export { IBtn, BtnAtomProps };
