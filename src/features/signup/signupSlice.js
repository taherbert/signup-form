import { createSlice } from '@reduxjs/toolkit'

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    open: false,
  },
  reducers: {
    showSignup: (state) => {
      state.open = true
    },
    hideSignup: (state) => {
      state.open = false
    },
  },
})

export const { showSignup, hideSignup } = signupSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {}

// Selector for selecting the open value from state
export const selectOpen = (state) => state.signup.open

export default signupSlice.reducer
