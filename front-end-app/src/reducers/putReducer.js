import { 
  PUT_DATA_START, 
  PUT_DATA_SUCCESS, 
  PUT_DATA_FAIL,
} from '../actions/actionTypes'


const initialState = {
  loading: false,
  error: '',
  data: {}
}

export const putReducer = ( state = initialState, action ) => {

  switch ( action.type ){

    case PUT_DATA_START:
      return {
        ...state,
        loading: true
      }

    case PUT_DATA_SUCCESS:
      return{
        ...state,
        loading: false,
        data: action.payload,
      }

    case PUT_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    

    default: return state;
  }

}