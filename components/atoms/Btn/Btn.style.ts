import { StyleSheet } from 'react-native';
import * as Gs from '@/styles';

const S = StyleSheet.create({
  margins: {
    margin: 0,
  },
  pressed: {
    opacity: 0.75,
  },
  wrapper: {
    overflow: 'hidden',
    backgroundColor: Gs.colors.primaryBtn,
    borderRadius: 50,
  },
  btnBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 700,
    color: Gs.colors.primary,
  },
  btnBoxStylePressed: {
    opacity: 0.75,
  },
});

export { S };
