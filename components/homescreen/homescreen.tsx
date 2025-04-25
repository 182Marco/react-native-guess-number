import * as N from 'react-native';
import * as C from '../../components';
import * as Gs from '../../styles';
import { texts } from '../../texts';
import { S } from './homescreen.style';
import { useHomeScreen } from './homeScreen.hook';

const HomeScreen = () => {
  const h = useHomeScreen();
  return (
    <N.View style={S.mainBox}>
      <N.Text style={S.text}>Hello world</N.Text>
    </N.View>
  );
};

export { HomeScreen };
