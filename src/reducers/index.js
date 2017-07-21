import commentReducer from './comment'
import postReducer from './post'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  comments:commentReducer,
  posts:postReducer
})

export default rootReducer
