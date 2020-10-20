import { 
  POST_DATA_START, 
  POST_DATA_SUCCESS, 
  POST_DATA_FAIL,
} from '../actions/actionTypes'


const initialState = {
  error: '',
  loading: false,
  data: {}
}


export const postReducer = ( state = initialState, action ) => {

  switch (action.type){

    case POST_DATA_START:
      return{
        ...state,
        loading: true
      }
    
      case POST_DATA_SUCCESS:
        return{
          ...state,
          loading: false,
          data: action.payload,
        }
      
      case POST_DATA_FAIL:
        return{
          ...state,
          loading: false,
          error: action.payload
        }
      
      default: return state;
    
  }
}