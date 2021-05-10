import React from 'react'
import Checkbox from '../components/checkbox/checkbox.jsx';
import Dropdown from '../components/dropdown/dropdown.jsx';
import Input from '../components/input/input.jsx';
import { inputTypes } from './constants';

export const isEmailValid = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min

export const handleInputChange = (id, value, inputs, setInputsFn) => {
  const newInputs = inputs.slice().map(input => input.id !== id ? input : {
    ...input,
    value,
    error: input.touched && input.validation && !input.validation(value)
  })

  setInputsFn(newInputs)
}

export const handleInputBlur = (id, value, inputs, setInputsFn) => {
  const newInputs = inputs.slice().map(input => input.id !== id ? input : {
    ...input,
    touched: true,
    error: input.touched && input.validation && !input.validation(value)
  })

  setInputsFn(newInputs)
}

export const getInputComponent = (
  input,
  changeFunction,
  blurFunction,
  openId,
  openFunction,
  closeFunction,
  disabled
  ) => {

  switch (input.type) {
    default:
    case inputTypes.PASSWORD:
    case inputTypes.TEXTAREA:
    case inputTypes.INPUT: {
      return (
        <Input
          value={input.value}
          label={input.label}
          error={input.error}
          type={input.type}
          errorMessage={input.errorMessage}
          onChange={(val) => changeFunction(val)}
          onBlur={(val) => blurFunction(val)}
          multiline={input.type === inputTypes.TEXTAREA}
          key={input.id}
          disabled={disabled}
        />
      )
    }
    case inputTypes.DROPDOWN: {
      return (
        <Dropdown
          menuOptions={input.options}
          open={openId === input.id}
          placeholder={input.label}
          selected={input.value}
          setSelected={(val) => changeFunction(val)}
          setOpen={() => openFunction(input.id)}
          setClose={closeFunction}
          key={input.id}
          disabled={disabled}
        />
      )
    }
    case inputTypes.CHECKBOX: {
      return (
        <div className='checkbox-group'>
          {input.options.map((option) => (
            <Checkbox
              checked={input.value === option.value}
              disabled={option.disabled}
              iconName={option.iconName}
              label={option.label}
              setChecked={() => changeFunction(option.value)}
            />
          ))}
        </div>
      )
    }
  }
}

