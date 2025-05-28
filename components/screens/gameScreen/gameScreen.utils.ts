import { IAlertParams } from '@/models';
import { texts } from '@/texts';
import * as Gs from '@/styles';
import * as Gu from '@/utils';
import { DirEnum, IGetMinOrMax } from './gameScreen.models';

const cheatAlertParams: IAlertParams = [
  texts.misLeadingCpuTitle,
  texts.misLeadingCpuText,
  [{ text: texts.misLeadingCpuCancelBtn, style: 'cancel' }],
];

const pcLossAlertParams: IAlertParams = [
  texts.pcLossAlertParamsTitle,
  texts.pcLossAlertParamsDescription,
  [{ text: texts.btnAlertOkText, style: 'default' }],
];

const ioniconsIconProps = {
  size: 24,
  color: Gs.colors.textColor,
};

const getMin: IGetMinOrMax = (dir, pv, rounds) => {
  if (rounds.length === 1 && dir === DirEnum.DOWN) return 0;
  if (rounds.length === 1 && dir === DirEnum.UP) return pv;
  const l = Gu.getLower([...rounds, pv]);

  return l;
};

const getMax: IGetMinOrMax = (dir, pv, rounds) => {
  if (rounds.length === 1 && dir === DirEnum.UP) return 100;
  if (rounds.length === 1 && dir === DirEnum.DOWN) return pv;
  return Gu.getHigher([...rounds, pv]);
};

export {
  cheatAlertParams,
  ioniconsIconProps,
  pcLossAlertParams,
  getMin,
  getMax,
};
