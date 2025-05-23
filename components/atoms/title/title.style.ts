import { StyleSheet } from 'react-native';
import * as Gs from '@/styles';
import { ITitleStyle } from './title.model';

const S = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Gs.colors.textColor,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Gs.colors.textColor,
    padding: 12,
  },
});

export { S };
