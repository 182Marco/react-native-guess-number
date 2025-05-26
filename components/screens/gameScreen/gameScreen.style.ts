import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const S = StyleSheet.create({
  title: {
    color: Gs.colors.secondary,
    borderColor: Gs.colors.secondary,
  },
  screen: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  plusMinusBtnsBox: {
    marginVertical: 20,
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
  },
  SummaryText: {
    color: Gs.colors.secondary,
    marginBottom: 0,
    marginTop: 0,
  },
});

export { S };
