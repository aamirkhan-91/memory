export const getFormattedElapsedTime = (elapsedTime: number): string => {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};
