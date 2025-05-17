import {
  ImageStyle,
  RegisteredStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

type IStyleReturnedObj = RegisteredStyle<ViewStyle | TextStyle | ImageStyle>;

interface BtnAtomProps {
  margins: IStyleReturnedObj;
}

type IBtn = React.FC<BtnAtomProps>;

type IStyleProps = Omit<BtnAtomProps, 'onPress' | 'text'>;

export { IBtn, BtnAtomProps, IStyleProps };
