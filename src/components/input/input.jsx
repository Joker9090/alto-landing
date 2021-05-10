import clsx from 'clsx'
import React from 'react'
import classes from './input.module.scss'

const Input = ({ value, onChange, label, error, errorMessage, onBlur, multiline, rows, type }) => {

  const handleChange = e => onChange(e.target.value, e)
  const handleBlur = e => onBlur(e.target.value, e)

  const commonProps = {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    className: clsx(classes.input, value.length > 0 && classes.inputPushed),
  }

  return (
    <div className={classes.inputRoot}>
      <div className={classes.inputContainer}>
        <span className={clsx(classes.label, value.length > 0 && classes.labelPushed)}>{label}</span>
        {multiline ? <textarea rows={rows || 8} {...commonProps} /> : <input type={type} {...commonProps} />}
      </div>
      <div
        className={clsx(classes.error, error && classes.showError)}
      >
        {errorMessage}
      </div>
    </div>
  )
}

export default Input
