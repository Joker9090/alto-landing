import clsx from 'clsx'
import React from 'react'
import classes from './button.module.scss'

const Button = ({ onClick, variant, children }) => {
  return (
    <button onClick={onClick} className={clsx(classes.button, classes[variant])}>
      {children}
    </button>
  )
}

export default Button
