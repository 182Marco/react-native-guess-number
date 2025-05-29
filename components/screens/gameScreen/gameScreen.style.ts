import { StyleSheet, useWindowDimensions } from 'react-native';

const useStyles = () => {
  const { height } = useWindowDimensions();
  const IsLandskape = height < 380;

  return StyleSheet.create({
    screen: {
      flex: 1,
      paddingVertical: IsLandskape ? 25 : 60,
      paddingHorizontal: 20,
    },
    plusMinusBtnsBox: {
      marginVertical: 20,
      flexDirection: 'row',
      gap: 30,
      justifyContent: 'center',
    },
    displayNumber: {
      paddingVertical: IsLandskape ? 2 : undefined,
      marginBottom: IsLandskape ? 8 : undefined,
    },
    title: {
      color: 'black',
      borderColor: 'black',
    },
  });
};

export { useStyles };
