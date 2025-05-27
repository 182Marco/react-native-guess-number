import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { S } from './gameOverScreen.style';
import { useGameOverScreen } from './gameOverScreen.hook';
import { IGameOverScreen } from './gameOverScreen.models';
import { texts } from '@/texts';

const GameOverScreen: IGameOverScreen = p => {
  const h = useGameOverScreen(p);
  return (
    <N.View style={S.screenWrapper}>
      <C.Title style={S.title} text={texts.gameOverScreenTitle} />
      <N.View style={S.imgWrap}>
        <N.Image
          source={require('@/assets/images/success.png')}
          style={S.img}
        />
      </N.View>
      <N.Text style={Gs.texts.summaryText}>
        {texts.gameOverSummary.part1}
        <N.Text style={Gs.texts.highlightedText}>{p.round.length}</N.Text>
        {texts.gameOverSummary.part2}
        <N.Text style={Gs.texts.highlightedText}>{p.pickedNum}</N.Text>
      </N.Text>
      <C.Btn onPress={h.reset} text={texts.startOverBtn} />
    </N.View>
  );
};

export { GameOverScreen };
