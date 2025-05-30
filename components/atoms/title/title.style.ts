import * as N from 'react-native';
import * as U from '@/utils';
import * as Gs from '@/styles';

const isAndroid = N.Platform.OS === U.IPlatform?.android;

const S = N.StyleSheet.create({
  title: {
    fontWeight: isAndroid ? '400' : 'bold',
    fontSize: 24,
    color: Gs.colors.textColor,
    textAlign: 'center',
    borderWidth: N.Platform.select({ android: 2, ios: 0 }), // 2 ways
    borderColor: Gs.colors.textColor,
    padding: 12,
  },
});

export { S };
