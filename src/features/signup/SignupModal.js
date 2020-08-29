import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'

import { useSelector, useDispatch } from 'react-redux'
import { hideSignup, selectOpen } from './signupSlice'
import CouponDetails from './CouponDetails'
import SignupForm from './SignupForm'

const SignupLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'coupon form';
`

export default function SignupModal() {
  const signupOpen = useSelector(selectOpen)
  const dispatch = useDispatch()

  // Logic for closing signup modal
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
