import { ISetScreen } from '@/constants';
import * as R from 'react';

interface IGameOverScreenProps {
  setScreen: ISetScreen;
  setPickedNum: (n: number | null) => void;
  setRounds: R.Dispatch<R.SetStateAction<number[]>>;
  rounds: number[];
  pickedNum: number | null;
}

type IUseGameOverScreen = (p: IGameOverScreenProps) => Record<string, any>;

type IGameOverScreen = React.FC<IGameOverScreenProps>;

export { IGameOverScreen, IUseGameOverScreen };
