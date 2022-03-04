import { Typography } from '@core-components';
import clsx from 'clsx';
import React, { FC } from 'react';

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

  return (
    <button className={clsx(classes)} onClick={onClick}>
      {(viewing || revealed) && (
        <Typography variant='4X4' color='white'>
          {value}
        </Typography>
      )}
    </button>
  );
};

export default Cell;
