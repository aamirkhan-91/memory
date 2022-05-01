import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

type DialogProps = {
  show: boolean;
  dismissOnBackdropClick?: boolean;
  children: JSX.Element | JSX.Element[];
  onClickBackdrop?: () => void | null;
};

const OverlayStates: Variants = {
  hidden: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  visible: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const DialogStates: Variants = {
  hidden: {
    opacity: 0,
    x: '-50%',
    y: '-50%',
    scale: 0,
  },
  visible: {
    opacity: 1,
    x: '-50%',
    y: '-50%',
    scale: 1,
  },
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
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.div
            key='overlay'
            animate='visible'
            exit='hidden'
            initial='hidden'
            variants={OverlayStates}
            role='presentation'
            className='absolute top-0 left-0 h-full w-full z-[10]'
            onClick={handleBackdropClick}
          />
        )}
        {show && (
          <motion.div
            initial='hidden'
            key='dialog'
            animate='visible'
            exit='hidden'
            variants={DialogStates}
            transition={{
              type: 'tween',
            }}
            className='z-[11] w-[327px] p-6 rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>,
      container
    );
  }

  return null;
};

export default Dialog;
