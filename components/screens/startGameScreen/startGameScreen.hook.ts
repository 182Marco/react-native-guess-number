import * as R from 'react';
import { texts } from '../../../texts';

const usestartGameScreen = () => {
  const [numberValue, setNumberValue] = R.useState('');

  return { numberValue, setNumberValue };
};

export { usestartGameScreen };
