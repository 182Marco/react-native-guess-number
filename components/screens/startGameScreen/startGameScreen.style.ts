import { StyleSheet } from 'react-native';
import * as Gs from '@/styles';

const S = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  btnRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  inputExplain: {
    color: Gs.colors.errorColor,
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
  },
  inputBox: {
    marginTop: 27,
    paddingVertical: 22,
    paddingHorizontal: 60,
    marginHorizontal: 24,
    backgroundColor: Gs.colors.secondary,
    borderRadius: 8,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    //ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    color: Gs.colors.primary,
    marginBottom: 12,
    fontWeight: 'bold',
    borderBottomColor: Gs.colors.primary,
    borderBottomWidth: 2,
  },
});

export { S };
