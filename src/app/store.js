import { configureStore } from '@reduxjs/toolkit'
import signupReducer from '../features/signup/signupSlice'

export default configureStore({
  reducer: {
    signup: signupReducer,
  },
})
