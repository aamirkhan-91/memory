import { Button, Dialog, Typography } from '@core-components';
import { useStore } from '@src/store';
import { getFormattedElapsedTime } from '@src/utils';
import React, { FC } from 'react';

type Props = {
  show: boolean;
};

const PostGameDialog: FC<Props> = ({ show }) => {
  const elapsedTime = useStore((state) => state.elapsedTime);
  const moves = useStore((state) => state.moves);

  const setGameStarted = useStore((state) => state.setGameStarted);
  const setGameEnded = useStore((state) => state.setGameEnded);
  const resetElapsedTime = useStore((state) => state.resetElapsedTime);
  const resetMoves = useStore((state) => state.resetMoves);
  const initializeBoard = useStore((state) => state.initializeBoard);

  const restartGame = () => {
    resetMoves();
    resetElapsedTime();
    initializeBoard();
    setGameEnded(false);
  };

  const setupNewGame = () => {
    resetMoves();
    resetElapsedTime();
    setGameEnded(false);
    setGameStarted(false);
  };

  return (
    <Dialog show={show}>
      <div className='z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Typography variant='H2' color='dark' className='text-center'>
          You did it!
        </Typography>
        <Typography variant='Body' color='grey-light' className='text-center'>
          Game over! Here's how got on...
        </Typography>
        <div className='mt-8 space-y-2'>
          <div className='bg-grey flex items-center flex-1 py-2 px-4 justify-between rounded-[5px]'>
            <Typography color='grey-light'>Elapsed Time</Typography>
            <Typography variant='H3' color='grey-dark'>
              {getFormattedElapsedTime(elapsedTime)}
            </Typography>
          </div>
          <div className='bg-grey flex items-center flex-1 py-2 px-4 justify-between rounded-[5px]'>
            <Typography color='grey-light'>Moves</Typography>
            <Typography variant='H3' color='grey-dark'>
              {moves}
            </Typography>
          </div>
        </div>
        <div className='mt-6 space-y-3'>
          <Button fullWidth variant='primary' onClick={restartGame}>
            Restart
          </Button>
          <Button fullWidth variant='secondary' onClick={setupNewGame}>
            Setup New Game
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default PostGameDialog;
