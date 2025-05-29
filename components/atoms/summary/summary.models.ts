import * as N from 'react-native';

interface ISummaryProps {
  times: number;
  number: number;
  text1: string;
  text2: string;
  style?: N.TextStyle;
}

type ISummary = React.FC<ISummaryProps>;

export { ISummary };
