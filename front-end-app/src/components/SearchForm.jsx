import React from "react";
import { useForm } from 'react-hook-form'
import { FormInput } from './FormInput'
import { Form, Button } from 'reactstrap'
import { formSchema } from '../utilities/formSchema'
import { yupResolver } from '@hookform/resolvers/yup'


const SearchForm = props => {

  //add watch if you want to watch
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(formSchema)
  })

  //uncomment this if you want to watch text in console and add watch above
  //console.log(watch('search'))

  const search = data => {
    console.log('SearchForm.js: handleSubmit Data: ', data)
    //this will be an axios call
  };

  return (

    <Form onSubmit={handleSubmit(search)}> 

      <FormInput
        className="searchBar"
        placeholder="Search"
        name="search"
        type="text"
        errors={errors.search}
      />
      

      <Button>Search</Button>

    </Form>
  );
};

export default SearchForm