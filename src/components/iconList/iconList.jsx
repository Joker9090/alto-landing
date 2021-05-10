import clsx from 'clsx'
import React from 'react'
import classes from './iconList.module.scss'

const IconList = ({ iconName, title, listItems }) => (
  <div className={classes.iconList}>
    <span className={clsx(iconName, classes.icon)} />
    <h2>{title}</h2>
    <span className={classes.line} />
    <span className={classes.line} />
    {listItems.map(listItem => (
      <>
        <span className={clsx('icon-done', classes.check)} />
        <span className={classes.listItem}>{listItem}</span>
      </>
    ))}
  </div>
)

export default IconList
