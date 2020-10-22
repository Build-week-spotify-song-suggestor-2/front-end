import { axiosWithAuth } from '../api/axiosWithAuth';
import axios from 'axios'
import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL
} from './actionTypes'



export const getData = data => dispatch => {


    dispatch({ type: GET_DATA_START });

    setTimeout(() => {
      
      axiosWithAuth()

        .get(`https://salty-atoll-28049.herokuapp.com/api/users/${data}`)
  
        .then(response => {
          console.log('getAction: getData: response: ', response)
          const data = response.data.results;
          dispatch({ type: GET_DATA_SUCCESS, payload: data })
        })
  
        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: GET_DATA_FAIL, payload: errorMsg } )
        })
    }, 1000)

  }

  