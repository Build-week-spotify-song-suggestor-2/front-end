import { axiosWithAuth } from '../api/axiosWithAuth';
import axios from 'axios'
import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from './actionTypes'



export const fetchDataWithAuth = () => dispatch => {


    dispatch({ type: FETCH_DATA_START });

    setTimeout(() => {
      
      axiosWithAuth()
        .get('')
  
        .then(response => {
          const data = response.data.results;
          dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
        })
  
        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: FETCH_DATA_FAIL, payload: errorMsg } )
        })
    }, 1000)

  }

  
  export const fetchDataNoAuth = () => dispatch => {


    dispatch({ type: FETCH_DATA_START });

    setTimeout(() => {
      
      axios
        .get('')
  
        .then(response => {
          const data = response.data.results;
          dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
        })
  
        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: FETCH_DATA_FAIL, payload: errorMsg } )
        })
    }, 1000)

  }

  