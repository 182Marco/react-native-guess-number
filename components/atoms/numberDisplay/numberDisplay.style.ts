import { colors } from '@/styles';
import { StyleSheet } from 'react-native';

const S = StyleSheet.create({
  box: {
    borderWidth: 4,
    borderColor: colors.secondary,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export { S };
