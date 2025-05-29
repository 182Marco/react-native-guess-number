import * as N from 'react-native';
import { INumberDisplay } from './numberDisplay.models';
import { S } from './numberDisplay.style';

const NumberDisplay: INumberDisplay = p => {
  return (
    <N.View style={[S.box, p.style]}>
      <N.Text style={S.text}>{p.num}</N.Text>
    </N.View>
  );
};

export { NumberDisplay };
