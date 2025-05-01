import { StyleSheet } from 'react-native';
import * as Gs from '../../../styles';
import { IStyleProps } from './Btn.model';

const S = StyleSheet.create({
  margins: {
    margin: 0,
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
    fontSize: 16,
    fontWeight: 700,
  },
});

const btnMargins = (p: IStyleProps) => ({
  ...S.margins,
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
  borderRadius: Number(p.borderRadius || 28),
});

const btnStyle = (p: IStyleProps) => ({
  ...S.btn,
  paddingVertical: Number(p.paddingVertical || 8),
  paddingHorizontal: Number(p.paddingHorizontal || 16),
  elevation: Number(p.paddingVertical) && Number(p.paddingHorizontal) ? 2 : 0,
});

const btnTextStyle = (p: IStyleProps) => ({
  ...S.btnText,
  color: p.color || Gs.colors.textColor,
});

export { btnStyle, btnBoxStyle, btnTextStyle, btnMargins };
