import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const imageSize = 400;

const S = StyleSheet.create({
  screenWrapper: { marginTop: 60 },
  text: {
    fontSize: 30,
    color: Gs.colors.inputBackground,
    width: '80%',
    margin: 'auto',
    marginBottom: 25,
  },
  imgWrap: {
    width: imageSize,
    height: imageSize,
    borderRadius: 200,
  },
});

export { S };
