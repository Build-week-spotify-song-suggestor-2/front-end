import * as yup from 'yup'

export const formSchema = yup.object().shape({

  password: yup
    .string()
    .max(18, 'Password must be shorter than 18 characters')
    .required("Required"),

  username: yup
    .string()
    .max(10, 'Username must not be longer than 8 characters')
    .required("Required"),
  
  search: yup
    .string()
    .max(30)
    .required('required')

});