import { ISetScreen } from '@/constants';
import * as R from 'react';

interface IGameScreenProps {
  setScreen: ISetScreen;
  setRound: R.Dispatch<R.SetStateAction<number>>;
  round: number;
  pickedNum: number;
}

enum DirEnum {
  UP = 'up',
  DOWN = 'down',
}

type IGameScreen = React.FC<IGameScreenProps>;
type IUseGameScreen = (p: IGameScreenProps) => Record<string, any>;
type IGetNewGuess = (str: DirEnum.UP | DirEnum.DOWN) => void;
type ICheckCheating = (str: DirEnum.UP | DirEnum.DOWN) => boolean;

export { IGameScreen, IUseGameScreen, IGetNewGuess, DirEnum, ICheckCheating };
