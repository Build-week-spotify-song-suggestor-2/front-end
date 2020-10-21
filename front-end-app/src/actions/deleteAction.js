import { axiosWithAuth } from '../api/axiosWithAuth';
import {
  DELETE_DATA_START,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAIL
} from './actionTypes'


export const deleteData = data => dispatch => {

  dispatch({ type: DELETE_DATA_START });

  setTimeout(() => {
    
    axiosWithAuth()
      .delete('')

      .then(response => {
        const data = response.data.results;
        dispatch({ type: DELETE_DATA_SUCCESS, payload: data })
      })

      .catch(error => {
        const errorMsg = error.message;
        dispatch( { type: DELETE_DATA_FAIL, payload: errorMsg } )
      })
  }, 1000)

}