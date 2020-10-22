import axios from 'axios'
import {
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL
} from './actionTypes'
export const postData = (data, type) => dispatch => {
  
  dispatch({ type: POST_DATA_START });
    
    axios
      .post(`https://salty-atoll-28049.herokuapp.com/api/auth/${type}`, data)
      .then(response => {
        console.log('postAction: postData: register response: ', response)
        if(type === 'login' && response.status === 200 && response.statusText === 'OK'){
          localStorage.setItem("token", response.data.token)
          const data = response.data.message;
          dispatch({ type: POST_DATA_SUCCESS, payload: data })
        }
        if(type === 'register' && response.status === 201 && response.statusText === 'Created'){
          const data = response.data
          dispatch({ type: POST_DATA_SUCCESS, payload: data })
        }
        
      })
      .catch(error => {
        console.log('postAction: postData: register error: ', error)
        const errorMsg = error.message;
        dispatch( { type: POST_DATA_FAIL, payload: errorMsg } )
      })
  
}


