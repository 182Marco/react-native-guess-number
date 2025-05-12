import { IAlertParams } from '@/models';
import { texts } from '@/texts';

const cheatAlertParams: IAlertParams = [
  texts.misLeadingCpuTitle,
  texts.misLeadingCpuText,
  [{ text: texts.misLeadingCpuCancelBtn, style: 'cancel' }],
];

const pcWinAlertParams: IAlertParams = [
  'PC HA INDOVINATO',
  'IL PC HA VINTO',
  [{ text: 'OK', style: 'cancel' }],
];

const pcLossAlertParams: IAlertParams = [
  'HAI VINTO',
  'IL PC HA FATTO 3 TENTATIVI SENZA INDOVINARE',
  [{ text: 'OK', style: 'default' }],
];

export { cheatAlertParams, pcWinAlertParams, pcLossAlertParams };
