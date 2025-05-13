import { StyleSheet } from 'react-native';
import * as globalS from '@/styles';
import { ITitleStyle } from './title.model';

const S = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: globalS.colors.textColor,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: globalS.colors.textColor,
    padding: 12,
  },
});

const title = (p: ITitleStyle) => ({
  ...S.title,
  padding: Number(p.padding) || 12,
});

export { title };
