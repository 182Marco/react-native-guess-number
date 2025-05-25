import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const imageSize = '100%';
const imageWrapSize = 400;

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
    width: imageWrapSize,
    height: imageWrapSize,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Gs.colors.inputBackground,
    overflow: 'hidden',
    margin: 36,
  },
  img: {
    width: imageSize,
    height: imageSize,
  },
});

export { S };
