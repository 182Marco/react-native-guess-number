import * as N from 'react-native';
import { IAlertFn } from './startGameScreen.models';
import { texts } from '@/texts';

const useStartGameScreenAlerts = () => {
  const NumGreaterThan99: IAlertFn = onPressBtnFn =>
    N.Alert.alert(texts.alertNumTitle, texts.alertNumToBigDescription, [
      {
        text: texts.btnAlertOkText,
        style: 'destructive',
        onPress: onPressBtnFn,
      },
    ]);

  return { NumGreaterThan99 };
};

export { useStartGameScreenAlerts };
