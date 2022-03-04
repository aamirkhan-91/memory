import React, { FC } from 'react';

import { Moves, Timer } from './components';

const BottomBar: FC = () => {
  return (
    <div className='flex justify-between space-x-4'>
      <Timer />
      <Moves />
    </div>
  );
};

export default BottomBar;
