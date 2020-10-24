import React from "react";
import { useForm } from 'react-hook-form'
import { Button, Form, InputGroup } from 'reactstrap'
import { postData } from '../actions/postAction'
import { FormInput } from './FormInput'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Login = props => {


  const { push } = useHistory()

  //add watch if you want to watch
  const { register, handleSubmit, errors } = useForm()

  const login = data => {

    console.log('Login submit: data: ', data)
    props.postData(data, 'login')
    setTimeout(() => {
      push(`/profile/${data.username}`)
    }, 100)
  }

  //uncomment these if you want to watch input in console (need watch above)
  // console.log(watch('username'))
  // console.log(watch('password'))

  return (
    
    <div className='login'>

      <h3>User Login</h3>

      <Form onSubmit={handleSubmit(login)}>

        <InputGroup className='form'>
          <FormInput 
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            register={register}
            errors={errors.username}
          />
        </InputGroup>

        <InputGroup className='form'>
          <FormInput 
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            register={register}
            errors={errors.password}
          />
        </InputGroup>

        <Button className='button'>Log in</Button>

      </Form>
     </div>



    );
  }

  const mapStateToProps = state => {
    return {
      login: state.data
    }
  }




export default connect(mapStateToProps, { postData }) (Login);