type IGetAlertMsg = (description: string, fn: () => void) => void;

type IAlertFn = (onPressBtnFn: () => void) => void;

export { IAlertFn, IGetAlertMsg };
