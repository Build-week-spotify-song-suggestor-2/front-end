import { combineReducers } from 'redux'
import deleteReducer from './deleteReducer'
import fetchReducer from './getReducer'
import putReducer from './putReducer'
import pushReducr from './postReducer'


export const rootReducer = combineReducers({

  songs: getReducer,
  delete: deleteReducer,
  newUser: putReducer,
  login: postReducer

})
