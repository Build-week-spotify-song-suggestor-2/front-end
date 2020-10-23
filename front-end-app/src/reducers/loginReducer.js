import { 
  LOGIN_DATA_START, 
  LOGIN_DATA_SUCCESS, 
  LOGIN_DATA_FAIL,
} from '../actions/actionTypes'


const initialState = {
  error: '',
  loading: false,
  data: {}
}


export const loginReducer = ( state = initialState, action ) => {

  switch (action.type){

    case LOGIN_DATA_START:
      return{
        ...state,
        loading: true
      }

    
      case LOGIN_DATA_SUCCESS:

        return{
          ...state,
          loading: false,
          data: action.payload,
        }
      
      case LOGIN_DATA_FAIL:
        return{
          ...state,
          loading: false,
          error: action.payload
        }
      
      default: return state;
    
  }
}