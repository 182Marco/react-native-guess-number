import { GestureResponderEvent } from 'react-native';

interface BtnAtomProps {
  BgColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  color?: string;
  height?: string;
  width?: string;
  onPress: (e: GestureResponderEvent) => void;
  fontSize?: string;
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
