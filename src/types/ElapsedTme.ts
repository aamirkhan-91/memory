export type ElapsedTimeSlice = {
  elapsedTime: number;
  tickElapsedTime: () => void;
  resetElapsedTime: () => void;
};
