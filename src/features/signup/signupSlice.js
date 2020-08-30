import copy from 'copy-to-clipboard'
import { createSlice } from '@reduxjs/toolkit'

// A basic slice using redux-toolkit. I prefer this to writing
// standard, "traditional" redux because it vastly reduces
// boilerplate (and it's now the "officially" recommended way!)
// https://redux-toolkit.js.org/
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
      state.copied = false
    },
    setCopied: state => {
      state.copied = true
    },
  },
})

export const { showSignup, hideSignup, setCopied } = signupSlice.actions

// Thunk for copying code to clipboard and setting appropriate copied state
export const copyCode = amount => (dispatch, getState) => {
  const { code } = getState().signup
  copy(code)
  dispatch(setCopied())
}

// Simple selectors for grabbing pieces of state. In more complex applications,
// we might memoize more complex selectors using createSelector.
export const selectOpen = state => state.signup.open
export const selectIsCopied = state => state.signup.copied
export const selectCode = state => state.signup.code

export default signupSlice.reducer
