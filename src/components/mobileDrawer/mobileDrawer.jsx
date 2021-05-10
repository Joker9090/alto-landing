import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import classes from './mobileDrawer.module.scss'
import CircleButton from '../circleButton/circleButton.jsx'
import { Link } from 'react-router-dom'

const MobileDrawer = ({ open, onOpenLoginModal }) => {
  const [localOpen, setLocalOpen] = useState(false)

  useEffect(() => {
    if (open && !localOpen) setLocalOpen(true)
    if (!open && localOpen) setTimeout(() => setLocalOpen(false), 100)
  }, [open])

  return (
    <div
      className={clsx(classes.mobileDrawer, open && classes.open)}
      style={{ height: !localOpen && 0 }}
    >
      <div className={classes.content}>
        <span className={classes.link} onClick={onOpenLoginModal}>
          Trainers/Gym Login
        </span>
        <span className={classes.link}>
          <Link to='/registration'>
            Become an Alto Trainer
          </Link>  
        </span>
        <span className={classes.freeDownload}>FREE DOWNLOAD</span>
        <AppStores />
        <div className={classes.socialMedia}>
          <SocialMediaButtons />
        </div>
      </div>
      <div className={classes.waves} />
    </div>
  )
}

export default MobileDrawer

export const SocialMediaButtons = () => (
  <>
    <CircleButton iconName='icon-facebook' />
    <CircleButton iconName='icon-instagram' />
    <CircleButton iconName='icon-youtube' />
    <CircleButton iconName='icon-twitter' />
  </>
)

export const AppStores = () => (
  <>
    <a
      href='https://apps.apple.com/ar/app/alto-personal-trainer-app/id1439829365'
      target='_blank'
      rel='noreferrer noopener'
    >
      <img className={classes.appStore} src='/img/appstore.png' alt='Download on the App Store' />
    </a>
    <a
      href='https://play.google.com/store/apps/details?id=com.altofitness&hl=en_US&gl=US'
      target='_blank'
      rel='noreferrer noopener'
    >
      <img className={classes.appStore} src='/img/playstore.png' alt='Get it on Google Play' />
    </a>
  </>
)