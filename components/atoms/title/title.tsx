import * as N from 'react-native';
import { S } from './title.style';
import { ITitle } from './title.model';

const Title: ITitle = p => {
  return <N.Text style={[S.title, p.style]}>{p.text}</N.Text>;
};

export { Title };
