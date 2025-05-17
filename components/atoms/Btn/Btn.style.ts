import { StyleSheet } from 'react-native';

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
  btnBoxStylePressed: {
    opacity: 0.75,
  },
});

export { S };
