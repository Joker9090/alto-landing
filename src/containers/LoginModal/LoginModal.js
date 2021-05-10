import classes from './LoginModal.module.scss'
import React, { useState } from 'react'
import Modal from '../../components/modal/modal.jsx'
import { inputTypes } from '../../utils/constants.js'
import { getInputComponent, handleInputBlur, handleInputChange, isEmailValid } from '../../utils/CoolFunctions.js'
import Button from '../../components/button/button.jsx'
import { Link } from 'react-router-dom'

const loginrMap = [
  { id: 1, label: 'email', value: '', touched: false, error: false, errorMessage: 'Email is not valid', type: inputTypes.INPUT,  validation: isEmailValid },
  { id: 2, label: 'password', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.PASSWORD },
]

const LoginModal = ({ open, onClose }) => {
  const [loginInputs, setLoginInputs] = useState(loginrMap)

  return (
    <Modal title='Trainers/Gym login' open={open} onClose={onClose}>
      <div className={classes.modalBody}>
        {loginInputs && loginInputs.map(input => {
          const changeFn = (val) => handleInputChange(input.id, val, loginInputs, setLoginInputs)
          const blurFn = (val) => handleInputBlur(input.id, val, loginInputs, setLoginInputs)

          return getInputComponent(input, changeFn, blurFn)
        })}
        <div className={classes.forgotPassword}>Forgot password?</div>
        <div className={classes.bottom}>
          <div>
            <span>Don't have an account?</span>
            <Link to='/registration'>
              <span>Sign up here</span>
            </Link>
          </div>
          <Button variant='outline' onClick={onClose}>Cancel</Button>
          <Button variant='inverted'>Login</Button>
        </div>
      </div>
    </Modal>
  )
}

export default LoginModal
