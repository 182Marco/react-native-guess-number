import { StyleSheet } from 'react-native';
import * as Gs from '../../../styles';
import { IStyleProps } from './Btn.model';

const S = StyleSheet.create({
  btnBox: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 700,
  },
});

const btnBoxStyle = (p: IStyleProps) => ({
  ...S.btnBox,
  backgroundColor: p.BgColor || Gs.colors.buttonColor,
});

const btnStyle = (p: IStyleProps) => ({
  ...S.btn,
  paddingVertical: Number(p.paddingVertical || 10),
  paddingHorizontal: Number(p.paddingHorizontal || 20),
});

const btnTextStyle = (p: IStyleProps) => ({
  ...S.btnText,
  color: p.color || Gs.colors.textColor,
});

export { btnStyle, btnBoxStyle, btnTextStyle };
