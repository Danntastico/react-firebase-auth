import React from 'react';
import { FieldContainer, Input, Label } from './styles'
export const Field = ({name, label, placeholder, inputType, fieldType, value, handleInputChange, disabled}) => {
  const renderFieldType = () => {
    switch (fieldType) {
      case "textarea":
        return (
        <textarea 
          name={name}
          id={name}
          value={value}
          onChange={handleInputChange}
        />)
      default:
        return (
          <Input
          autoComplete='off'
          disabled={disabled}
          id={name}
          name={name}
          onChange={handleInputChange}
          placeholder={placeholder}
          type={inputType}
          value={value}
          />
        )
    }
  }


  return (
    <FieldContainer>
      <Label htmlFor={name}> {label} </Label>
      {renderFieldType()}
    </FieldContainer>
  );
};