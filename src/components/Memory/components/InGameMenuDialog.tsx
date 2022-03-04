import { Button, Dialog } from '@core-components';
import { useStore } from '@src/store';
import React, { FC } from 'react';

type Props = {
  show: boolean;
  onClose: () => void;
};

const InGameMenuDialog: FC<Props> = ({ show, onClose }) => {
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
    <Dialog dismissOnBackdropClick show={show} onClickBackdrop={onClose}>
      <div className='z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='space-y-4'>
          <Button fullWidth variant='primary' onClick={restartGame}>
            Restart
          </Button>
          <Button fullWidth variant='secondary' onClick={setupNewGame}>
            Setup New Game
          </Button>
          <Button fullWidth variant='secondary' onClick={onClose}>
            Resume Game
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default InGameMenuDialog;
