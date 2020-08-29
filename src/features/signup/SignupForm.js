import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { useSelector, useDispatch } from 'react-redux'
import { hideSignup, selectOpen } from './signupSlice'
import Logo from 'components/Logo'
import shoppingBag from 'media/shopping-bag.svg'

// css-grid grid isn't necessarily required here, but I
// find it useful to have it in place for ease
// of extensibility in the future and to simplify
// mobile styles
const SignupFormLayout = styled.div`
  grid-area: form;
  padding-bottom: 96px;
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
  return (
    <SignupFormLayout>
      <ButtonBar>
        <IconButton aria-label='close'>
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
        <EmailInput
          fullWidth
          variant='filled'
          label='email'
          type='email'
          placeholder='Enter your email address'
        >
          Input
        </EmailInput>
      </InputContainer>
      <SubmitButton fullWidth variant='contained' color='secondary'>
        Subscribe
      </SubmitButton>
    </SignupFormLayout>
  )
}
