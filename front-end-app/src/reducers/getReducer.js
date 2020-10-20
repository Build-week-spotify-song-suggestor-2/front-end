import { 
  GET_DATA_START, 
  GET_DATA_SUCCESS, 
  GET_DATA_FAIL,
} from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: '',
  data: []
}

export const getReducer = ( state = initialState, action ) => {

  switch ( action.type ){

    case GET_DATA_START:
      return {
        ...state,
        loading: true
      }

    case GET_DATA_SUCCESS:
      return{
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }

    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      }

    

    default: return state;
  }

}
