import React, { useState } from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import shoppingBag from 'media/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  hideSignup,
  submitForm,
  selectSuccess,
  selectError,
  selectHelperText,
} from './signupSlice'

// css-grid grid isn't necessarily required here, but I
// find it useful to have it in place for ease
// of extensibility in the future and to minimize the
// number of container elements required.
const SignupFormLayout = styled.div`
  grid-area: form;
  padding-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 150px auto auto auto auto;
  grid-row-gap: 24px;
  grid-template-areas:
    'form-close'
    'form-image'
    'form-header'
    'form-details'
    'form-input'
    'form-button';
  background-image: linear-gradient(103deg, #d0f6f6, #d7f6d8);

  @media (max-width: 768px) {
    grid-row-gap: 16px;
    padding-bottom: 24px;
    grid-template-rows: 50px 100px auto auto auto auto;
  } ;
`

const ButtonBar = styled.div`
  grid-area: form-close;
  padding: 0 0 0 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`

const ImageContainer = styled.div`
  grid-area: form-image;
  padding: 0 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const ShoppingBagImage = styled.img`
  grid-area: form-image;
  padding: 0 24px;
  height: 100%;
`

const Header = styled(Typography)`
  && {
    grid-area: form-header;
    padding: 0 24px;
    text-align: center;
  }
`
const Details = styled(Typography)`
  && {
    grid-area: form-details;
    justify-self: center;
    max-width: 350px;
    padding: 0 24px;
  }
`

const InputContainer = styled.div`
  padding: 0 24px;
  grid-area: form-input;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const EmailInput = styled(TextField)`
  && {
    max-width: 350px;
    input {
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`
const SubmitButton = styled(Button)`
  && {
    margin: 0 24px;
    max-width: 150px;
    grid-area: form-button;
    justify-self: center;
  }
`

export default function SignupForm() {
  // Stored email as local state because the rest of the application
  // does not need access to this data. This could easily be moved into
  // Redux, but wanted to include some local state management for
  // demonstration purposes.
  const [email, setEmail] = useState('')
  const hasError = useSelector(selectError)
  const succeeded = useSelector(selectSuccess)
  const helperText = useSelector(selectHelperText)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(hideSignup())
  }
  const handleInput = e => {
    setEmail(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(submitForm(email))
  }
  return (
    <SignupFormLayout>
      <ButtonBar>
        <IconButton aria-label='close' onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </ButtonBar>
      <ImageContainer>
        <ShoppingBagImage src={shoppingBag} />
      </ImageContainer>
      <Header variant='h6' gutterBottom={false}>
        Want more deals?
      </Header>
      <Details variant='body1'>
        Be the first to hear about new offers from our partners and updates from
        us.
      </Details>
      <InputContainer>
        {succeeded ? (
          <Typography variant='h6' color='primary'>
            Thanks for subscribing!
          </Typography>
        ) : (
          <EmailInput
            fullWidth
            variant='filled'
            label='email'
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={handleInput}
            helperText={helperText}
            error={hasError}
          />
        )}
      </InputContainer>
      {!succeeded && (
        <SubmitButton
          fullWidth
          variant='contained'
          color='secondary'
          onClick={handleSubmit}
        >
          Subscribe
        </SubmitButton>
      )}
    </SignupFormLayout>
  )
}
