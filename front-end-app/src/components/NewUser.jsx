import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, InputGroup, Button } from 'reactstrap'
import { FormInput } from './FormInput'
import { postData } from '../actions/postAction'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { formSchema } from '../utilities/formSchema'


const NewUser = () => {

  const { push } = useHistory();

  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onblur',
    resolver: yupResolver(formSchema)
  })

  //uncomment these if you want to watch input in console
  // console.log(watch(username))
  // console.log(watch(password))


  const submitNewUser = async data => {
    console.log('NewUser Form: newUser data: ', data)
    postData(data)
    await push('/')//will replace path with a profile page once the component is built
  }
 

  return (

  <div>
      <h3>Create Account</h3>

    <Form className='form-container' onSubmit={handleSubmit(submitNewUser)} className='form'>

      <InputGroup>
       <FormInput 
          type='text'
          id='username'
          name='username'
          label='Username'
          register={register}
          errors={errors.username}
        />
      </InputGroup>

      <InputGroup>
        <FormInput 
          type='password'
          id='password'
          name='password'
          label='Password'
          register={register}
          errors={errors.password}
        />
      </InputGroup>
      <Button>Create</Button>
    </Form>

  </div>
  );
}

export default NewUser


