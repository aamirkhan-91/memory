import { ScoreSlice } from '@src/types/Score';

import { StoreSlice } from '.';

export const createScoreSlice: StoreSlice<ScoreSlice> = (set) => ({
  moves: 0,
  resetMoves: () =>
    set(() => ({
      moves: 0,
    })),
  tickMoves: () =>
    set((state) => ({
      moves: state.moves + 1,
    }))
});
