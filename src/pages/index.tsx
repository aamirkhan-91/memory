import { GameSettings, Memory } from '@components';
import PostGameDialog from '@src/components/PostGameDialog';
import { useStore } from '@src/store';
import React, { FC } from 'react';

const IndexPage: FC = () => {
  const gameStarted = useStore((state) => state.gameStarted);
  const gameEnded = useStore((state) => state.gameEnded);

  return (
    <>
      <div id='modal-root' />
      {!gameStarted && <GameSettings />}
      <PostGameDialog show={gameEnded} />
      {gameStarted && <Memory />}
    </>
  );
};

export default IndexPage;
