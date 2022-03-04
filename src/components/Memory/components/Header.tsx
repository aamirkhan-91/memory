import { Button, Typography } from '@core-components';
import { useStore } from '@src/store';
import React, { FC } from 'react';

type Props = {
  onClickMenu: () => void;
};

const Header: FC<Props> = ({ onClickMenu }) => {
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
    <div className='flex justify-between items-center'>
      <Typography className='flex-1' variant='H2' color='dark'>
        memory
      </Typography>
      <div className='flex-1 hidden sm:flex space-x-4'>
        <Button fullWidth variant='primary' onClick={restartGame}>
          Restart
        </Button>
        <Button fullWidth variant='secondary' onClick={setupNewGame}>
          New Game
        </Button>
      </div>
      <Button className='sm:hidden' variant='primary' onClick={onClickMenu}>
        Menu
      </Button>
    </div>
  );
};

export default Header;
