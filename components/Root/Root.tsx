import * as C from '@/components';
import * as N from 'react-native';
import { S } from './Root.style';
import { useRoot } from './Root.hook';
import { appScreens, diceImg } from '@/constants';

const Root: React.FC = () => {
  const h = useRoot();
  return (
    <N.ImageBackground
      source={diceImg}
      resizeMode="cover"
      imageStyle={S.img}
      style={S.bg}
    >
      <N.SafeAreaView />
      {h.isScreen(appScreens.START_GAME_SCREEN) && (
        <C.StartGameScreen setPickedNum={h.setPickedNum} />
      )}
      {h.isScreen(appScreens.GAME_SCREEN) && (
        <C.GameScreen
          setScreen={h.setScreen}
          pickedNum={h.pickedNum as number}
          rounds={h.rounds}
          setRounds={h.setRounds}
        />
      )}
      {h.isScreen(appScreens.GAME_OVER_SCREEN) && (
        <C.GameOverScreen
          setScreen={h.setScreen}
          pickedNum={h.pickedNum}
          setPickedNum={h.setPickedNum}
          rounds={h.rounds}
          setRounds={h.setRounds}
        />
      )}
    </N.ImageBackground>
  );
};

export { Root };
