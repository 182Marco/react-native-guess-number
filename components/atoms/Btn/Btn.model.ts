import { ViewStyle } from 'react-native';

interface BtnAtomProps {
  margins?: ViewStyle;
}

type IBtn = React.FC<BtnAtomProps>;

export { IBtn, BtnAtomProps };
