import React from "react";
import { useForm } from 'react-hook-form'
import { FormInput } from './FormInput'
import { Form, Button, InputGroup } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { formSchema } from '../utilities/formSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { postData } from '../actions/postAction'


const SearchForm = props => {


  
  const dispatch = useDispatch()


  //add watch if you want to watch
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    //resolver: yupResolver(formSchema)
  })

  //uncomment this if you want to watch text in console and add watch above
  //console.log(watch('search'))

  const search = data => {

    console.log('SearchForm.js: handleSubmit Data: ', data)
    dispatch(postData(data, 'suggest'))
  };

  return (

    <div>
    <Form onSubmit={handleSubmit(search)}> 

      <InputGroup className='form'>
        <FormInput
          className="searchBar"
          placeholder="Artist"
          name="artist"
          type="text"
          register={register}
          errors={errors.search}
        />
      </InputGroup>

      <InputGroup>
        <FormInput
          className="searchBar"
          placeholder="Title"
          name="title"
          type="text"
          register={register}
          errors={errors.search}
        />
      </InputGroup>

      <Button className='button'>Search</Button>

    </Form>

    

    </div>

  );
};



export default SearchForm