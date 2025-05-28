import { ISetScreen } from '@/constants';
import * as R from 'react';

interface IGameScreenProps {
  setScreen: ISetScreen;
  setRounds: R.Dispatch<R.SetStateAction<number[]>>;
  rounds: number[];
  pickedNum: number;
}

enum DirEnum {
  UP = 'up',
  DOWN = 'down',
}

type IGameScreen = React.FC<IGameScreenProps>;
type IUseGameScreen = (p: IGameScreenProps) => Record<string, any>;
type IGetNewGuess = (dir: DirEnum.UP | DirEnum.DOWN) => void;
type ICheckCheating = (str: DirEnum.UP | DirEnum.DOWN) => boolean;
type IGetMinOrMax = (
  dir: DirEnum.UP | DirEnum.DOWN,
  previousValue: number,
  rounds: number[]
) => number;

export {
  IGameScreen,
  IUseGameScreen,
  IGetNewGuess,
  DirEnum,
  ICheckCheating,
  IGetMinOrMax,
};
