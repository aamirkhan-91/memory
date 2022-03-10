import React, { FC } from 'react';

import { Moves, Timer } from './components';

const BottomBar: FC = () => {
  return (
    <div className='flex justify-between space-x-4 w-full md:max-w-[550px] mx-auto'>
      <Timer />
      <Moves />
    </div>
  );
};

export default BottomBar;
