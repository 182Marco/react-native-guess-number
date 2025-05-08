import { ISetScreen } from '@/constants';

interface IStartGameScreenProps {
  setPickedNum: (n: number) => void;
}

type IStartGameScreen = React.FC<IStartGameScreenProps>;

type IUseStartGameScreen = (p: IStartGameScreenProps) => Record<string, any>;

type IGetAlertMsg = (description: string, fn: () => void) => void;

type IAlertFn = (onPressBtnFn: () => void) => void;

export { IAlertFn, IGetAlertMsg, IStartGameScreen, IUseStartGameScreen };
