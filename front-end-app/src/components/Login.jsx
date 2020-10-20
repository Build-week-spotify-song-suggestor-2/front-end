import React from "react";
import { useForm } from 'react-hook-form'
import { Button, Form, FormGroup } from 'reactstrap'
import { postData } from '../actions/postAction'

const Login = () => {


  const { register, handleSubmit, watch, errors } = useForm()

  handleSubmit = data => {
    console.log('Login submit: data: ', data)
    postData(data)
  }

  console.log(watch('username'))
  console.log(watch('password'))

  return (
    
      <div>
        <Form className='login' onSubmit={handleSubmit}>

          <FormGroup>
            <input
              placeholder='Username'
              type="text"
              name="username"
              ref={register({ required: true })}
            />
            {errors.username && <span>Username is required</span>}
          </FormGroup>

          <FormGroup>
            <input
              placeholder='Password'
              type="password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && <span>Password is required</span>}
          </FormGroup>
          <Button>Log in</Button>
        </Form>
      </div>



    );
  }




export default Login;