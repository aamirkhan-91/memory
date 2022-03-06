import { Button, Typography } from '@core-components';
import { useStore } from '@src/store';
import React, { FC } from 'react';

const GameSetup: FC = () => {
  const gridSize = useStore((state) => state.gridSize);
  const boardType = useStore((state) => state.boardType);

  const setBoardType = useStore((state) => state.setBoardType);
  const setGridSize = useStore((state) => state.setGridSize);

  const startGame = useStore((state) => state.setGameStarted);

  return (
    <div
      role='presentation'
      className='absolute top-0 left-0 h-full w-full bg-dark'
    >
      <Typography
        className='absolute left-1/2 transform -translate-x-1/2 top-[20%]'
        variant='H2'
        color='white'
      >
        memory
      </Typography>
      <div className='z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div>
          <Typography variant='Body' color='grey-dark'>
            Select Theme
          </Typography>
          <div className='flex mt-3 space-x-2'>
            <Button
              fullWidth
              variant='menu'
              isActive={boardType === 'numbers'}
              onClick={() => setBoardType('numbers')}
            >
              Numbers
            </Button>
            <Button
              fullWidth
              variant='menu'
              isActive={boardType === 'icons'}
              onClick={() => setBoardType('icons')}
            >
              Icons
            </Button>
          </div>
        </div>
        <div className='mt-6'>
          <Typography variant='Body' color='grey-dark'>
            Select Grid Size
          </Typography>
          <div className='flex mt-3 space-x-2'>
            <Button
              fullWidth
              variant='menu'
              isActive={gridSize === 4}
              onClick={() => setGridSize(4)}
            >
              4x4
            </Button>
            <Button
              fullWidth
              variant='menu'
              isActive={gridSize === 6}
              onClick={() => setGridSize(6)}
            >
              6x6
            </Button>
          </div>
        </div>
        <Button
          className='mt-8'
          fullWidth
          variant='primary'
          onClick={() => startGame(true)}
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default GameSetup;
