import copy from 'copy-to-clipboard'
import { createSlice } from '@reduxjs/toolkit'
import pRetry from 'p-retry'

// A basic slice using redux-toolkit. I prefer this to writing
// standard, "traditional" redux because it vastly reduces
// boilerplate (and it's now the "officially" recommended way!)
// https://redux-toolkit.js.org/
export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    open: false,
    copied: false,
    email: '',
    code: '2020CouponCode',
    helperText: '',
    error: false,
    success: false,
  },
  reducers: {
    showSignup: state => {
      state.open = true
    },
    hideSignup: state => {
      state.open = false
      state.copied = false
      state.error = false
      state.success = false
      state.helperText = ''
    },
    setCopied: state => {
      state.copied = true
    },
    signupError: (state, action) => {
      state.helperText = action.payload
      state.error = true
    },
    signupSucceeded: (state, action) => {
      state.helperText = ''
      state.error = false
      state.success = true
    },
  },
})

export const {
  showSignup,
  hideSignup,
  setCopied,
  signupError,
  signupSucceeded,
} = signupSlice.actions

// Thunk for copying code to clipboard and setting appropriate copied state
export const copyCode = () => (dispatch, getState) => {
  const { code } = getState().signup
  copy(code)
  dispatch(setCopied())
}

// Thunk for submitting the email form with two failure retries.
// Typically, this simple validation should also be performed on the front-end but
// I omitted it here so that we could send bad data to the API to receive both success
// and failure responses.

// Rather than implementing the retry logic by hand, I used the (very popular)
// p-retry: https://www.npmjs.com/package/p-retry
// However, for an example of a simple implementation of this see utils/fetchWithRetry.js

// We likely would want to cancel any currently running requests when signup modal is closed,
// but did not implement that piece for sake of brevity.
const fetchEmail = async payload => {
  const apiUrl =
    'https://us-central1-givingassistant-demo.cloudfunctions.net/validateEmail'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }
  const response = await fetch(apiUrl, options)

  if (response.status !== 200) {
    throw new Error(response.statusText)
  }

  return response.json()
}

export const submitForm = email => async dispatch => {
  const payload = { email }
  try {
    await pRetry(() => fetchEmail(payload), {
      // Showing retries for demonstration purposes, production app wouldn't include this. p-retry
      // is handling throttling and exponential backoff for us.
      onFailedAttempt: error => {
        dispatch(
          signupError(
            `Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} retries left.`
          )
        )
      },
      retries: 2,
    })
    dispatch(signupSucceeded())
  } catch (err) {
    dispatch(
      signupError('Unable to subscribe. Are you sure that was a valid email?')
    )
    console.error(err)
  }
}

// Simple selectors for grabbing pieces of state. In more complex applications,
// we might memoize more complex selectors using createSelector.
export const selectOpen = state => state.signup.open
export const selectIsCopied = state => state.signup.copied
export const selectCode = state => state.signup.code
export const selectError = state => state.signup.error
export const selectSuccess = state => state.signup.success
export const selectHelperText = state => state.signup.helperText

export default signupSlice.reducer
