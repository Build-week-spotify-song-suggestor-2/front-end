import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, InputGroup, Button } from 'reactstrap'
import { FormInput } from './FormInput'
import { postData } from '../actions/postAction'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { formSchema } from '../utilities/formSchema'


const NewUser = props => {

  const { push } = useHistory();

  //add watch if you want to watch
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onblur',
    //resolver: yupResolver(formSchema)
  })

  //uncomment these if you want to watch input in console
  // console.log(watch(username))
  // console.log(watch(password))


  
  const submitNewUser =  data => {
    console.log('NewUser Form: newUser data: ', data)
    props.postData(data, 'register')
    push('/')//will replace path with a profile page once the component is built
  }
 

  return (

  <div className='login'>

      <h3>Create Account</h3>

    <Form onSubmit={handleSubmit(submitNewUser)} className='form'>

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
        />
      </InputGroup>
      <Button>Create</Button>
    </Form>

  </div>
  );
}

const mapStateToProps = state => {
  return {
    newUser: state.data
  }
}


export default connect(mapStateToProps, { postData })(NewUser)


