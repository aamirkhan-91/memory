import useBreakpoint from '@hooks/useBreakpoint';
import React, { FC, memo, useEffect, useState } from 'react';

import { Board, BottomBar, Header, InGameMenuDialog } from './components';

const Memory: FC = () => {
  const [showMenuDialog, setShowMenuDialog] = useState(false);
  const isSm = useBreakpoint('sm');

  useEffect(() => {
    if (!isSm && showMenuDialog) {
      setShowMenuDialog(false);
    }
  }, [isSm]);

  return (
    <>
      <InGameMenuDialog
        show={showMenuDialog}
        onClose={() => setShowMenuDialog(false)}
      />
      <div className='p-6 h-full flex flex-col justify-between'>
        <Header onClickMenu={() => setShowMenuDialog(true)} />
        <Board />
        <BottomBar />
      </div>
    </>
  );
};

export default memo(Memory);
