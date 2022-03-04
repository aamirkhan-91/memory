import { ElapsedTimeSlice } from '@src/types/ElapsedTme';

import { StoreSlice } from '.';

export const createElapsedTimeSlice: StoreSlice<ElapsedTimeSlice> = (set) => ({
  elapsedTime: 0,
  tickElapsedTime: () =>
    set((state) => ({
      elapsedTime: state.elapsedTime + 1,
    })),
  resetElapsedTime: () =>
    set(() => ({
      elapsedTime: 0,
    })),
});
