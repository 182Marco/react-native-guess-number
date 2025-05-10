import { StyleSheet } from 'react-native';
import * as Gs from '@/styles';
import { IStyleProps } from './Btn.model';

const S = StyleSheet.create({
  margins: {
    margin: 0,
  },
  pressed: {
    opacity: 0.75,
  },
  btnBox: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 700,
  },
});

const btnMargins = (p: IStyleProps) => ({
  ...S.margins,
  margin: Number(p.margin || 0),
  marginTop: Number(p.marginTop || 0),
  marginBottom: Number(p.marginBottom || 0),
  marginLeft: Number(p.marginLeft || 0),
  marginRight: Number(p.marginRight || 0),
  marginHorizontal: Number(p.marginHorizontal || 0),
  marginVertical: Number(p.marginVertical || 0),
});

const btnBoxStyle = (p: IStyleProps) => ({
  ...S.btnBox,
  backgroundColor: p.BgColor || Gs.colors.primaryBtn,
  borderColor: p.borderColor || 'transparent',
  borderWidth: Number(p.borderWidth) || 0,
  borderRadius: p.borderRadius || 28,
});

const btnBoxStylePressed = (p: IStyleProps) => ({
  ...btnBoxStyle,
  opacity: 0.75,
});

const btnStyle = (p: IStyleProps) => ({
  ...S.btn,
  paddingVertical: Number(p.paddingVertical || 8),
  paddingHorizontal: Number(p.paddingHorizontal || 16),
  height: Number(p.height) || undefined,
  width: Number(p.width) || undefined,
  elevation: Number(p.paddingVertical) && Number(p.paddingHorizontal) ? 2 : 0,
});

const btnTextStyle = (p: IStyleProps) => ({
  ...S.btnText,
  color: p.color || Gs.colors.textColor,
  fontSize: Number(p.fontSize) || 16,
});

export { btnStyle, btnBoxStyle, btnBoxStylePressed, btnTextStyle, btnMargins };
