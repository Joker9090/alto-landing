import clsx from 'clsx'
import React from 'react'
import classes from './stepper.module.scss'
import Button from '../button/button.jsx'

const Stepper = ({
  title,
  steps,
  currentStep,
  onBackClick,
  onNextClick,
}) => {

  const currentStepObject = steps[currentStep - 1]

  const lineFragments = new Array(steps.length).fill()

  return (
    <div className={classes.stepper}>
      <div className={classes.topInfo}>
        <h1>{title}</h1>
        <span>Step {currentStep} of {steps.length}</span>
      </div>
      <div className={classes.line}>
        {lineFragments.map((fragment, idx) => (
          <div key={idx} className={classes.lineFragment}>
            <div className={clsx(classes.fragmentFill, currentStep >= idx + 1 && classes.filled)} />
          </div>
        ))}
      </div>
      <div className={classes.childrenContainer}>
        {currentStepObject.children}
      </div>
      <div className={classes.buttonContainer}>
        {currentStep !== 1 && <Button onClick={currentStepObject.backClick || onBackClick} variant='outline'>{currentStepObject.backLabel || 'Back'}</Button>}
        <Button onClick={currentStepObject.nextClick || onNextClick} variant='inverted'>{currentStepObject.nextLabel || 'Next'}</Button>
      </div>
    </div>
  )
}

export default Stepper
