import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './slice/counterSlice'
import counterSlice from "./slice/counterSlice"


export default configureStore({
  reducer: {
    counter: counterSlice,
  }
})