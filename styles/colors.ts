import { IAndroid_ripple } from './models';
import { isHexColor } from './utils';

const colors: Record<string, string> = {
  background: '#4e0329',
  secondary: '#ddb52f',
  primaryBtn: '#72063c',
  inputBackground: '#334155',
  inputBorder: '#64748B',
  textColor: '#F1F5F9',
  errorColor: '#F87171',
  buttonColor: '#3B82F6',
  goalTextColor: '#E2E8F0',
  goalBorderColor: '#475569',
  checked: '#00FF00',
  rippleColor: '#dddddddd',
};

const android_ripple: IAndroid_ripple = color => ({
  android_ripple: {
    color: isHexColor(color) || colors.rippleColor,
    borderless: false,
  },
});

export { colors, android_ripple };
