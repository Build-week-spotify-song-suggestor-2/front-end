import React from "react";
import { useForm } from 'react-hook-form'
import { FormInput } from './FormInput'


const SearchForm = props => {

  const { register, handleSubmit, watch, errors } = useForm()

  //uncomment this if you want to watch text in console
  //console.log(watch('search'))

  const search = data => {
    console.log('SearchForm.js: handleSubmit Data: ', data)
    //this will be an axios call
  };

  return (

    <Form onSubmit={handleSubmit(search)}> 

      <FormInput
        className="searchBar"
        placeholder="Search Here..."
        name="search"
        type="text"
        label='search'
        ref={register({ required: true })}
        errors={errors.search}
      />
      

      <Button>Search</Button>

    </Form>
  );
};

export default SearchForm