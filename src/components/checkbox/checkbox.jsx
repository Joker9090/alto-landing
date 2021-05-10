import clsx from 'clsx';
import React from 'react';
import classes from './checkbox.module.scss';

const Checkbox = ({ checked, disabled, label, setChecked, iconName }) => {
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={classes.checkboxContainer}>
      <input type="checkbox" className={classes.checkbox} checked={checked} disabled={disabled} onChange={handleChange} />
      <span className={classes.label}>
        <label>
          <span className={clsx(iconName, classes.labelIcon)} />
          <span className={classes.labelText}>
            {label}
          </span>
        </label>
      </span>
    </label>
  );
};

export default Checkbox;
