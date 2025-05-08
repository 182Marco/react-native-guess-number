import * as N from 'react-native';
import { IAlertFn, IGetAlertMsg } from './startGameScreen.models';
import { texts } from '@/texts';

const useStartGameScreenAlerts = () => {
  //
  const getAlertMsg: IGetAlertMsg = (description, onPressBtnFn) =>
    N.Alert.alert(texts.alertNumTitle, description, [
      {
        text: texts.btnAlertOkText,
        style: 'destructive',
        onPress: onPressBtnFn,
      },
    ]);

  const NumGreaterThan99: IAlertFn = onPressBtnFn =>
    getAlertMsg(texts.alertNumToBigDescription, onPressBtnFn);

  const NumLessThan1: IAlertFn = onPressBtnFn =>
    getAlertMsg(texts.alertNumLessThan1Description, onPressBtnFn);

  const alertIsNaN: IAlertFn = onPressBtnFn =>
    getAlertMsg(texts.alertNumIsNaNDescription, onPressBtnFn);

  return { NumGreaterThan99, NumLessThan1, alertIsNaN };
};

export { useStartGameScreenAlerts };
