import { GameSlice } from '@src/types/Game';

import { StoreSlice } from '.';

export const createGameSlice: StoreSlice<GameSlice> = (set) => ({
  gameStarted: false,
  gameEnded: false,
  setGameStarted: (gameStarted) =>
    set(() => ({
      gameStarted,
    })),
  setGameEnded: (gameEnded: boolean) =>
    set(() => ({
      gameEnded,
    })),
});
