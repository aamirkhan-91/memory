export type GameSlice = {
  gameStarted: boolean;
  gameEnded: boolean;
  setGameStarted: (gameStarted: boolean) => void;
  setGameEnded: (gameEnded: boolean) => void;
};
