import { 
  SONG_DATA_START, 
  SONG_DATA_SUCCESS, 
  SONG_DATA_FAIL,
} from '../actions/actionTypes'

const initialState = {
  
  loading: false,
  error: '',
  songData: [],

}

export const songReducer = ( state = initialState, action ) => {

  switch ( action.type ){

    case SONG_DATA_START:
      return {
        ...state,
        loading: true
      }

    case SONG_DATA_SUCCESS:
      return{
        ...state,
        loading: false,
        songData: action.payload,
        error: ''
      }

    case SONG_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    

    default: return state;
  }

}
