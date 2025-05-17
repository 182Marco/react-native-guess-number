import { GestureResponderEvent, ViewStyle } from 'react-native';

interface BtnAtomProps {
  margins?: ViewStyle;
  btnStyleProps?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

type IBtn = React.FC<BtnAtomProps>;

export { IBtn, BtnAtomProps };
