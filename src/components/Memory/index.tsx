import useBreakpoint from '@hooks/useBreakpoint';
import { useStore } from '@src/store';
import { motion } from 'framer-motion';
import React, { FC, memo, useEffect, useState } from 'react';

import { Board, BottomBar, Header, InGameMenuDialog } from './components';

const Memory: FC = () => {
  const [showMenuDialog, setShowMenuDialog] = useState(false);
  const isSm = useBreakpoint('sm');

  const gameStarted = useStore((state) => state.gameStarted);

  useEffect(() => {
    if (!isSm && showMenuDialog && !gameStarted) {
      setShowMenuDialog(false);
    }
  }, [isSm, gameStarted]);

  return (
    <>
      <InGameMenuDialog
        show={showMenuDialog}
        onClose={() => setShowMenuDialog(false)}
      />
      <motion.div
        className='p-6 h-full flex flex-col justify-between'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <Header onClickMenu={() => setShowMenuDialog(true)} />
        <Board />
        <BottomBar />
      </motion.div>
    </>
  );
};

export default memo(Memory);
