import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const screenMainColor = Gs.colors.inputBackground;

const texts = StyleSheet.create({
  summaryText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: screenMainColor,
  },
  highlightedText: {
    fontWeight: 900,
    color: Gs.colors.primary,
  },
});

export { texts };
