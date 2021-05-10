import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './footer.module.scss'

const Footer = ({ onOpenLoginModal }) => (
  <footer>
    <div className={classes.footerItemsGrid}>
      <div className={classes.footerLogo}>
        <span className={clsx('icon-alto-logo', classes.logo)} />
        <span className={classes.tagline}>
          Fitness on Demand
        </span>
      </div>
      <ul className={classes.footerLinks}>
        <li>
          <Link to='/registration'>
            Become a Trainer
          </Link>
        </li>
        <li onClick={onOpenLoginModal}>Trainers/Gym login</li>
        <li>
          <Link to='/faq'>
            FAQ
          </Link>
        </li>
      </ul>
      <div className={classes.appStoreContainer}>
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
      </div>
    </div>
    <div className={classes.footerLegal}>
      <ul>
        <li style={{ pointerEvents: 'none' }}>©2020 Alto Fitness, LLC.</li>
        <li>Terms of Use</li>
        <li>
          <Link to='/privacy-policy'>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
