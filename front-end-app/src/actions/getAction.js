import { axiosWithAuth } from '../api/axiosWithAuth';
import axios from 'axios'
import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL
} from './actionTypes'



export const getData = (data, type) => dispatch => {


    dispatch({ type: GET_DATA_START });

    if (type === 'users'){

      axios

        .get(`https://salty-atoll-28049.herokuapp.com/api/users/${data}`)
  
        .then(response => {
          console.log('getAction: getData: users: response: ', response)
          const data = response.data.results;
          dispatch({ type: GET_DATA_SUCCESS, payload: data })
        })
  
        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: GET_DATA_FAIL, payload: errorMsg } )
        })

    }

    if (type === 'suggest'){

      axios

        .get(`https://suggestify-api.herokuapp.com/predict`, data)

        .then(response => {
          console.log('getAction: getData: suggest: response: ', response)
          //const data = response.data
          //dispatch({ type: GET_DATA_SUCCESS, payload: data })
        })

        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: GET_DATA_FAIL, payload: errorMsg } )
        })

    }
   

  }

  