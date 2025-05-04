import { StyleSheet } from 'react-native';
import * as globalS from '../../../styles';

const S = StyleSheet.create({
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputBox: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: globalS.colors.background,
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
    borderBottomColor: globalS.colors.secondary,
    borderBottomWidth: 2,
    color: globalS.colors.secondary,
    marginVertical: 8,
    fontWeight: 'bold',
  },
});

export { S };
