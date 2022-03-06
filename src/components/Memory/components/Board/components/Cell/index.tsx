import { Typography } from '@core-components';
import { useStore } from '@src/store';
import clsx from 'clsx';
import React, { FC } from 'react';

import { icons } from './icons';

type CellProps = {
  value: number;
  revealed: boolean;
  viewing: boolean;
  onClick: () => void;
};

const Cell: FC<CellProps> = ({
  value,
  revealed = false,
  viewing = false,
  onClick,
}) => {
  const boardType = useStore((state) => state.boardType);
  const gridSize = useStore((state) => state.gridSize);

  const classes = [
    'flex-1 flex justify-center items-center rounded-full w-full h-full transition-colors duration-300 ease-in-out',
  ];

  if (!revealed && !viewing) {
    classes.push('bg-blue hover:bg-blue-hover');
  } else if (viewing && !revealed) {
    classes.push('bg-orange');
  } else if (revealed && !viewing) {
    classes.push('bg-blue-light');
  }

  let cellContent: number | JSX.Element = (
    <Typography variant={gridSize === 4 ? '4X4' : '6X6'} color='white'>
      {value}
    </Typography>
  );

  if (boardType === 'icons') {
    cellContent = <span className='text-white'>{icons[value - 1]}</span>;
  }

  return (
    <button className={clsx(classes)} onClick={onClick}>
      {(viewing || revealed) && cellContent}
    </button>
  );
};

export default Cell;
