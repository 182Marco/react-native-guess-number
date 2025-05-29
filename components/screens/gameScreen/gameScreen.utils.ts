import { IAlertParams } from '@/models';
import { texts } from '@/texts';
import * as Gs from '@/styles';
import * as Gu from '@/utils';
import { DirEnum, IGetMinMaxParam } from './gameScreen.models';

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

const getMinMaxParam: IGetMinMaxParam = (dir, pv, rounds, picked) =>
  dir === DirEnum.UP
    ? {
        min: rounds.length > 1 ? Gu.lowerLimit(picked, rounds) : pv,
        max: Gu.upperLimit(picked, rounds),
        exclude: pv,
      }
    : {
        min: Gu.lowerLimit(picked, rounds),
        max: rounds.length > 1 ? Gu.upperLimit(picked, rounds) : pv,
        exclude: pv,
      };

export {
  cheatAlertParams,
  ioniconsIconProps,
  pcLossAlertParams,
  getMinMaxParam,
};
