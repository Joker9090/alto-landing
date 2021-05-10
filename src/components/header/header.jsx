import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import classes from './header.module.scss'
import Button from '../button/button.jsx'
import MobileDrawer from '../mobileDrawer/mobileDrawer.jsx'
import { useWindowSize } from '../../utils/hooks'
import BottomBar from '../bottomBar/bottomBar.jsx'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Header = ({ onOpenLoginModal }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  
  const { width } = useWindowSize()

  const handleDrawerOpen = () => setDrawerOpen(true)
  const handleDrawerClose = () => setDrawerOpen(false)

  useEffect(() => {
    if (width > 576) handleDrawerClose()
  }, [width])


  return (
    <header className={classes.header}>
      <Link to='/'>
        <span className={clsx('icon-alto-logo', classes.logo)} />
      </Link>
      <div className={classes.downloads}>
        <AppDownload />
      </div>
      <div className={classes.desktopButtonContainer}>
        <Button
          variant='text'
          onClick={onOpenLoginModal}
        >
          Trainers/Gym login
        </Button>
        <Link to='/registration'>
          <Button>
            Become an Alto Trainer
          </Button>
        </Link>
      </div>
      <div className={classes.mobileButtonContainer}>
        <div className={classes.mobileButtonWrapper} onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}>
          <span
            className={clsx('icon-filter', classes.mobileButton, classes.menuButton, !drawerOpen ? classes.show : classes.hide)}
          /> 
          <span
            className={clsx('icon-clear', classes.mobileButton, classes.closeIcon, drawerOpen ? classes.show : classes.hide)}
          />
        </div>
      </div>
      {width < 768 && <BottomBar />}
      <MobileDrawer open={drawerOpen} onOpenLoginModal={onOpenLoginModal} />
    </header>
  )
}

export default Header

export const AppDownload = () => (
  <>
    <span className={classes.freeDownload}>FREE DOWNLOAD</span>
    <a
      href='https://apps.apple.com/ar/app/alto-personal-trainer-app/id1439829365'
      target='_blank'
      rel='noreferrer noopener'
    >
      <span className={clsx('icon-apple', classes.appStore)}></span>
    </a>
    <a
      href='https://play.google.com/store/apps/details?id=com.altofitness&hl=en_US&gl=US'
      target='_blank'
      rel='noreferrer noopener'
    >
      <span className={clsx('icon-android', classes.appStore)}></span>
    </a>
  </>
)