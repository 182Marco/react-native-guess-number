import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { S } from './gameOverScreen.style';
import { useGameOverScreen } from './gameOverScreen.hook';
import { IGameOverScreen } from './gameOverScreen.models';
import { texts } from '@/texts';
import { winImg } from '@/constants';

const GameOverScreen: IGameOverScreen = p => {
  const h = useGameOverScreen(p);
  return (
    <N.View style={S.screenWrapper}>
      <C.Title style={S.title} text={texts.gameOverScreenTitle} />
      <N.View style={S.imgWrap}>
        <N.Image source={winImg} style={S.img} />
      </N.View>
      <C.Summary
        times={p.rounds.length}
        number={Number(p.pickedNum)}
        text1={texts.gameOverSummary.part1}
        text2={texts.gameOverSummary.part2}
      />
      <C.Btn onPress={h.reset} text={texts.startOverBtn} />
    </N.View>
  );
};

export { GameOverScreen };
