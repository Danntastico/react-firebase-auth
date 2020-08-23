import React from 'react';
import { Form } from '../components/Form'
import { Field } from '../components/Field'
import { loginFields } from '../utils/fields'
import { Button } from '../components/Button'
import {useInput} from '../hooks/useInput'

export const Login = () => {

  const [values, handleInputChange] = useInput({
    email: '',
    password: ''
  })

  const buttonsRender = () => (
    <Button label="Login!" type="submit" />
  )
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }  
  
  return (
    <div>
      <Form title="Login" onSubmit={handleSubmit}>
        {
          loginFields.map((item) => (
            <Field 
              key={ item.name} 
              handleInputChange={handleInputChange}
              value={values[item.name]}
              {...item} />
          ))
        }
        {
          buttonsRender()
        }
      </Form>
    </div>
  );
};
