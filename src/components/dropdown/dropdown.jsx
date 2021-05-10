import clsx from 'clsx';
import React, { useRef } from 'react';
import { useOutsideClick } from '../../utils/hooks';
import classes from './dropdown.module.scss'

const Dropdown = ({
  menuOptions,
  open,
  setOpen,
  setClose,
  selected,
  setSelected,
  placeholder,
  disabled
}) => {
  const getSelected = () => {
    const option = menuOptions.find(opt => opt.value === selected);

    return option ? option.label : placeholder || 'Select';
  };

  const handleOpen = () => (open ? setClose() : setOpen());

  const handleSelect = (value) => {
    setSelected(value);
    handleOpen();
  };

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (open) setClose();
  });

  return (
    <>
      <div className={classes.root} style={{ opacity: disabled ? 0.7 : 1, pointerEvents: disabled ? 'none' : 'initial' }}>
        <div className={clsx(classes.main)} onClick={handleOpen}>
          <span className={classes.selectedLabel}>{getSelected()}</span>
          <span className={clsx('icon-expand-more', classes.arrowIcon)} />
        </div>
        <ul
          className={classes.menu}
          ref={ref}
          style={{
            maxHeight: open ? menuOptions.slice(0, 7).length * 44 : 0,
            opacity: open ? 1 : 0
          }}
        >
          {menuOptions.map(opt => (
            <li
              key={opt.value}
              className={clsx(
                classes.menuItem,
                opt.value === selected ? classes.selectedMenuItem : '',
              )}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
              {opt.value === selected && <span className={clsx('icon-check', classes.checkIcon)} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
