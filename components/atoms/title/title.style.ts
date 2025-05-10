import { StyleSheet } from 'react-native';
import * as globalS from '@/styles';

const S = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: globalS.colors.secondary,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: globalS.colors.secondary,
    padding: 12,
  },
});

export { S };
