import { combineReducers } from 'redux'
import { deleteReducer } from './deleteReducer'
import { getReducer } from './getReducer'
import { putReducer } from './putReducer'
import { postReducer } from './postReducer'


export const rootReducer = combineReducers({

  songs: getReducer,
  delete: deleteReducer,
  newUser: putReducer,
  login: postReducer

})
