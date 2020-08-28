import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { showSignup } from './features/signup/signupSlice'
import SignupModal from './features/signup/SignupModal'

// Using css grid is overkill here, but included as an example
// because it is my typical "daily driver" for most top-level
// application layouts
const OuterContainer = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 100vh;
  grid-template-areas: 'container';
`

const ButtonContainer = styled.div`
  && {
    display: grid;
    align-items: center;
    justify-items: center;
  }
`

function App() {
  const dispatch = useDispatch()

  // Logic for opening signup modal
  const handleSignupOpen = () => {
    dispatch(showSignup())
  }

  return (
    <OuterContainer>
      <ButtonContainer>
        <Button variant='contained' color='primary' onClick={handleSignupOpen}>
          Sign up
        </Button>
      </ButtonContainer>
      <SignupModal />
    </OuterContainer>
  )
}

export default App
