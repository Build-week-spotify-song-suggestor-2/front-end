import { axiosWithAuth } from '../api/axiosWithAuth';
import axios from 'axios'
import {
  PUT_DATA_START,
  PUT_DATA_SUCCESS,
  PUT_DATA_FAIL
} from './actionTypes'


export const putData = data => dispatch => {

  dispatch({ type: PUT_DATA_START });

  setTimeout(() => {
    
    axiosWithAuth()
      .put('')

      .then(response => {
        const data = response.data.results;
        dispatch({ type: PUT_DATA_SUCCESS, payload: data })
      })

      .catch(error => {
        const errorMsg = error.message;
        dispatch( { type: PUT_DATA_FAIL, payload: errorMsg } )
      })
  }, 1000)

}