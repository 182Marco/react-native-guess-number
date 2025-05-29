import * as N from 'react-native';
import * as Gs from '@/styles';
import { S } from './summary.style';
import { ISummary } from './summary.models';

const Summary: ISummary = p => (
  <N.Text style={[Gs.texts.summaryText, S.SummaryText, p.style]}>
    {p.text1}
    <N.Text style={Gs.texts.highlightedText}>{p.times}</N.Text>
    {p.text2}
    <N.Text style={Gs.texts.highlightedText}>{p.number}</N.Text>
  </N.Text>
);

export { Summary };
