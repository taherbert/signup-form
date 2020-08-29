import copy from 'copy-to-clipboard'
import { createSlice } from '@reduxjs/toolkit'

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    open: true,
    copied: false,
    email: '',
    code: '2020CouponCode',
  },
  reducers: {
    showSignup: state => {
      state.open = true
    },
    hideSignup: state => {
      state.open = false
    },
    setCopied: state => {
      state.copied = true
    },
  },
})

export const { showSignup, hideSignup, setCopied } = signupSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const copyCode = amount => (dispatch, getState) => {
  const { code } = getState().signup
  copy(code)
  dispatch(setCopied())
}

// Selector for selecting the open value from state
export const selectOpen = state => state.signup.open
export const selectIsCopied = state => state.signup.copied
export const selectCode = state => state.signup.code

export default signupSlice.reducer
