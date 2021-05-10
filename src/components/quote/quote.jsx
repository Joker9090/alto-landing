import clsx from 'clsx'
import React from 'react'
import { getRandomNumber } from '../../utils/CoolFunctions'
import classes from './quote.module.scss'

const Quote = ({ quote, imageUrl, byline }) => (
  <div className={classes.quoteContainer}>
    <div className={classes.wavesContainer}>
      <img
        className={classes.waves}
        src='/img/waves-high-2x-transparent.png'
        alt=''
        style={{
          top: getRandomNumber(-30, 50),
          left: -getRandomNumber(230, 560),
        }}
      />
    </div>
    <div className={classes.photo}>
      {imageUrl ? (
        <img src={imageUrl} alt={byline} />
      ) : (
        <span className={clsx('icon-user', classes.icon)} />
      )}
    </div>
    <span className={classes.quote}>{quote}</span>
    <span className={classes.byline}>{byline}</span>
  </div>
)

export default Quote
