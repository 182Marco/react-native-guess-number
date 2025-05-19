import { colors } from './colors';

const btnSecondaryStyle = {
  BgAndBorder: {
    BgColor: 'transparent',
  },
  paddingSizeElevation: {
    paddingHorizontal: '16',
    paddingVertical: '8',
  },
  textStyle: {
    color: colors.errorColor,
  },
};

const roundedBtn = {
  BgAndBorder: {
    BgColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.textColor,
    borderRadius: '50%',
  },
  paddingSizeElevation: {
    width: 70,
    height: 70,
  },
  textStyle: {
    fontSize: 30,
  },
  rippleColor: {
    rippleColor: colors.textColor,
  },
};

export { btnSecondaryStyle, roundedBtn };
