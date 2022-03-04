import clsx from 'clsx';
import React, { FC } from 'react';

type TypographyProps = {
  variant?: 'H1' | 'H2' | 'H3' | 'Body' | '6X6' | '4X4';
  color?: 'white' | 'grey-light' | 'grey-dark' | 'dark';
  className?: string;
  children: string | number;
};

const Typography: FC<TypographyProps> = ({
  variant = 'Body',
  color = 'white',
  className = '',
  children,
}) => {
  let classes: string[] = ['font-sans'].concat(className);

  switch (color) {
    case 'white':
      classes = classes.concat('text-white');
      break;

    case 'dark':
      classes = classes.concat('text-dark');
      break;

    case 'grey-light':
      classes = classes.concat('text-grey-light');
      break;

    case 'grey-dark':
      classes = classes.concat('text-grey-dark');
      break;

    default:
      break;
  }

  if (variant === 'H1') {
    return <h1 className={clsx(classes, 'text-H1')}>{children}</h1>;
  }

  if (variant === 'H2') {
    return <h2 className={clsx(classes, 'text-H2')}>{children}</h2>;
  }

  if (variant === 'H3') {
    return <h2 className={clsx(classes, 'text-H3')}>{children}</h2>;
  }

  if (variant === '4X4') {
    return (
      <p className={clsx(classes, 'text-4X4-mobile tablet:text-4X4')}>
        {children}
      </p>
    );
  }

  if (variant === '6X6') {
    return (
      <p className={clsx(classes, 'text-6X6-mobile tablet:text-6X6')}>
        {children}
      </p>
    );
  }

  return <p className={clsx(classes, 'text-Body')}>{children}</p>;
};

export default Typography;
