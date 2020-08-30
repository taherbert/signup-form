import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import indigo from '@material-ui/core/colors/indigo'
import grey from '@material-ui/core/colors/grey'

import { useSelector, useDispatch } from 'react-redux'
import { selectIsCopied, selectCode, copyCode } from './signupSlice'
import Logo from 'components/Logo'
import postmatesLogo from 'media/postmates.webp'

// Flexbox layout for demonstration purposes. We could just as easily
// do the layout as css-grid.
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
  padding-bottom: 24px;
  align-items: center;
  margin-top: 48px;
`

const Disclaimer = styled(Typography)`
  && {
    flex: 0 1 auto;
    padding-bottom: 24px;
  }
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
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-right: 2px solid;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 12px;
    text-transform: uppercase;
    color: ${indigo[500]};
    letter-spacing: 1px;
    font-weight: 700;
    text-align: center;
  }
`
const CopyCodeButton = styled(Button)`
  && {
    flex: 0 1 auto;
    border: 2px solid ${indigo[500]};
    border-radius: 1px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    border-color: ${p => (p.iscopied ? grey[300] : indigo[500])};
    min-width: 100px;
  }
`

export default function CouponDetails() {
  const dispatch = useDispatch()
  const isCopied = useSelector(selectIsCopied)
  const code = useSelector(selectCode)

  const handleCopyClick = () => {
    dispatch(copyCode())
  }

  const copyText = isCopied ? 'Copied!' : 'Copy'
  return (
    <CouponDetailsLayout>
      <StyledLogo size='small' />
      <TitleContainer>
        <VendorImage src={postmatesLogo} />
        <Title variant='h6'>
          Save 20% on your next delivery with Postmates!
        </Title>
      </TitleContainer>
      <Disclaimer>
        Offer good for purchases of at least $15. Valid only for new or existing
        Postmates Unlimited members.
      </Disclaimer>
      <CouponCodeContainer>
        <CouponCode variant='button'>{code}</CouponCode>
        <CopyCodeButton
          color='primary'
          variant='contained'
          onClick={handleCopyClick}
          disabled={isCopied}
          iscopied={isCopied ? 1 : 0}
        >
          {copyText}
        </CopyCodeButton>
      </CouponCodeContainer>
    </CouponDetailsLayout>
  )
}
