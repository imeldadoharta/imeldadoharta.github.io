import {configureStore} from '@reduxjs/toolkit'
import productReducers from '../Reducer/productReducer'
import userReducers from '../Reducer/userReducer'
import { combineReducers } from "redux";

// const reducer={
//     prodReducers:productReducers,
//     userReducer:userReducers
// }

const reducer = combineReducers({
  userReducer : userReducers,
    prodReducers:productReducers
})

const store=configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  })

export default store