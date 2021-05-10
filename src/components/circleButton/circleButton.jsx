import clsx from 'clsx'
import React from 'react'
import classes from './circleButton.module.scss'

const CircleButton = ({ onClick, variant, iconName }) => {
  return (
    <button onClick={onClick} className={clsx(classes.circleButton, classes[variant])}>
      <span className={clsx(iconName, classes.icon)} />
    </button>
  )
}

export default CircleButton
