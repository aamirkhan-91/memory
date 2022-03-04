import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

type DialogProps = {
  show: boolean;
  dismissOnBackdropClick?: boolean;
  children: JSX.Element | JSX.Element[];
  onClickBackdrop?: () => void | null;
};

const Dialog: FC<DialogProps> = ({
  show,
  dismissOnBackdropClick = false,
  children,
  onClickBackdrop = null,
}) => {
  const isBrowser = typeof window !== 'undefined';
  const container = isBrowser && document.querySelector('#modal-root');

  const handleBackdropClick = () => {
    if (dismissOnBackdropClick && onClickBackdrop) {
      onClickBackdrop();
    }
  };

  if (container) {
    return createPortal(
      <>
        <CSSTransition
          appear
          in={show}
          timeout={300}
          unmountOnExit
          classNames='overlay'
        >
          <div
            role='presentation'
            className='absolute top-0 left-0 h-full w-full z-[10]'
            onClick={handleBackdropClick}
          ></div>
        </CSSTransition>
        <CSSTransition
          appear
          in={show}
          timeout={300}
          unmountOnExit
          classNames='dialog-content'
        >
          <div className='z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2'>
            {children}
          </div>
        </CSSTransition>
      </>,
      container
    );
  }

  return null;
};

export default Dialog;
