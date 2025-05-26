import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const imageSize = '100%';
const imageWrapSize = 300;
const borderRadius = imageWrapSize / 2;

const S = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
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
    marginTop: 12,
  },
  img: {
    borderRadius: borderRadius,
    width: imageSize,
    height: imageSize,
  },
  SummaryText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: Gs.colors.inputBackground,
  },
  highlightedText: {
    fontWeight: 900,
    color: Gs.colors.primary,
  },
});

export { S };
