import {
  ImageStyle,
  RegisteredStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface BtnAtomProps {
  margins: RegisteredStyle<ViewStyle | TextStyle | ImageStyle>;
}

type IBtn = React.FC<BtnAtomProps>;

type IStyleProps = Omit<BtnAtomProps, 'onPress' | 'text'>;

export { IBtn, BtnAtomProps, IStyleProps };
