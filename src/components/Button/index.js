import React from 'react';
import {SubmitButton} from './styles'

export const Button = ({label, handleOnClick, type }) => {
  return (
  <SubmitButton onClick={handleOnClick} type={type} > {label}</SubmitButton>
  );
};
