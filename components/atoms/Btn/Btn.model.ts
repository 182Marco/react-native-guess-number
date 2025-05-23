import { CSSColor } from '@/models';
import * as R from 'react';
import * as N from 'react-native';

interface BtnAtomProps {
  margins?: N.ViewStyle;
  BgAndBorder?: N.ViewStyle;
  paddingSizeElevation?: N.ViewStyle;
  textStyle?: N.TextStyle;
  rippleColor?: CSSColor;
  onPress: ((ev: N.GestureResponderEvent) => void) | null | undefined;
  text: string | R.ReactElement;
}

type IBtn = React.FC<BtnAtomProps>;

export { IBtn, BtnAtomProps };
