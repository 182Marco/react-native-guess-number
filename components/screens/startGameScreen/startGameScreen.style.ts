import { StyleSheet } from 'react-native';
import * as N from 'react-native';
import * as Gs from '@/styles';

const useStyles = () => {
  const { height } = N.useWindowDimensions();
  const IsLandskape = height < 380;

  return StyleSheet.create({
    scrollView: { flex: 1 },
    screen: {
      flex: 1,
      marginTop: IsLandskape ? 22 : 60,
      alignItems: 'center',
    },
    btnRow: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
    },
    inputBox: {
      marginTop: IsLandskape ? 12 : 27,
      paddingVertical: IsLandskape ? 8 : 22,
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
    inputExplain: {
      color: Gs.colors.errorColor,
      fontWeight: 700,
      fontSize: 24,
      textAlign: 'center',
      width: '100%',
    },
    numberInput: {
      width: 50,
      textAlign: 'center',
      fontSize: 32,
      color: Gs.colors.primary,
      marginBottom: IsLandskape ? 4 : 12,
      fontWeight: 'bold',
      borderBottomColor: Gs.colors.primary,
      borderBottomWidth: 2,
    },
  });
};

export { useStyles };
