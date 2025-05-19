import { CSSColor } from '@/models';
import { IAndroid_ripple } from './models';
import { isHexColor } from './utils';

const colors: Record<string, CSSColor> = {
  btnPrimaryRipple: '#640233',
  primaryBtn: '#73183F',
  secondary: '#4e0329',
  primary: '#ddb52f',
  inputBackground: '#334155',
  tertiary: '#64748B',
  textColor: '#F1F5F9',
  errorColor: '#F87171',
  buttonColor: '#3B82F6',
  goalTextColor: '#E2E8F0',
  goalBorderColor: '#475569',
  checked: '#00FF00',
};

const android_ripple: IAndroid_ripple = color => ({
  android_ripple: {
    color: isHexColor(color) || colors.btnPrimaryRipple,
    borderless: false,
  },
});

export { colors, android_ripple };
