import React from 'react';
import { Form } from '../components/Form';
import { Field } from '../components/Field';
import { registerFields } from '../utils/fields'
import { Button } from '../components/Button';
import { useInput } from '../hooks/useInput';

export const Register = () => {

  const [values, handleInputChange, reset] = useInput({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  })

  const buttonsRender = () => (
    <Button label="Login!" type="submit" />
  )
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    reset();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} title="Register">
        {
          registerFields.map((item) => (
            <Field key={ item.name} value={values[item.name]} handleInputChange={handleInputChange} {...item} />
          ))
        }
        {
          buttonsRender()
        }
      </Form>
    </div>
  );
};
