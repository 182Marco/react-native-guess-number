import * as Gs from '@/styles';
import * as N from 'react-native';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  const { height } = N.useWindowDimensions();
  const IsLandskape = height < 380;
  const imageSize = '100%';
  const imageWrapSize = IsLandskape ? 100 : 230;
  const borderRadius = imageWrapSize / 2;
  const screenMainColor = Gs.colors.inputBackground;

  return StyleSheet.create({
    screenWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    title: {
      fontSize: 30,
      color: screenMainColor,
      borderColor: screenMainColor,
      width: '80%',
    },
    imgWrap: {
      width: imageWrapSize,
      height: imageWrapSize,
      borderRadius: borderRadius,
      borderWidth: 3,
      borderColor: screenMainColor,
      overflow: 'hidden',
      marginVertical: IsLandskape ? 6 : 30,
    },
    img: {
      borderRadius: borderRadius,
      width: imageSize,
      height: imageSize,
    },
    summary: {
      marginBottom: 10,
    },
  });
};

export { useStyles };
