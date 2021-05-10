import clsx from 'clsx'
import React from 'react'
import classes from './buttonGroup.module.scss'

const ButtonGroup = ({ selectedId, options, onSelect }) => {
  return (
    <div className={classes.buttonGroup} style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}>
      {options.map(option => (
        <div onClick={() => onSelect(option.id)} key={option.id} className={clsx(classes.option, selectedId === option.id && classes.selectedOption)}>
          {option.label}
        </div>
      ))}
    </div>
  )
}

export default ButtonGroup