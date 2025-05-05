import * as C from '@/components';
import * as N from 'react-native';
import { S } from './Root.style';

const Root: React.FC = () => (
  <N.ImageBackground
    source={require('@/assets/images/dice.jpg')}
    resizeMode="cover"
    imageStyle={S.img}
    style={S.bg}
  >
    <C.StartGameScreen />
  </N.ImageBackground>
);

export { Root };
