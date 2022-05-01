import { GameSettings, Memory } from '@components';
import PostGameDialog from '@src/components/PostGameDialog';
import { useStore } from '@src/store';
import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';

const IndexPage: FC = () => {
  const gameStarted = useStore((state) => state.gameStarted);
  const gameEnded = useStore((state) => state.gameEnded);

  return (
    <>
      <div id='modal-root' />
      <PostGameDialog show={gameEnded} />
      <AnimatePresence exitBeforeEnter initial={false}>
        {gameStarted ? (
          <Memory key='memory' />
        ) : (
          <GameSettings key='game-settings' />
        )}
      </AnimatePresence>
    </>
  );
};

export default IndexPage;
