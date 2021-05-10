import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import classes from './modal.module.scss'

const Modal = ({ open, title, onClose, children }) => {
  const [localOpen, setLocalOpen] = useState(false)

  useEffect(() => {
    if (open && !localOpen) setLocalOpen(true)
    if (!open && localOpen) setTimeout(() => setLocalOpen(false), 100)
  }, [open])

  return (
    <div
      className={clsx(classes.modalContainer, open && classes.open)}
      style={{ height: !localOpen && 0, display: !localOpen && 'none' }}
    >
      <div
        className={classes.backdrop}
        onClick={onClose}
      />
      <div className={classes.modal}>
        <div className={classes.header}>
          <span className={classes.title}>
            {title}
          </span>
        </div>
        <div className={classes.body}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
