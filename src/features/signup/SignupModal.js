import React from 'react'
import styled, { css } from 'styled-components'
import Dialog from '@material-ui/core/Dialog'

import { useSelector, useDispatch } from 'react-redux'
import { hideSignup, selectOpen } from './signupSlice'
import CouponDetails from './CouponDetails'
import SignupForm from './SignupForm'

// I prefer to use css grid for top-level element structure.
// For example purposes, defining the large and small responsive
// sizes as styled-components css blocks so that they can be
// easily modified in the future or reused elsewhere. To illustrate,
// I change the order of the form to be first in the mobile view.
const large = css`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'coupon form';
`
const small = css`
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'form'
    'coupon';
`

const SignupLayout = styled.div`
  display: grid;
  ${large}
  @media (max-width: 768px) {
    ${small}
  }
`

export default function SignupModal() {
  const signupOpen = useSelector(selectOpen)
  const dispatch = useDispatch()

  // Logic for closing signup modal. I prefer to
  // have this logic be within its own function rather
  // than inline in the onClose property so that
  // we don't need to touch the JSX if more logic
  // needs to be added in the future
  const handleClose = () => {
    dispatch(hideSignup())
  }

  return (
    <Dialog
      maxWidth='md'
      onClose={handleClose}
      aria-labelledby='signup-modal-title'
      open={signupOpen}
    >
      <SignupLayout>
        <CouponDetails />
        <SignupForm />
      </SignupLayout>
    </Dialog>
  )
}
