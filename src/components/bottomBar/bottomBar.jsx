import clsx from 'clsx'
import React from 'react'
import { AppDownload } from '../header/header.jsx'
import classes from './bottomBar.module.scss'

const BottomBar = () => {
  return (
    <div className={classes.bottomBar}>
      <AppDownload />
    </div>
  )
}

export default BottomBar
