import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const imageSize = '100%';
const imageWrapSize = 300;
const borderRadius = imageWrapSize / 2;

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
    borderRadius: borderRadius,
    borderWidth: 3,
    borderColor: Gs.colors.inputBackground,
    overflow: 'hidden',
    margin: 36,
  },
  img: {
    borderRadius: borderRadius,
    width: imageSize,
    height: imageSize,
  },
});

export { S };
