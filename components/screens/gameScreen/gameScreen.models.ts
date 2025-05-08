import { ISetScreen } from '@/constants';

interface IGameScreenProps {
  setScreen: ISetScreen;
  pickedNum: number;
}

type IGameScreen = React.FC<IGameScreenProps>;
type IUseGameScreen = (p: IGameScreenProps) => Record<string, any>;

export { IGameScreen, IUseGameScreen };
