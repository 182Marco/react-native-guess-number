interface IExample {
  text: string;
}

type IGetAlertMsg = (description: string, fn: () => void) => void;

type IAlertFn = (onPressBtnFn: () => void) => void;

export { IExample, IAlertFn, IGetAlertMsg };
