import clsx from 'clsx';
import React, { FC } from 'react';

type CommonProps = {
  children: string;
  fullWidth?: boolean;
  variant: 'primary' | 'secondary' | 'menu';
  size?: 'small' | 'large';
  className?: string;
  onClick: () => void;
};

type MenuButtonProps =
  | { variant: 'menu'; isActive?: boolean }
  | { variant: 'primary' | 'secondary'; isActive?: never };

type ButtonProps = CommonProps & MenuButtonProps;

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  isActive,
  className = '',
  onClick,
}) => {
  let classes: string[] = [
    'py-3',
    'px-4',
    'transition-colors',
    'ease-in-out',
    'duration-150',
    'rounded-full',
    'text-white',
  ];

  if (fullWidth) {
    classes.push('w-full');
  }

  if (variant === 'primary') {
    classes = classes.concat('bg-orange hover:bg-orange-hover');
  } else if (variant === 'secondary') {
    classes = classes.concat('bg-grey hover:bg-blue-hover text-grey-dark');
  } else if (variant === 'menu') {
    if (isActive) {
      classes.push('bg-grey-dark');
    } else {
      classes = classes.concat('bg-blue-light');
    }
  }

  return (
    <button className={clsx(classes, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
