import { ISetScreen } from '@/constants';

interface IGameOverScreenProps {
  setScreen: ISetScreen;
  setPickedNum: (n: number | null) => void;
  pickedNum: number | null;
  guessesNum: number;
}

type IUseGameOverScreen = (p: IGameOverScreenProps) => Record<string, any>;

type IGameOverScreen = React.FC<IGameOverScreenProps>;

export { IGameOverScreen, IUseGameOverScreen };
