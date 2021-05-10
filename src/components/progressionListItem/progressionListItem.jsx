import clsx from 'clsx';
import React from 'react';
import classes from './progressionListItem.module.scss'
import Fade from 'react-reveal/Fade';

const ProgressionListItem = ({ title, description, children, hideLine, order }) => (
  <div className={classes.progressionListItem}>
    <div className={classes.checkmarkContainer}>
      <Fade top distance="50px" duration={600} delay={200 * order}>
        <span className={clsx('icon-done', classes.checkmark)} />
      </Fade>
      <Fade top distance="50px" duration={600} delay={350 * order}>
        {!hideLine ? <span className={classes.line} /> : <div/>}
      </Fade>
    </div>
    <Fade top distance="50px" duration={600} delay={200 * order}>
      <span className='caption-title' style={{ lineHeight: 1 }}>
        {title}
      </span>
    </Fade>
    <Fade top distance="50px" duration={600} delay={350 * order}>
      {!hideLine ? <span className={classes.line} /> : <div/>}
    </Fade>
    <Fade top distance="50px" duration={600} delay={250 * order}>
      <div className={classes.content}>
        {description && (
          <span className='caption-p'>
            {description}
          </span>
        )}
        {children}
      </div>
    </Fade>
  </div>
)

export default ProgressionListItem
