import * as R from 'react';

const usestartGameScreen = () => {
  const [numberValue, setNumberValue] = R.useState('');

  return { numberValue, setNumberValue };
};

export { usestartGameScreen };
