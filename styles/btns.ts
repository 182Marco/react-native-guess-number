import { colors } from './colors';
import { StyleSheet } from 'react-native';

const btnSecondaryStyle = StyleSheet.create({
  BgAndBorder: {
    backgroundColor: 'transparent',
  },
  paddingSizeElevation: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textStyle: {
    color: colors.errorColor,
  },
});

const sizeRoundedBtn = 70;

const roundedBtnStyles = StyleSheet.create({
  BgAndBorder: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.textColor,
    borderRadius: sizeRoundedBtn / 2,
  },
  paddingSizeElevation: {
    width: sizeRoundedBtn,
    height: sizeRoundedBtn,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  textStyle: {
    fontSize: 30,
    color: colors.textColor,
  },
});

const roundedBtn = {
  ...roundedBtnStyles,
  rippleColor: colors.textColor,
};

export { btnSecondaryStyle, roundedBtn };
