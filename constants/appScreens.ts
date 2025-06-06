enum appScreens {
  START_GAME_SCREEN = 'START_GAME_SCREEN',
  GAME_SCREEN = 'GAME_SCREEN',
  GAME_OVER_SCREEN = 'GAME_OVER_SCREEN',
}

type ISetScreen = (str: appScreens) => void;

export { appScreens, ISetScreen };
