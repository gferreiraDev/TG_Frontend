import {combineReducers, applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"

import userReducer from './reducers/user.reducer'
import storeReducer from './reducers/store.reducer'
import themeReducer from './reducers/theme.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  store: storeReducer,
  theme: themeReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))