import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useSelector, useDispatch } from 'react-redux'
import { hideSignup, selectOpen } from './signupSlice'

export default function SignupModal() {
  const signupOpen = useSelector(selectOpen)
  const dispatch = useDispatch()

  // Logic for closing signup modal
  const handleClose = () => {
    dispatch(hideSignup())
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='signup-modal-title'
      open={signupOpen}
    >
      <DialogTitle id='signup-modal-title'>This is the modal</DialogTitle>
    </Dialog>
  )
}
