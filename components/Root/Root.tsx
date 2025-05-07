import * as C from '@/components';
import * as N from 'react-native';
import { S } from './Root.style';
import { useRoot } from './Root.hook';
import { appScreens } from '@/constants';

const Root: React.FC = () => {
  const h = useRoot();
  return (
    <N.ImageBackground
      source={require('@/assets/images/dice.jpg')}
      resizeMode="cover"
      imageStyle={S.img}
      style={S.bg}
    >
      <N.SafeAreaView>
        {h.isScreen(appScreens.START_GAME_SCREEN) && (
          <C.StartGameScreen setPickedNum={h.setPickedNum} />
        )}
        {h.isScreen(appScreens.GAME_SCREEN) && (
          <C.GameScreen setScreen={h.setScreen} />
        )}
      </N.SafeAreaView>
    </N.ImageBackground>
  );
};

export { Root };
