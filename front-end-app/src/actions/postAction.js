import axios from 'axios'
import {
  LOGIN_DATA_START,
  LOGIN_DATA_SUCCESS,
  LOGIN_DATA_FAIL,
  SONG_DATA_START,
  SONG_DATA_SUCCESS,
  SONG_DATA_FAIL
} from './actionTypes'




export const postData = (data, type) => dispatch => {

    
  if (type === 'login')
  {

    dispatch({ type: LOGIN_DATA_START })

    axios

      .post(`https://salty-atoll-28049.herokuapp.com/api/auth/login`, data)

      .then(response => {

        console.log('postAction: postData: LOGIN response: ', response)
        localStorage.setItem("token", response.data.token)
        const data = response.data.message;
        dispatch({ type: LOGIN_DATA_SUCCESS, payload: data })

      }
      )

      .catch(error => {
        console.log('postAction: postData: register error: ', error)
        const errorMsg = error.message;
        dispatch( { type: LOGIN_DATA_FAIL, payload: errorMsg } )
       })
  }

  if(type === 'register') {

    axios

      .post('https://salty-atoll-28049.herokuapp.com/api/auth/register', data)

      .then(response => {

        console.log('postAction: postData: REGISTER response: ', response)
        
      })

      .catch(error => {
        console.log('postAction: postData: REGISTER error: ', error.message)
      })

  }

  if (type === 'suggest'){

      dispatch({ type: SONG_DATA_START })
      
      const artist = data.artist;
      const title = data.title;

      axios

        .post(`https://suggestify-api.herokuapp.com/predict`, {artist, title})

        .then(response => {
          console.log('postAction: postData: SUGGEST response: ', response)
          const data = response.data.recommendations
          dispatch({ type: SONG_DATA_SUCCESS, payload: data })
        })

        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: SONG_DATA_FAIL, payload: errorMsg } )
        })

  }
  
}
    
  
  
        
  



