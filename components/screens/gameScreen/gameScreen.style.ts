import { colors } from '@/styles';
import { StyleSheet } from 'react-native';

const S = StyleSheet.create({
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
});

export { S };
