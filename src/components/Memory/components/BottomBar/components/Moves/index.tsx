import { Typography } from '@core-components';
import { useStore } from '@src/store';
import React, { FC } from 'react';

const Moves: FC = () => {
  const moves = useStore((state) => state.moves);

  return (
    <div className='bg-grey flex flex-col items-center flex-1 p-2 rounded-[5px]'>
      <Typography color='grey-dark'>Moves</Typography>
      <Typography variant='H3' className='mt-2' color='grey-light'>
        {moves}
      </Typography>
    </div>
  );
};

export default Moves;
