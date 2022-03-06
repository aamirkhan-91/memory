import { Typography } from '@core-components';
import { useStore } from '@src/store';
import { getFormattedElapsedTime } from '@src/utils';
import React, { FC, useCallback, useEffect, useRef } from 'react';

const Timer: FC = () => {
  const elapsedTime = useStore((state) => state.elapsedTime);
  const gameStarted = useStore((state) => state.gameStarted);
  const gameEnded = useStore((state) => state.gameEnded);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const tickElapsedTime = useStore(
    useCallback((state) => state.tickElapsedTime, [])
  );

  useEffect(() => {
    if (gameStarted && !gameEnded) {
      intervalRef.current = setInterval(() => {
        tickElapsedTime();
      }, 1000);
    } else if (gameEnded && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [gameStarted, gameEnded, tickElapsedTime]);

  return (
    <div className='bg-grey flex flex-col items-center flex-1 p-2 rounded-[5px]'>
      <Typography color='grey-dark'>Time</Typography>
      <Typography variant='H3' className='mt-2' color='grey-light'>
        {getFormattedElapsedTime(elapsedTime)}
      </Typography>
    </div>
  );
};

export default Timer;
