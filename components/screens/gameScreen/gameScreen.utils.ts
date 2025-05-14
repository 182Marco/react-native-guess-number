import { IAlertParams } from '@/models';
import { texts } from '@/texts';

const cheatAlertParams: IAlertParams = [
  texts.misLeadingCpuTitle,
  texts.misLeadingCpuText,
  [{ text: texts.misLeadingCpuCancelBtn, style: 'cancel' }],
];

const pcLossAlertParams: IAlertParams = [
  'HAI VINTO',
  'IL PC HA FATTO 3 TENTATIVI SENZA INDOVINARE',
  [{ text: 'OK', style: 'default' }],
];

export { cheatAlertParams, pcLossAlertParams };
