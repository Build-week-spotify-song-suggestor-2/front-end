import { combineReducers } from 'redux'
import { deleteReducer } from './deleteReducer'
import { songReducer } from './songReducer'
import { putReducer } from './putReducer'
import { loginReducer } from './loginReducer'


export const rootReducer = combineReducers({

  songs: songReducer,
  delete: deleteReducer,
  newUser: putReducer,
  login: loginReducer

})
