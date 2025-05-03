import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface BtnAtomProps {
  BgColor?: string;
  borderRadius?: string;
  color?: string;
  onPress: (e: GestureResponderEvent) => void;
  paddingVertical?: string;
  paddingHorizontal?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginVertical?: string;
  marginHorizontal?: string;
  rippleColor?: string;
  text: string;
}

type IBtn = React.FC<BtnAtomProps>;

type IStyleProps = Omit<BtnAtomProps, 'onPress' | 'text'>;

export { IBtn, BtnAtomProps, IStyleProps };
