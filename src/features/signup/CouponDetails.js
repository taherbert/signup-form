import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { useSelector, useDispatch } from 'react-redux'
import { hideSignup, selectOpen } from './signupSlice'
import Logo from 'components/Logo'
import postmatesLogo from 'media/postmates.webp'

const CouponDetailsLayout = styled.div`
  grid-area: coupon;
  padding: 24px;
  display: flex;
  flex-flow: column nowrap;
`

const StyledLogo = styled(Logo)`
  grid-area: logo;
`

const TitleContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-flow: row nowrap;
  padding: 48px 0;
  align-items: center;
  margin-top: 48px;
`

const VendorImage = styled.img`
  flex: 0 0 98px;
  height: 98px;
  border: 1px solid lightgray;
  border-radius: 4px;
`

const Title = styled(Typography)`
  flex: 1 0 0px;
  padding-left: 12px;
`

const CouponCodeContainer = styled.div`
  grid-area: coupon;
  display: flex;
  flex-flow: row nowrap;
`
const CouponCode = styled(Typography)`
  && {
    flex: 1 1 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-color: grey;
    padding: 12px;
    text-transform: uppercase;
    color: grey;
    letter-spacing: 1px;
    font-weight: 700;
  }
`
const CopyCodeButton = styled(Button)`
  && {
    flex: 0 1 auto;
    border: 1px solid grey;
    border-radius: 1px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export default function CouponDetails() {
  return (
    <CouponDetailsLayout>
      <StyledLogo size='small' />
      <TitleContainer>
        <VendorImage src={postmatesLogo} />
        <Title variant='h6'>
          Save 20% on your next delivery with Postmates!
        </Title>
      </TitleContainer>
      <CouponCodeContainer>
        <CouponCode variant='button'>2020CouponCode</CouponCode>
        <CopyCodeButton>Copy</CopyCodeButton>
      </CouponCodeContainer>
    </CouponDetailsLayout>
  )
}
