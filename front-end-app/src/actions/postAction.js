import axios from 'axios'
import {
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL
} from './actionTypes'



export const postData = data => dispatch => {

  dispatch({ type: POST_DATA_START });

  setTimeout(() => {
    
    axios
      .post('url/url', data)

      .then(response => {
        const data = response.data.results;
        dispatch({ type: POST_DATA_SUCCESS, payload: data })
      })

      .catch(error => {
        const errorMsg = error.message;
        dispatch( { type: POST_DATA_FAIL, payload: errorMsg } )
      })
  }, 1000)

}