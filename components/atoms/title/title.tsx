import * as N from 'react-native';
import { title } from './title.style';
import { ITitle } from './title.model';

const Title: ITitle = p => {
  return <N.Text style={title(p)}>{p.text}</N.Text>;
};

export { Title };
