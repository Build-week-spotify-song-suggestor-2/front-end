import { axiosWithAuth } from '../api/axiosWithAuth';
import axios from 'axios'
import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL
} from './actionTypes'



export const getDataWithAuth = () => dispatch => {


    dispatch({ type: GET_DATA_START });

    setTimeout(() => {
      
      axiosWithAuth()
        .get('')
  
        .then(response => {
          const data = response.data.results;
          dispatch({ type: GET_DATA_SUCCESS, payload: data })
        })
  
        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: GET_DATA_FAIL, payload: errorMsg } )
        })
    }, 1000)

  }

export const getDataNoAuth = () => dispatch => {


    dispatch({ type: GET_DATA_START });

    setTimeout(() => {
      
      axios
        .get('')
  
        .then(response => {
          const data = response.data.results;
          dispatch({ type: GET_DATA_SUCCESS, payload: data })
        })
  
        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: GET_DATA_FAIL, payload: errorMsg } )
        })
    }, 1000)

  }

  