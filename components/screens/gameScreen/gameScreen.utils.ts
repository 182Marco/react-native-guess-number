import { IAlertParams } from '@/models';
import { texts } from '@/texts';
import * as Gs from '@/styles';

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

export { cheatAlertParams, ioniconsIconProps, pcLossAlertParams };
