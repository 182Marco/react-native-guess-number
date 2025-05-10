import { ISetScreen } from '@/constants';

interface IGameScreenProps {
  setScreen: ISetScreen;
  pickedNum: number;
}

enum DirEnum {
  UP = 'up',
  DOWN = 'down',
}

type IGameScreen = React.FC<IGameScreenProps>;
type IUseGameScreen = (p: IGameScreenProps) => Record<string, any>;
type IGetNewGuess = (str: DirEnum.UP | DirEnum.DOWN) => void;

export { IGameScreen, IUseGameScreen, IGetNewGuess, DirEnum };
