import React from "react";
import { useForm } from 'react-hook-form'
import { Button, Form, InputGroup } from 'reactstrap'
import { postData } from '../actions/postAction'
import { FormInput } from './FormInput'

const Login = () => {


  const { register, handleSubmit, watch, errors } = useForm()

  const login = data => {
    console.log('Login submit: data: ', data)
    postData(data)
  }

  //uncomment these if you want to watch input in console
  // console.log(watch('username'))
  // console.log(watch('password'))

  return (
    
    <div>

      <Form className='login' onSubmit={handleSubmit(login)}>

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

        <Button>Log in</Button>

      </Form>
     </div>



    );
  }




export default Login;