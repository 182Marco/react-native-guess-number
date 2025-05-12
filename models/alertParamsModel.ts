type IAlertParams = [
  string,
  string,
  { text: string; style: 'cancel' | 'default' | 'destructive' }[]
];

export { IAlertParams };
