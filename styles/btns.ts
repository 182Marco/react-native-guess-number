import { colors } from './colors';

const btnSecondaryStyle = {
  BgColor: 'transparent',
  color: colors.errorColor,
  paddingHorizontal: '16',
  paddingVertical: '8',
};

const roundedBtn = {
  width: '70',
  height: '70',
  borderRadius: '50%',
  fontSize: '30',
  borderWidth: '2',
  borderColor: colors.textColor,
  BgColor: 'transparent',
  rippleColor: colors.textColor,
};

export { btnSecondaryStyle, roundedBtn };
