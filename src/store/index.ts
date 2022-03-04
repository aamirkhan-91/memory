import { BoardSlice } from '@src/types/Board';
import { ElapsedTimeSlice } from '@src/types/ElapsedTme';
import { GameSlice } from '@src/types/Game';
import { ScoreSlice } from '@src/types/Score';
import create, { SetState } from 'zustand';

import { createBoardSlice } from './board';
import { createElapsedTimeSlice } from './elapsedTme';
import { createGameSlice } from './game';
import { createScoreSlice } from './score';

export type StoreState = BoardSlice & ScoreSlice & ElapsedTimeSlice & GameSlice;

export type StoreSlice<T> = (set: SetState<StoreState>) => T;

export const useStore = create<StoreState>((set) => ({
  ...createBoardSlice(set),
  ...createScoreSlice(set),
  ...createElapsedTimeSlice(set),
  ...createGameSlice(set),
}));
