import * as N from 'react-native';
interface ITitleProps {
  text: string;
  style?: N.TextStyle;
}

type ITitle = React.FC<ITitleProps>;

type ITitleStyle = Omit<ITitleProps, 'text'>;

export { ITitle, ITitleStyle };
