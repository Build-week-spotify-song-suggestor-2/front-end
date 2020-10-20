import { 
  DELETE_DATA_START, 
  DELETE_DATA_SUCCESS, 
  DELETE_DATA_FAIL
} from '../actions/actionTypes'


const initialState = {
  loading: false,
  error: '',
  data: {}
}

export const deleteReducer = ( state = initialState, action ) => {

  switch ( action.type ){

    case DELETE_DATA_START:
      return {
        ...state,
        loading: true
      }

    case DELETE_DATA_SUCCESS:
      return{
        ...state,
        loading: false,
        data: action.payload,
      }

    case DELETE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    

    default: return state;
  }

}