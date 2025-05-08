import * as R from 'react';
import { useStartGameScreenAlerts } from './startGameScreen.alerts';
import { IUseStartGameScreen } from './startGameScreen.models';
import { appScreens } from '@/constants';

const useStartGameScreen: IUseStartGameScreen = p => {
  const [numberValue, setNumberValue] = R.useState('');
  const reset = () => setNumberValue('');

  const handelConfirm = (n: string) => {
    const alert = useStartGameScreenAlerts();
    const num = parseInt(n);
    if (isNaN(num)) {
      alert.alertIsNaN(reset);
    }
    if (num < 1) {
      alert.NumLessThan1(reset);
      return;
    }
    if (num > 99) {
      alert.NumGreaterThan99(reset);
      return;
    }
    p.setPickedNum(num);
  };

  return { numberValue, setNumberValue, reset, handelConfirm };
};

export { useStartGameScreen };
