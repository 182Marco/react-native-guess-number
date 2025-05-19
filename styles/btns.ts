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

const roundedBtnStyles = StyleSheet.create({
  BgAndBorder: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.textColor,
    borderRadius: '50%',
  },
  paddingSizeElevation: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
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

/* rippleColor: {
  rippleColor: colors.textColor,
}, */

export { btnSecondaryStyle, roundedBtn };
