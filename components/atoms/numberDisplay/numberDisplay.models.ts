import * as N from 'react-native';
interface INumberDisplayProps {
  num: number;
  style?: N.ViewStyle;
}

type INumberDisplay = React.FC<INumberDisplayProps>;

export { INumberDisplay };
