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
});

export { S };
