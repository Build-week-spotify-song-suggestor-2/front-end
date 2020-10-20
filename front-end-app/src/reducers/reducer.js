import { 
  FETCH_DATA_START, 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_FAIL,
  PUT_DATA_START, 
  PUT_DATA_SUCCESS, 
  PUT_DATA_FAIL,
  PUSH_DATA_START, 
  PUSH_DATA_SUCCESS, 
  PUSH_DATA_FAIL,
  DELETE_DATA_START, 
  DELETE_DATA_SUCCESS, 
  DELETE_DATA_FAIL
} from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: '',
  data: []
}

export const reducer = ( state = initialState, action ) => {

  switch ( action.type ){

    case FETCH_DATA_START:
      return {
        ...state,
        loading: true
      }

    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }

    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      }

    

    default: return state;
  }

}
